import { DB } from "db/mongo";
import { NextApiRequest, NextApiResponse } from "next";
import { request } from "model/model";

export default async function ApiHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const reqinfo = new request(req.query);
    if (!reqinfo.email || !reqinfo.content) {
        res.send({ msg: "email content is no" });
        return;
    }
    reqinfo.date =
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    const u = await DB.collection("user")
        .find({ email: reqinfo.email })
        .toArray();
    if (!u.length) {
        res.send({ msg: "user no register" });
        return;
    }
    await DB.collection("build").insertOne(reqinfo.GetValue());
    let num = await DB.collection("build").countDocuments({
        email: reqinfo.email,
    });

    res.send({ msg: "created now:" + num });
    return;
}
