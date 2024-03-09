"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToMongo } from "./utils";
import { signIn } from "@/app/api/auth/[...nextauth]/route";
import bcrypt from 'bcrypt';


export const addPost = async (prevState, formData) => {
  if (!formData) {
    console.error("formData is undefined");
    return { error: "No form data provided" };
  }

  const { title, body, slug, userId, img } = Object.fromEntries(Array.from(formData.entries()));

  try {
    await connectToMongo();
    const newPost = new Post({
      title,
      body,
      slug,
      img,
      userId,
    });

    await newPost.save();
    console.log("Saved to DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
    // Return a success message if everything goes well
    return { message: "Post added successfully" };
  } catch (err) {
    console.log(err);
    // Return an error object if something goes wrong
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
    return { message: "Post deleted successfully" };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};



export const addUser = async (prevState,formData) => {
  if (!formData) {
    console.error("formData is undefined");
    return { error: "No form data provided" };
  }
  const { username, email, password, img } = Object.fromEntries(Array.from(formData.entries()));
  try {
    connectToMongo();
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deleteUser = async ({ id }) => {
  if (!id) {
    console.error("ID is undefined");
    return { error: "No ID provided for deletion" };
  }
  try {
    await connectToMongo();
    await Post.deleteMany({userId: id});
    await User.findByIdAndDelete(id);

    console.log("User deleted from database");
    revalidatePath("/admin");
    return { message: "User deleted successfully" };
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

export const handleRegister = async (formData) => {
  if (!(formData instanceof FormData && typeof formData.entries === 'function')) {
    console.error('Invalid formData');
    return { error: 'Invalid form data' };
  }

  const formObject = Object.fromEntries(formData);
  const { username, email, password, passwordRepeat } = formObject;
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    await connectToMongo();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return { message: "User registered successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};





