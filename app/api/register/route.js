import connectMongoDB from "@/libs/mongodb";
import Email from "next-auth/providers/email";
import { NextResponse } from "next/server";
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import connectMongoDBUsers from "@/libs/mongodbusers";

export async function POST(req){
    try{
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10); 
        await connectMongoDBUsers();
        await User.create({name, email, password: hashedPassword});

        return NextResponse.json({message: "User Registered"}, {status: 201});
        
    }catch(err){
        console.log(err);
        return NextResponse.json({message: "Error occured, check console"}, {status: 500});
    }
}