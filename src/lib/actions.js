"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectDb()
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save()
    revalidatePath('/blog');
    console.log('Saved to DB');
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' };
  }
}

export const deletePost = async (formData) => {

  const { id } = Object.fromEntries(formData);

  try {
    connectDb()
    

    await Post.findByIdAndDelete(id)
    revalidatePath('/blog');
    console.log('Deleted post from DB');
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong!' };
  }
}

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const registerUser = async (formData) => {
  const { username, email, img, password, passwordVerify} = Object.fromEntries(formData);

  if (password !== passwordVerify) {return 'Passwords do not match!'};

  try {
    connectDb();

    const user = await User.findOne({username});

    if (user) {
      return "Username already exists!";
    }

    const newUser = new User({
      username, email, password, img
    })

    await newUser.save();
    console.log ("User saved to db!");
  }catch (err) {
    console.log(err);
    return {error: "Something went wrong!"}
  }
}