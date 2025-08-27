
//basic express, mongodb & passport jwt syntax 
const express = require("express");
const mongoose = require("mongoose"); 
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");

// Importing models
const Admin = require("./models/Admin");
const Student = require("./models/Student");
const Faculty = require("./models/Faculty");
const { authenticateRole } = require("./models/routes/authMiddleware");

// Importing routes
const adminRoutes = require("./models/routes/admin");
const studentRoutes = require("./models/routes/student");
const facultyRoutes = require("./models/routes/faculty");
const uploadRoutes = require("./models/routes/upload");

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

 let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";

// Admin strategy
passport.use("admin",
     new JwtStrategy(opts, (jwt_payload, done) => {
        Admin.findOne({_id: jwt_payload.identifier })
            .then(admin => {
                if (admin) { 
                    return done(null, admin); 
                } else { 
                    return done(null, false); 
                    // or you could create a new account 
                }
        })
        .catch(err => {
                return done(err, false);
        });
    })
);

// Student strategy
passport.use("student",
     new JwtStrategy(opts, (jwt_payload, done) => {
        Student.findOne({_id: jwt_payload.identifier })
            .then(student => {
                if (student) { 
                    return done(null, student); 
                } else { 
                    return done(null, false); 
                    // or you could create a new account 
                }
        })
        .catch(err => {
                return done(err, false);
        });
    })
);

// Faculty strategy
passport.use("faculty",
     new JwtStrategy(opts, (jwt_payload, done) => {
        Faculty.findOne({_id: jwt_payload.identifier })
            .then(faculty => {
                if (faculty) { 
                    return done(null, faculty); 
                } else { 
                    return done(null, false); 
                    // or you could create a new account 
                }
        })
        .catch(err => {
                return done(err, false);
        });
    })
); 


// API : GET Type : / : return text "Hello World"
app.get("/", (req, res) =>{
    //req contains all data for the request
    //res contains all data for the response
    res.send("Hello World");
});

app.use("/admin" , adminRoutes);
app.use("/student" , studentRoutes);
app.use("/faculty" , facultyRoutes);
app.use("/upload" , uploadRoutes);

app.get("/admin", authenticateRole('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});

app.get("/student", authenticateRole('student'), (req, res) => {
    res.json({ message: 'Welcome Student!' });
});

app.get("/faculty", authenticateRole('faculty'), (req, res) => {
    res.json({ message: 'Welcome Faculty!' });
});

app.listen(port, () => {

    console.log("App is running on port :" + port);
}); 
