import { model, Schema } from "mongoose";

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
});

export default model("subcategory", subCategorySchema);
