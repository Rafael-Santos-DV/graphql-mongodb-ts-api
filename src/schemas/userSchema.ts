import mongoose from "mongoose";

type User = {
  id: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  games: string[];
};

const SchemaUser = new mongoose.Schema<User>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  games: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Users", SchemaUser);
