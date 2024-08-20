import mongoose from "mongoose";

interface IContact {
    name: string;
    email: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
}

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: false,
            validate: {
                validator: (v: string) =>
                    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
                message: (props: { value: string }) =>
                    `${props.value} is not a valid email address!`,
            },
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Contact: mongoose.Model<IContact> =
    mongoose.models.Contact || mongoose.model("Contact", schema);
