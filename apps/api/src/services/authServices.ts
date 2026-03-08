import { User } from '../routes/auth';

export async function isUniqueUsername(newUsername: string, users: User[]) {
    if (users.find((u) => u.username === newUsername)) {
        return {unique: false, message: "This Username is already in use"}
    } else {
        return {unique: true, message: "This Username doesn't exist"}
    }
}