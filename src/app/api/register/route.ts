import bcypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;
    if (!email || !name || !password) {
      console.log("missing fields");
      return new NextResponse("missing fields", { status: 400 });
    }
    const hashedPassword = await bcypt.hash(password, 12);
    // const hashedPassword = password;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (error: any) {
    console.log(" registration error ", error);
    return new NextResponse(`Internal error `, { status: 500 });
  }
}
