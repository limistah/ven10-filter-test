require("dotenv").config();
const expressApp = require("./app");
const compression = require("compression");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3310;
const app = next({ dev });
const handle = app.getRequestHandler();
const cookieParser = require("cookie-parser");
app
  .prepare()
  .then(() => {
    const server = expressApp;
    server.disable("x-powered-by");
    server.set("trust proxy", "loopback");
    server.use(compression());
    server.use(cookieParser());

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
      server.emit("listening");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
