import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/database";
import { Subscribe } from "@/models";
import { ISubscibeSaveDto } from "@/types";
import { BadRequestError } from "@/helpers";
export async function POST(req: NextRequest) {
    try {
        const { email } = (await req.json()) as { email: string };
        const newSubscribe = await Subscribe.create({ email });
        await dbConnect();
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
        if (error instanceof BadRequestError) {
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
