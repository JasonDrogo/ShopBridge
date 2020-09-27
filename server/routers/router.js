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
    connection.query('select * from items', function (err, records) {
            
        if (err) console.log(err)

        // send records as a response
      res.send(records);
        
    });
 
})
app.post('/postData',(req,res)=> {
  
 
  connection.query('INSERT INTO items SET ?',req.body, function (err, records) {
            
    if (err) console.log(err)
return records;
  
    
})
});
app.get('/users/:id', (req,res)=> {

  userRepository.UserInfo(req.params.id).then(data =>res.json( data))
})
app.put('/users/:id',(req,res) =>{

  userRepository.update(req.body,req.params.id).then(profiles => res.json(profiles))});
}