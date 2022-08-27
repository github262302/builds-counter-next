import { DB } from "db/mongo";
import { User } from "model/model";

import { NextApiRequest, NextApiResponse } from "next";
export default async function hh(req: NextApiRequest, res: NextApiResponse) {
    const user = new User(req.query);
    const checkEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!checkEmail.test(user.email)) {
        res.send({ msg: "not is email" });
        return;
    }
    const usercount = await DB.collection("user")
        .find({ email: user.email })
        .toArray();
    if (usercount.length) {
        res.send({ msg: "registered" });
        return;
    }
    await DB.collection("user").insertOne(user.GetValue());
    res.send({ msg: "success" });
    return;
}
