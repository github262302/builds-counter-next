import axios from "axios";
import { testpath } from "../../../sm/utils/env";
const getpath = testpath + "/api/builds/lately";
const isEmpty = new RegExp(/(\[.*\])/);
describe(getpath, () => {
    test("lately", async function () {
        const res = await axios
            .get(getpath, {
                params: { email: "test@qq.com" },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
    test("lately", async function () {
        const res = await axios
            .get(getpath, {
                params: { email: "26qwe.com" },
            })
            .then(res => res.data)
            .then(res => JSON.stringify(res));

        expect(res).toMatch(isEmpty);
    });
});
