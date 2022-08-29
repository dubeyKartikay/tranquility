import { hash,compare } from "bcrypt";
export async function hashPassword(password){
    const res = await hash(password,12);
    return res; 
}
export async function verifyPassword(password,hashedPassword){
    return await compare(password,hashedPassword);
}
