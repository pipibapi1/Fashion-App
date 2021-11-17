
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const session = require('express-session');
const fileupload = require('express-fileupload');

const mongoose = require('mongoose');

const config = require('./configure.js');

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

  const ClerkRoute    = require('./Route/Clerk.router');
  const testRoute = require('./Route/test.router');
  const deatailRoute = require('./Route/detailRouter');
  const revenueRoute = require('./Route/revenueRouter')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileupload({
   useTempFiles:true
}));


app.use('/clerk', ClerkRoute);
app.use('/test', testRoute);
app.use('/detail', deatailRoute);
app.use('/revenue', revenueRoute);




app.use(session({
  secret: 'kjcxlchiy48236',
  resave: false,
  saveUninitialized: false
}));

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});





