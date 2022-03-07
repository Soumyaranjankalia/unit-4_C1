const express = require("express");

const app = express();


app.get("/book", logger, (req, res) => {
    res.send({route:"/book"})
})

app.get("/libraries",logger, checkPermission("librarian"), (req,res) => {
    res.send({route:"/libraries", permission:true})
});

app.get("/authors", logger, checkPermission("authors"), (req,res) => {
    res.send({route: "/authors",permission:true})
})

function logger(req, res, next){
    if(req.path == "/book"){
        console.log(req.path)
        next()
    }
    else if(req.path == "/libraries"){
        console.log(req.path)
        next()
    }
    else if(req.path == "/authors"){
        console.log(req.path)
        next()
    }
};

function checkPermission(request){
    return function logger1(req, res, next){
        if(permission == "librarian"){
            return next()
        }
        else if(permission == "authors"){
            return next()
        }
        else{
            return false
        }
    }
}

app.listen(5000, () => {
    console.log("lisening on port 5000")
})