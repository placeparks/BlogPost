const mongoose = require ('mongoose');
const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
},
{timestamps: true}
);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        max:25,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isAllowed: {
        type: Boolean,
        default: false
    },
},
    {timestamps: true}
);
  
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);