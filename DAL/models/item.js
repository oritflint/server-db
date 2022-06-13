require('../db').myConnection() 
console.log('connection secceeded!')

const mongoose = require('mongoose')                //Sort of DB
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    qty: {
        type: Number
    },
    price: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        select: false
    },
    expDate: {
        type: Date
    },
    inVDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ['garden','jewelery','electronics','home style']
    },
    email:{
        type: String,
        unique: true
    },
    address: {
        street: {type: String},
        houseNum: {type: Number},
        city: {type: String}
    },

})                                                  //Sort of Table
const itemModel = mongoose.model('item',itemSchema) //Sort of table-item tool

let Item1 = {                                     //Item to Insert
    name: 'Cable cat7',
    tiitle: 'blabla',
    qty: 10,
    price: 6.5,
    cost: 1.5,
    expDate: new Date(2025,06,01),
    category: 'electronics',
    email: 'myMail@g.com'
}

let Item2 = {                                     //Item to Insert
    name: 'mouse',
    tiitle: 'unplugged HP mouse',
    qty: 51,
    price: 25,
    cost: 19.2,
    expDate: new Date(2025,04,10),
    category: 'electronics',
    email: 'myMail@g.com'
}

let Item3 = {                                     //Item to Insert
    name: 'ring',
    tiitle: 'diamonds ring',
    qty: 4,
    price: 11500,
    cost: 8090,
    expDate: new Date(2025,05,13),
    category: 'jewelery',
    email: 'myMail@g.com'
}

let Filter = {                                     //Item to Insert
    category: 'jewelery'
}

let DelFilter = {                                  //Item to Insert
    price :6.5
}

let newValue = { $set: {                           //Item to Insert
    name: 'RING'
    }
}

async function create(docItem){
    console.log('got into create:')
    const res = await itemModel.create(docItem)
    return res;
}

async function read(docId){
    const res = await itemModel.findById(docId)
    console.log(res)
    return res;
}

async function update(docFilter, newValue, MSG){
    const res = await itemModel.updateOne(docFilter, newValue, MSG)
    console.log(res)
    return res;
}

const MSG = (err, res) =>{
    if (err) throw err;
    console.log("1 document updated");
}

async function del(docFilter){
    const res = await itemModel.deleteOne(docFilter)
    console.log("Deleted:", res)
    return res;
}


// console.log(create(Item1))                     //Insert command
// console.log(create(Item2))                     //Insert command
// console.log(create(Item3))                     //Insert command

// console.log(read("62a1fbd7361e45dc1f7fc734"))  //Read command

// console.log(update(Filter, newValue))          //Update command

// console.log(del(DelFilter))                    //Delete command
