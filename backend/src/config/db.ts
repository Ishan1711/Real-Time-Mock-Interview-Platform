import "dotenv/config";

import { Temporal } from "@js-temporal/polyfill";

(globalThis as typeof globalThis & { Temporal: typeof Temporal }).Temporal =
  Temporal;

import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../../prisma/contract.d";

const contractJson = require("../../prisma/contract.json");

const db = postgres<Contract>({
  contractJson,
  url: process.env.DATABASE_URL!,
});

export default db;