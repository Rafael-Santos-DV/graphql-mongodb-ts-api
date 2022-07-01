import mongoose from "mongoose";

async function CreateConnnectionMongodb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/crudGraphql");
    console.log("connection with sucess!");
  } catch (err) {
    throw `Erro to connect: ${err}`;
  }
}

export default CreateConnnectionMongodb;
