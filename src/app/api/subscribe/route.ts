import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/database";
import { Subscribe } from "@/models";
import { ISubscibeSaveDto } from "@/types";
export async function POST(req: NextRequest) {
    const { email } = (await req.json()) as { email: string };
    await dbConnect();
    const newSubscribe = await Subscribe.create({ email });
    const doc = await newSubscribe.save();
    const dto: ISubscibeSaveDto = {
        email: doc.email,
    };
    return NextResponse.json(
        {
            ...dto,
        },
        { status: 201, statusText: "OK" }
    );
}
