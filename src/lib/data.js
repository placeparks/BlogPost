import { connectToMongo } from "./utils";
import { Post, User } from "./models";

    
export const getPost = async (slug) => {
    await connectToMongo();
    try {
        const post = await Post.findOne({ slug }).lean();
        return post;
    } catch (error) {
        throw new Error("Failed to fetch post!");
    }
};


export const getUser = async (id) => {
    try {
        await connectToMongo();
        const user = await User.findById(id).lean();
        return user;
    } catch (error) {
        throw new Error("Failed to fetch user!");
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
