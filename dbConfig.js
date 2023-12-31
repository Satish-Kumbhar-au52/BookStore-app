const mongoose= require("mongoose")
async function initDB(){
  try{
    await mongoose.connect(process.env.MONGO_URL,{dbName:'Book-Store'})
    console.log("connected to DB successfully")
  }catch(error){
    console.log("Error connecting to DB")
    process.exit()
  }
}
module.exports = {
  initDB
}