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
<<<<<<< HEAD
const ProductItemRoute = require("./Route/ProductItem.router");
const CustomerRoute = require("./Route/Customer.router");
app.use(cors());
app.use("/product/", ProductRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  fileupload({
    useTempFiles: true,
  })
);
=======
const ProductItem = require("./Route/ProductItem.router");
const CustomerRoute = require('./Route/Customer.router')
const OrderRoute = require('./Route/Order.router')
app.use(cors());


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileupload({
   useTempFiles:true
})); 


app.use('/clerk', ClerkRoute);
app.use('/test', testRoute);
app.use('/order', OrderRoute);

>>>>>>> 427cb3e0bd52d1dd417833c5e82c38fc811d9588

app.use(
  session({
    secret: "kjcxlchiy48236",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(
  fileupload({
    useTempFiles: true,
  })
);
app.use("/public/", express.static("public"));
app.use("/clerk", ClerkRoute);
app.use("/test", testRoute);
app.use("/productitem/", ProductItemRoute);
app.use("/Customer", CustomerRoute);
app.use(
  session({
    secret: "kjcxlchiy48236",
    resave: false,
    saveUninitialized: false,
  })
);

app.listen(PORT, function () {
  console.log("Server is running on Port:", PORT);
});
