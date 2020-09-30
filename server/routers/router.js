const userRepository = require('../repository/repository')
const {connection} = require('../connection/connection')
const CircularJson = require('circular-json');
const fs = require('fs');
module.exports = (app) => {
//   var item1 = {
//     name: 'Chair',
//     description : 'Clasic Chair for Time Pass',
//     image: fs.readFileSync("C:/Users/ParasKumar/Desktop/download.jpg"),
//    price : 20000
// };
 

app.get('/data', (req,res)=> {
    connection.query('select * from items', (err, records)=>{
            
        if (err) console.log(err)

        // send records as a response
      res.send(records);
        
    });
 
})
app.post('/postData',(req,res)=> {
  
 
  connection.query('INSERT INTO items SET ?',req.body, (err, records)=> {
            
    if (err) console.log(err)
    else res.send(records);
  
    
})
});
app.post('/postToShopping',(req,res)=>{
  console.log(req.body);
  connection.query('INSERT INTO shoppingCart SET ?',req.body,(err,records)=>{
    if(err) console.log(err);
    else res.send(records);
  })
});


app.get('/getShoppingCart', (req,res)=> {
  connection.query('select * from shoppingCart', (err, records)=>{
          
      if (err) console.log(err)
      // send records as a response
   else res.send(records);
      
  });

})

}