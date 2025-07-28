
// src/passwordHasher.ts

// src/passwordHasher.ts
const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function hashPass(myPlaintextPassword:string) : Promise<string> {
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
  return hash;
}

export async function verifyPass(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed)
}

//to check hash works though

// (async ()=>{
//  const val = await hashPass("hello")
//  console.log(val)
// })()