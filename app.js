const express = require('express');

// create instance of express
const app = express();

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

app.listen(9000, () => {
  console.log('listening on port 9000');
});







//register login

//post/1:obj qui contient id de parametre