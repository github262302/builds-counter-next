import axios from "axios";
import { testpath } from "../../../sm/utils/env";
const getpath = testpath + "/api/builds/seelist";
const isEmpty = new RegExp(/\[.*\]/);
describe(getpath, () => {
    test("seecount", async function () {
        const res = await axios
            .get(getpath, {
                params: { email: "test@qq.com" },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });

    test("seecount", async function () {
        const res = await axios
            .get(getpath, {
                params: { email: "sdfscom" },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
});
