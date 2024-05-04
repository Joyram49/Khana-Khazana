"use server";

import {
  createUser,
  findUserByCredentials,
  toggleFavRecipe,
} from "@/db/queries";
import { User } from "@/schemas/userSchemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  let created;
  try {
    const user = User.safeParse(Object.fromEntries(formData.entries()));

    if (!user.success) {
      return {
        zodErrors: user.error.issues,
      };
    }
    created = await createUser(user.data);
  } catch (error) {
    return {
      serverErrors: error,
    };
  }

  if (created) {
    redirect("/login");
  }
}

async function performLogin(formData) {
  try {
    const credentials = Object.fromEntries(formData.entries());
    const found = await findUserByCredentials(credentials);
    return found;
  } catch (error) {
    throw error;
  }
}

async function toggleFavouriteRecipe(recipeId, authId) {
  try {
    await toggleFavRecipe(recipeId, authId);
  } catch (error) {
    throw error;
  }
}

const clearCachesByServerAction = async (path) => {
  try {
    if (path) {
      revalidatePath(path);
    } else {
      revalidatePath("/");
    }
  } catch (error) {
    console.error("clearCachesByServerAction=> ", error);
  }
};

export {
  clearCachesByServerAction,
  performLogin,
  registerUser,
  toggleFavouriteRecipe,
};
