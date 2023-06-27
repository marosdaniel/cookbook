import { NextApiRequest, NextApiResponse } from 'next';

import { EMAIL_VALIDATOR_REGEX, PASSWORD_VALIDATOR_REGEX_3_CHAR, connectToDataBase } from '@/utils';
import { hashPassword } from '@/utils/auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  const validatedEmail: boolean = email && typeof email === 'string' && email.match(EMAIL_VALIDATOR_REGEX);
  const validatedPassword: boolean = password && typeof password === 'string';

  // TODO: Add validation
  if (!validatedEmail) {
    res.status(422).json({ message: 'Invalid email' });
    return;
  }
  if (!validatedPassword) {
    res.status(422).json({ message: 'Invalid password' });
    return;
  }

  const client = await connectToDataBase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;
