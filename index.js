// firstly importing mongoose

// const { Decimal128 } = require("bson");
// const mongoose=require("mongoose")

// where sample is the name of database
// mongoose.connect("mongodb://127.0.0.1:27017/Sample",{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>
// {
//     console.log("connected to mongodb successfully");
// }).catch((err)=>
// {
//     console.log(err)
// })

// we can not enter the data directly in the database
// like we have done using compass and shell 
// we have to make models and schemas


// where student is a document
// we have created the schema first
// const student=new mongoose.Schema({
//     name:String,
//     height:Decimal128,
//     sports:Boolean,
// })

// now we are using the schema in the model
// const Student=new mongoose.model("Student",student);
// const adder= async ()=>
// {
//     const ss=new Student({
//         name:"Abdul Wahid",
//         height:5.8,
//         sports:true,
//     })
//     await ss.save()
// }

// adder();


// -----------------practice------------------
// connection
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Sample-1",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
{
    console.log("connected successfully to mongodb")
}).catch((err)=>
{
    console.log(err)
})

// creating schemas
const student=new mongoose.Schema({
    name:String,
    weight:Number,
    sports:Boolean,
})

const Student=new mongoose.model("Student",student);

// Method-1
// const adder= async()=>{
//     const ss=new Student 
//     ({
//         name:"Abdul Wahid",
//         weight:60,
//         sports:true,
//     })

//     const ss1=new Student 
//     ({
//         name:"Abrar Ahmed",
//         weight:55,
//         sports:true,
//     })

//     const ss2=new Student 
//     ({
//         name:"Saeed Ali",
//         weight:65,
//         sports:true,
//     })

//     await ss.save()
//     await ss1.save()
//     await ss2.save()
// }
// adder()

// Method-2

const adder = async()=>
{
    // creation
    // const ss= await Student.create({
    //     name:"yumna afsar",
    //     weight:50,
    //     sports:false,
    // })

    // finding
    // const ss=await Student.find()
    const ss= await Student.find({weight:{$eq:60}})


    // in this method we do not save the variable
    // ss.save()
    console.log(ss)

}

adder()
