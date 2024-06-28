"use server";
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/database";
import { Subscribe } from "@/models";
import { ISubscibeSaveDto } from "@/types";
import { BadRequestError, normalizeEmail } from "@/helpers";
import { ServerMessages } from "@/constants";
export async function POST(req: NextRequest) {
    try {
        const { email } = (await req.json()) as { email: string };
        const normalEmail = normalizeEmail(email);
        await dbConnect();
        const exist = await Subscribe.findOne({ email: normalEmail });
        if (exist) {
            throw new BadRequestError(ServerMessages.EMAIL_EXIST);
        }
        const newSubscribe = await Subscribe.create({ email: normalEmail });
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
    } catch (error: any) {
        console.log("error", error);
        if ("statusCode" in error) {
            return NextResponse.json(
                {
                    error: error.message,
                },
                { status: error.statusCode }
            );
        }
        return NextResponse.json(
            {
                error: error,
            },
            { status: 500 }
        );
    }
}
