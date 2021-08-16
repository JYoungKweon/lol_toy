import "dotenv/config";
import express from "express";
import morgan from "morgan";
import hbs from "hbs";
import path from "path";
import { lolUserData } from "../utils/lolData";

const app = express();

const PORT = process.env.PORT || 4000;

const publicStaticDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

const logger = morgan("dev");
app.use(logger);

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicStaticDirPath));

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.get("/lol", (req, res) => {
  const address = req.query.address;
  lolUserData(address, (error, { userName, summonerLevel }) => {
    if (error) {
      return res.send({
        error,
      });
    }
    console.log(userName, summonerLevel);
  });
});

app.get("/characterworks", (req, res) => {
  const address = req.query.address;
  sendCharacterworksQuery(address, (error, {}) => {
    if (error) {
      return res.send({
        error,
      });
    }
    //console.log(userName, summonerLevel);
  });
});

app.get("*", (req, res) => {
  res.send("Page not found.");
});

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
