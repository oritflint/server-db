
const mongoose = require('mongoose')
const MONGO_URL ="mongodb+srv://orelflint:Orit6165!@myserver.5xi6e.mongodb.net/store?retryWrites=true&w=majority"


//exports.connect = ()=> {}
async function connect(){
    try{
        //console.log("dsfdsfsd",x)
        await mongoose.connect(MONGO_URL,
            (err)=>{
                if(err) throw err
            })
            console.log("connection success!")
    }
    catch(err){
        console.log("DB Error: ", err.message)
    }


}
exports.myConnection = connect