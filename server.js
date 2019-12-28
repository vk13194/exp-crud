const express= require('express');
const app = express();
const exphbs =require('express-handlebars');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

app.use(bodyparser.json());
//map global promise
mongoose.Promise = global.Promise;
// connect mongoose
mongoose.connect('mongodb://localhost:27017/testdb',{
// useMongoClient:true,
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useFindAndModify: false 
}).then(()=> console.log('mongodb connected'))
.catch(err => console.log(err));


 //handlebar
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
//router
app.use('/', require('./routes/index'));

port=5000;
app.listen(port, ()=>{
console.log(`server start at port${port}`);
});