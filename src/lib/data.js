import { connectToMongo } from "./utils";
import { Post, User } from "./models";
import mongoose from "mongoose";
    
export const getPost = async (slug) => {
    try {
        await connectToMongo();
const post = await Post.findOne({ slug }).lean();
        return post;
    } catch (error) {
        throw new Error("Failed to fetch post!");
    }
};


export const getUser = async (id) => {
    await connectToMongo();
    let user;
    try {
        if (mongoose.Types.ObjectId.isValid(id)) {
            user = await User.findById(id).lean();
        } else {
            // Assuming the GitHub ID is passed directly without the 'github-' prefix
            user = await User.findOne({ email: `github-${id}` }).lean();
        }
        if (!user) {
            throw new Error(`User not found with ID: ${id}`);
        }
        return user;
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        throw new Error(`Failed to fetch user with ID ${id}: ${error.message}`);
    }
};


    export const getPosts = async () => {
        try {
            await connectToMongo();
            const posts = await Post.find();
            return posts;
        } catch (error) {
            console.error("Error fetching posts:", error.message);
            throw new Error("Failed to fetch posts!")
        }
    }
    

export const getUsers = async () => {
    try {
        connectToMongo();
        const users = await User.find();
        console.log(users)
        return users;
    } catch (error) {
        throw new Error("Failed to fetch users!")
    }
}
