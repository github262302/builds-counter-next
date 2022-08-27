import { DB } from "db/mongo";
import { User, Builds } from "model/model";

import { NextApiRequest, NextApiResponse } from "next";
export default async function hh(req: NextApiRequest, res: NextApiResponse) {
    const build = new Builds(req.query);

    const u = await DB.collection("build").countDocuments({
        email: build.email,
    });
    res.send({ msg: u, query: build.GetValue() });
    return;
}
