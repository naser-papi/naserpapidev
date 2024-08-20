"use server";
import { ContactDto } from "@/types/dto/contact";
import { normalizeEmail } from "@/helpers";
import { BadRequestError } from "@/types";
import { dbConnect } from "@/database";
import { Contact } from "@/models/contact";

export async function AddNewContact(dto: ContactDto) {
    if (!dto.name || !dto.email || !dto.message) {
        throw new BadRequestError("Please enter contact information");
    }
    await dbConnect();
    const normalEmail = normalizeEmail(dto.email);
    const newDoc = await Contact.create({ ...dto, email: normalEmail });
    const savedDoc = await newDoc.save();
    return {
        name: savedDoc.name,
        email: savedDoc.email,
        message: savedDoc.message,
        id: savedDoc._id,
    } as ContactDto;
}
