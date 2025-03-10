
//basic express syntax 
const express = require("express");
const mongoose = require("mongoose"); 

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const Student = require("./models/Student");
const Faculty = require("./models/Faculty");
const authRoutes = require("./models/routes/auth");
const adminRoutes = require("./models/routes/admin");
const studentRoutes = require("./models/routes/student");
const facultyRoutes = require("./models/routes/faculty"); 
require("dotenv").config(); 
const cors = require("cors"); 

const app = express(); 
const port=8000;

app.use(cors());
app.use(express.json());

//connect mongoDB to our node app.
mongoose.connect("mongodb+srv://kavyanshcollegemanagement:"
                 + process.env.MONGO_PASSWORD +
                 "@cluster0.w3aar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
                 {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                 })
                 .then((x) => {
                    console.log("Connected to Mongo!");
                 })
                 .catch((err) => {
                    console.log("Error while connecting to mongo");
                 });

//setup passport-jwt

/* let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";


passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({_id: jwt_payload.identifier })
            .then(user => {
                if (user) { 
                    return done(null, user); 
                } else { 
                    return done(null, false); 
                    // or you could create a new account 
                }
        })
        .catch(err => {
                return done(err, false);
        });
    })
); */


// API : GET Type : / : return text "Hello World"
app.get("/", (req, res) =>{
    //req contains all data for the request
    //res contains all data for the response
    res.send("Hello World");
});

/* app.use("/auth" , authRoutes);
app.use("/song" , songRoutes);
app.use("/playlist" , playlistRoutes); */

app.listen(port, () => {

    console.log("App is running on port :" + port);
}); 
