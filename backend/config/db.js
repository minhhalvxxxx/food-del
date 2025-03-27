import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://thanvulong:ha123456@cluster0.bh8xr.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
