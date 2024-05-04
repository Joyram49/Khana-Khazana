import mongoose from "mongoose";

const RecipesSchema = new mongoose.Schema({
  name: String,
  description: String,
  author: String,
  activeTime: String,
  totalTime: String,
  thumbnail: String,
  image: String,
  category: String,
  serves: Number,
  rating: Number,
  steps: Array,
});

const recipesModel =
  mongoose.models.Recipes || mongoose.model("Recipes", RecipesSchema);

export default recipesModel;
