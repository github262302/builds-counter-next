import { request } from "model/model";
import { NextApiRequest, NextApiResponse } from "next";
import { GetToThreeTen } from "sm/utils/utils";
import { DB } from "db/mongo";
import {} from "next";
/**最近一个月*/
export default async function ApiHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const reque = new request(req.query);
    if (!reque.email) {
        res.send({ msg: "[]" });
    }
    const tl = GetToThreeTen();

    const temp = [];
    for (const key in tl) {
        let num = await DB.collection("build").countDocuments({
            email: reque.email,
            date: {
                $regex: tl[key] + "\\s",
            },
        });
        temp.push({ date: tl[key], num: num });
    }

    res.send({ msg: temp });
}
