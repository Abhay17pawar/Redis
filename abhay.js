import express from 'express';
const app = express();
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let blogslist = [];

app.get('/',(req,res) => {
 res.json([{name :'john'},{name :'abhay'}])
})

app.post('/home',(req,res) => {
  blogslist.push({title:req.body.title, content: req.body.content});
  return res.status(201).json({
    success:true,
  })
})
app.listen(3001,() => {
  console.log('server is listening on port 3000')
})
 