import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/database";
import { Subscribe } from "@/models";
import { ISubscibeSaveDto } from "@/types";
import { ServerMessages } from "@/constants";
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
        if (error.message === ServerMessages.EMAIL_EXIST) {
            return NextResponse.json({
                status: 400,
                error: error.message,
            });
        }
        return NextResponse.json({
            status: 500,
            error: error,
        });
    }
}
