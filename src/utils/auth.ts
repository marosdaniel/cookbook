import { hash, compare } from 'bcryptjs';

export async function hashPassword(password: string) {
  const hashPassword = await hash(password, 12);
  return hashPassword;
}

export async function comparePassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
