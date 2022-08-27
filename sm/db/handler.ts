import { DB } from "./mongo";
import type { NextApiRequest, NextApiResponse } from "next";
import { Db } from "mongodb";
import { User, Builds, request } from "../model/model";
interface Result {
    code: number;
    msg: string;
    data: any;
}
type FnCallback = (req: request, db: Db) => Promise<any>;
