import axios from "axios";
import { testpath } from "../../../sm/utils/env";
const getpath = testpath + "/api/user/create";
const isEmpty = new RegExp(/(registered|email|success)/);
describe(getpath, () => {
    test("create", async function () {
        const res = await axios
            .get(getpath, {
                params: { email: "test@qq.com" },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
    test("create", async function () {
        const res = await axios
            .get(getpath, {
                params: { email: Math.random() * 100000 },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
    test("create", async function () {
        const res = await axios
            .get(getpath, {
                params: {
                    email:
                        "test" + Math.floor(Math.random() * 100000) + "@qq.com",
                },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
});
