var express = require('express','ejs');


var todocontroller = require('./controller/todocontroller');

var app = express();


// SET UP TEMPLATE ENGINE

app.set('view engine ', 'ejs');

// static files
app.use(express.static('./public'));




// fire controller 
todocontroller(app);

// listen to port

app.listen(3000);
console.log('you are listening to port 3000');


