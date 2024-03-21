import { User } from "./models.js";

export const fetchUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users !");
  }
};
