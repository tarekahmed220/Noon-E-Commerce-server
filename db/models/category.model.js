import { model, Schema } from "mongoose";



const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    images:{
        type: String,
        required: true,
    }
});

export default  model('category',categorySchema);