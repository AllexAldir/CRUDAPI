import supertest from "supertest";
import { serve } from "../src/server/server";

export const testeServe = supertest(serve)
