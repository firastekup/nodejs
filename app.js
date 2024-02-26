const express = require('express');
const mongoose=require('mongoose')
const app = express();
const dotnet = require('dotenv')
dotnet.config()
const mongo_url = process.env.mongo_url
const port = process.env.PORT || 5000



app.get('/', (req, res) => {
  res.send('welcome back');
});

app.get('/template', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/middle', (req, res, next) => {
  console.log('request number 1');
  next();
}, (req, res, next) => {
  console.log('request number 2');
  res.send('Both requests processed');
});


///1
app.get('/auth/login',(req,res)=>{ 
res.send("<h1>message with html<h1/>")})
//2
app.get("/auth/register", (req, res)=>{res.sendFile(__dirname+'/test.html')})

const tab=[{id:1,nom:"firas",prenom:"firas"},{id:2,nom:"hamda",prenom:"hamda!!"}];
//3
app.get("/all",(req,res)=>{

  res.json(tab)
})

//4

  app.get("/post/:id", (req, res) => {
    const id = req.params.id;
    const array = tab.find(user => user.id === parseInt(id));
    res.send(array)
  });

  app.get('/',(req,res)=>{})
mongoose.connect(mongo_url).then(()=>{
   console.log('connected')
   app.listen(port,()=>{
    console.log(`runing on port: ${port}`)
  })
  
})
.catch((err)=>{
  console.error('eureur')
})













//register login

//post/1:obj qui contient id de parametre