const express= require("express");
const app= express ();

app.listen (3000,()=> console.log("Servidor inicializado"));

const path =require ("path");

app.use(express.static(path.resolve(__dirname,"public")));



// Se definen rutas y respuestas en el mismo script (recordar que esto puede modularizarse)

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});