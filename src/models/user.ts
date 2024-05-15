import mongoose from "mongoose";
interface ISubscribe {
    email: string;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
}
const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: (v: string) =>
                    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
                message: (props: { value: string }) =>
                    `${props.value} is not a valid email address!`,
            },
        },
    },
    { timestamps: true }
);
schema.pre("save", async function (next) {
    const exist = await Subscribe.findOne({ email: this.email });
    if (exist) {
        throw new Error("Email already exists");
    }
    next();
});
export const Subscribe: mongoose.Model<ISubscribe> =
    mongoose.models.Subscribe || mongoose.model("Subscribe", schema);
