import recipesModel from "@/models/Recipes";
import userModel from "@/models/Users";
import connectMongo from "@/services/dbConnect";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

async function getAllRecipes() {
  try {
    await connectMongo();
    const recipes = await recipesModel.find().lean();
    return replaceMongoIdInArray(recipes);
  } catch (error) {
    throw error;
  }
}

async function getAllCategories() {
  try {
    await connectMongo();
    const recipes = await recipesModel.distinct("category");
    return recipes;
  } catch (error) {
    throw error;
  }
}

async function getRecipeByCategory(category) {
  try {
    await connectMongo();
    let recipes = [];
    if (category) {
      recipes = await recipesModel.find({ category: category }).lean();
      return replaceMongoIdInArray(recipes);
    }
    return recipes;
  } catch (error) {
    throw error;
  }
}

async function getRecipeById(id) {
  try {
    await connectMongo();
    const recipe = await recipesModel.findById(id).lean();
    if (recipe) {
      return replaceMongoIdInObject(recipe);
    } else {
      return {};
    }
  } catch (error) {
    if (error.name === "CastError") {
      return {};
    }
    throw error;
  }
}

async function getAllUsers() {
  await connectMongo();
  const users = await userModel.find().lean();
  return replaceMongoIdInArray(users);
}

async function createUser(user) {
  try {
    await connectMongo();
    const isExist = await userModel.findOne({ email: user.email }).exec();
    if (isExist) {
      throw new Error("Email already exist");
    }
    return await userModel.create(user);
  } catch (error) {
    throw error.message;
  }
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function toggleFavRecipe(recipeId, authId) {
  const user = await userModel.findById(authId);
  if (user) {
    const hasRecipe = user.favourites.find((id) => id.toString() === recipeId);
    if (hasRecipe) {
      user.favourites.pull(recipeId);
    } else {
      user.favourites.push(recipeId);
    }
    user.save();
  }
}

export {
  createUser,
  findUserByCredentials,
  getAllCategories,
  getAllRecipes,
  getAllUsers,
  getRecipeByCategory,
  getRecipeById,
  toggleFavRecipe,
};
