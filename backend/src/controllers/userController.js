 async function createProfile(req,res){
   const result = req.body
   console.log(result);
   res.status(201).json({
    message : "success"
   })
}
module.exports = {
    createProfile
}

