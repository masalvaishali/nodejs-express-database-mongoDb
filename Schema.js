import { model, Schema } from "mongoose";

const schema = Schema(
  {
    username: { required: true, type: String, minLenght: 4 },
    password: String,
  },
  { timestamps: true }
);

export default model("tutorials", schema);
