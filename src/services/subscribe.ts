"use server";
import { SubscribeDto } from "@/types/dto";
import { normalizeEmail } from "@/helpers";
import { dbConnect } from "@/database";
import { Subscribe } from "@/models";
import { BadRequestError } from "@/types";
import { ServerMessages } from "@/constants";

export async function AddNewSubscribe(dto: SubscribeDto) {
    const normalEmail = normalizeEmail(dto.email);
    await dbConnect();
    const exist = await Subscribe.findOne({ email: normalEmail });
    if (exist) {
        throw new BadRequestError(ServerMessages.EMAIL_EXIST);
    }
    const newSubscribe = await Subscribe.create({ email: normalEmail });
    const doc = await newSubscribe.save();
    const resp: SubscribeDto = {
        email: doc.email,
    };
    return resp;
}
