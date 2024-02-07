import { Post } from "@/lib/models"
import { connectDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    
    connectDb()

    const posts = await Post.find();
    return NextResponse.json(posts);

  }catch {
    console.log(err);
    throw new Error('Failed to fetch posts!')
  }
}