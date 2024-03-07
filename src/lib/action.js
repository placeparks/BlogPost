"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToMongo } from "./utils";
import { signIn } from "@/app/api/auth/[...nextauth]/route";


export const addPost = async (prevState,formData) => {
  if (!formData) {
    console.error("formData is undefined");
    return { error: "No form data provided" };
  }
  const { title, body, slug, userId, img } = Object.fromEntries(Array.from(formData.entries()));
  try {
    connectToMongo();
    const newPost = new Post({
      title,
      body,
      slug,
      img,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deletePost = async ({ id }) => {
  if (!id) {
    console.error("ID is undefined");
    return { error: "No ID provided for deletion" };
  }
  try {
    await connectToMongo();
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return { error: "No post found with this ID" };
    }
    console.log("Post deleted from database");
    revalidatePath("/blog");
    revalidatePath("/admin");
    return { message: "Post deleted successfully" };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const handleLoginWithGithub = async () => {
  await signIn("github")
}

export const handleLoginWithGoogle = async () => {
  await signIn("google")
}