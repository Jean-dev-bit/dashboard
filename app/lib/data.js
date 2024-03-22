import { User } from "./models.js";
import { connectToDB } from "./utils.js";

export const fetchUsers = async (q) => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users !");
  }
};
