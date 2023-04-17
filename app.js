const express = require("./node_modules/express/");
const app = express();
const { Url, sequelize } = require("./models/urlModel");
const { v4: uuidv4 } = require("uuid");

app.use(express.static(__dirname + "/frontend"));
app.use(express.json());

(async () => {
  await sequelize.sync({ force: true });
})();

app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let url = await Url.findOne({
      where: {
        shortUrl: "https://url-shortener-8mb3.onrender.com/" + id,
      },
    });

    if (!url) {
      return res.status(404).sendFile(__dirname + "/frontend/404.html");
    }

    const longUrl = url.longUrl;
    res.redirect(longUrl);
  } catch (e) {
    res.send(JSON.stringify(e));
  }
});

app.post("/url", async (req, res) => {
  try {
    const longUrl = req.body.longUrl;
    const shortUrl =
      "https://url-shortener-8mb3.onrender.com/" + uuidv4().slice(0, 8);

    const url = await Url.create({
      longUrl,
      shortUrl,
    });

    res.send(JSON.stringify(url));
  } catch (e) {
    res.send(JSON.stringify(e));
  }
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("app is listening at port ", PORT);
});
