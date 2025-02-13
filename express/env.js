//* Manually validation

export const PORT = isNaN(process.env.PORT) ? 1000 : parseInt(process.env.PORT);

//* Using ZOD validation

import { z } from "zod"; //npm i zod

const ageSchema = z.number().min(18).max(69).int();
const userAge = 22;

const parseAge = ageSchema.parse(userAge); //checking

//console.log(parseAge);
