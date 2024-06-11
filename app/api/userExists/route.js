import connectMongoDBUsers from "@/libs/mongodbusers";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectMongoDBUsers();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id");
        console.log(user);
        return NextResponse.json({user}, {status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({err}, {status:500});
    }
}