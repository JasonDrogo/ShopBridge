const userRepository = require('../repository/repository')
const {connection} = require('../connection/connection')
const CircularJson = require('circular-json');
module.exports = (app) => {


app.get('/data', (req,res)=> {
    connection.query('select * from pictures', function (err, records) {
            
        if (err) console.log(err)
console.log(records);
        // send records as a response
      res.send(records);
        
    });
 
})
app.post('/users',(req,res)=> {
  userRepository.save(req.body).then(users => res.json(users))
})
app.get('/users/:id', (req,res)=> {

  userRepository.UserInfo(req.params.id).then(data =>res.json( data))
})
app.put('/users/:id',(req,res) =>{

  userRepository.update(req.body,req.params.id).then(profiles => res.json(profiles))});
}