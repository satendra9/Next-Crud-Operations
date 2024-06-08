import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

//Posting data
export async function POST(req){
    const {title, description} = await req.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({message: "Topic Created"}, {status: 201});
}

//Getting all data
export async function GET(req){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}

//Delete by ID
export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Deleted successfully"}, {status: 200});
    
}