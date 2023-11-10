import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await connect();
  const { name, email, password } = await request.json();

  const user = await User.findOne({ email });
  if (user) {
    return new NextResponse(
      { message: "Email is Already Registered" },
      { status: 403 }
    );
  } else {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    try {
      await newUser.save();
      return new NextResponse("User has been created", { status: 201 });
    } catch (error) {
      return new NextResponse(error.message, { status: 500 });
    }
  }
};
