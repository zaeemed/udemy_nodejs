const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const dbService = require('./dbService');

app.engine('html', require('ejs').renderFile);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
// app.use(flash())
//   app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
//   }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(methodOverride('_method'))


  // app.get('/', (req, res) => {
  //   res.render('./index.html')
  // })


// // Create
app.get('/Signin', (request, response) => {
    // const { todo_item } = request.body;
    // const db = dbService.getDbServiceInstance();
    
    // const result = db.insertNewName(todo_item);

    // result
    // .then(data => response.json({ data: data}))
    // .catch(err => console.log(err));
        const db = dbService.getDbServiceInstance();

        const result = db.getSignInDetails();
        
        result
        // .then(data => console.log(data))
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
        // console.log('Hello');
    // console.log("Inside GET", request.body.cnic, request.body.password);
    // console.log("Inside GET");
});

app.get('/Signup', (request, response) => {
  const db = dbService.getDbServiceInstance();
  
  const result = db.getSignUpDetails();
  
  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
});

// ZAEEM THIS FUNCTION IMPLEMENTATION CAN HELP YOU, CHECK OTHER COMMENTED TOO
app.get('/getDonationData', (request, response) => {
      const db = dbService.getDbServiceInstance();
      const result = db.getDonationData();
      result
      // .then(data => console.log(data))
      .then(data => response.json({data : data}))
      .catch(err => console.log(err));
});

app.get('/Dontype', (request, response) => {
      const db = dbService.getDbServiceInstance();
      const result = db.getDonationType();
      result
      // .then(data => console.log(data))
      .then(data => response.json({data : data}))
      .catch(err => console.log(err));
});

app.get('/seek', (request, response) =>{
  const db = dbService.getDbServiceInstance();
  let userInput= {
    name: request.body.Name,
    cnic: request.body.cnic,
    city: request.body.city,
    type: request.body.quantity,
    quantity: request.body.quantity
};
console.log(userInput);
const result = db.setDonationReq(userInput);
      result
      // .then(data => console.log(data))
      .then(data => response.json({data : data}))
      .catch(err => console.log(err));
})
// // read
// app.get('/getAll', (request, response) => {
//     const db = dbService.getDbServiceInstance();

//     const result = db.getAllData();
    
//     result
//     // .then(data => console.log(data))
//     .then(data => response.json({data : data}))
//     .catch(err => console.log(err));
//     // console.log('Hello');
// });

// // update
// app.patch('/update', (request, response) => {
//     const { todo_id, todo_item } = request.body;
//     const db = dbService.getDbServiceInstance();

//     const result = db.updateNameById(todo_id, todo_item);
    
//     result
//     .then(data => response.json({success : data}))
//     .catch(err => console.log(err));
// });

// // delete
// app.delete('/delete/:todo_id', (request, response) => {
//     const { todo_id } = request.params;
//     const db = dbService.getDbServiceInstance();

//     const result = db.deleteRowById(todo_id);
    
//     result
//     .then(data => response.json({success : data}))
//     .catch(err => console.log(err));
// });

// // delete all
// app.get('/deleteAll', (request, response) => {
//     const db = dbService.getDbServiceInstance();

//     const result = db.deleteAllData();
    
//     result
//     // .then(data => console.log(data))
//     .catch(err => console.log(err));
//     // console.log('Hello');
// });

app.listen(3000, () => console.log('app is running'));


