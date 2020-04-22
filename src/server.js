import express from "express";
import socketIO from "socket.io";

const PORT = 4000;

const app = express();

app.set("view engine", "pug");
app.set("views", "./src/views");
app.use(express.static("./src/static"));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`✅Server running: httl://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server);
