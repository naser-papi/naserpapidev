import { NextRequest, NextResponse } from "next/server";
import { ContactDto } from "@/types/dto/contact";
import { AddNewContact } from "@/services";

export async function POST(req: NextRequest) {
    try {
        const rqDto = (await req.json()) as ContactDto;
        const respDto = await AddNewContact(rqDto);
        return NextResponse.json(
            {
                ...respDto,
            },
            {
                status: 201,
                statusText: "OK",
            }
        );
    } catch (error: any) {
        //TODO: add logger here
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
