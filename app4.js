const EventEmitter =require("events");

const user =new EventEmitter();

user.on("login",(username)=>{
    console.log(username + "has logged in.");
});

user.on("login",(username)=>{
    console.log("Welcome "+ username + "Hashir");
});

user.on("logout",(username)=>{
    console.log(username + "has logged in.");
});

user.emit("login","Syed ");
user.emit("exit");