"use server";
import { NextRequest, NextResponse } from "next/server";
import { SubscribeDto } from "@/types/dto";
import { AddNewSubscribe } from "@/services";
export async function POST(req: NextRequest) {
    try {
        const rdto = (await req.json()) as SubscribeDto;
        const respDto = await AddNewSubscribe(rdto);
        return NextResponse.json(
            {
                ...respDto,
            },
            { status: 201, statusText: "OK" }
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
