const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const cors = require("cors");
const session = require("express-session");
const fileupload = require("express-fileupload");

const mongoose = require("mongoose");

const config = require("./configure.js");

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database " + err);
    }
  );

const ClerkRoute = require("./Route/Clerk.router");
const testRoute = require("./Route/test.router");
const ProductRoute = require("./Route/Product.router");
const ProductItem = require("./Route/ProductItem.router");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(fileupload({
   useTempFiles:true
}));


app.use('/clerk', ClerkRoute);
app.use('/Customer', ClerkRoute);
app.use('/test', testRoute);



app.use(session({
  secret: 'kjcxlchiy48236',
  resave: false,
  saveUninitialized: false
}));
=======
app.use(
  fileupload({
    useTempFiles: true,
  })
);
app.use(express.static("public"));
app.use("/clerk", ClerkRoute);
app.use("/test", testRoute);
app.use("/product/", ProductRoute);
app.use("/productitem/", ProductItem);

app.use(
  session({
    secret: "kjcxlchiy48236",
    resave: false,
    saveUninitialized: false,
  })
);
>>>>>>> 7d7f017aef9fc1616d52afbe5077968c703018bd

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
