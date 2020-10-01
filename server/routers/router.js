
const {connection} = require('../connection/connection')
const fs = require('fs');
module.exports = (app) => {
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
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


app.delete('/deleteItem/:id',(req,res)=>{
  connection.query(`delete from shoppingCArt where id = ${req.params.id}`,(err,records)=>{
    if (err) console.log(err);
    else res.send(records);
  })
})

app.get('/info/:id',(req,res)=>{
connection.query(`select * from items where id = ${req.params.id}`,(err,record)=>{
  if(err) console.log(err);
  else res.send(record);
})
})

}