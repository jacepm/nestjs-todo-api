import { Schema } from "mongoose";

export default {
  name: "Todos",
  schema: new Schema(
    {
      title: {
        type: String,
        require: [true, "Title is required."],
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
    }
  ),
};
