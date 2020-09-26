


 class InfoRepository{
getAllProducts(){ 
 connection.query('select * from pictures', function (err, records) {
            
        if (err) console.log(err)
console.log(records);
        // send records as a response
      return records;
        
    });

}
save(profile){

  return User.create(profile).then((p)=> p).catch(error => console.log(error));
  }
  update(profile,id)
{ console.log(id);
  return User.findOneAndUpdate( {"employeeId": id}, {$set: profile});
}
UserInfo(id)
{
   return User.find({'employeeId': id}).then(profile => profile);
}

}
module.exports = new InfoRepository();