import { DB } from "db/mongo";
import { Builds, User } from "model/model";
import { NextApiRequest, NextApiResponse } from "next";
export default async function hh(req: NextApiRequest, res: NextApiResponse) {
    const build = new Builds(req.query);
    const u = await DB.collection("build")
        .find({ email: build.email })
        .sort({ _id: -1 })
        .limit(50)
        .toArray();
    u.forEach(e => {
        delete e["_id"];
        delete e["email"];
    });
    res.send({ msg: u });
    return;
}
