import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;

const app = express();

app.set("view engine", "pug");
app.set("views", "./src/views");
app.use(logger("dev"));
app.use(express.static("./src/static"));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`✅Server running: httl://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anon"
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
