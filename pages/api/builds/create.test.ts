import axios from "axios";
import { axios_get } from "../../../sm/utils/utils";
import { testpath } from "../../../sm/utils/env";
const getpath = testpath + "/api/builds/create";
const isEmpty = new RegExp(
    /(user no register|email content is no|created now)/
);

describe(getpath, () => {
    test("builds/create", async () => {
        const res = await axios_get(getpath, { email: "test@qq.com" });
        expect(res).toMatch(isEmpty);
    });
    test("builds/create", async () => {
        const res = await axios
            .get(getpath, {
                params: { email: "fsdfsdfsd" },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
    test("builds/create", async () => {
        const res = await axios
            .get(getpath, {
                params: { email: "test@qq.com", content: "ff" },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
    test("builds/create", async () => {
        const res = await axios
            .get(getpath, {})
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
});
