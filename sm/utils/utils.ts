import axios from "axios";

export async function axios_get(
    path: string,
    params: Record<string, any>
): Promise<string> {
    const str = await axios.get(path, { params: params }).then(res => res.data);
    return JSON.stringify(str);
}

export function GetToThreeTen(): Array<string> {
    let temp = [];
    let times = new Date().toLocaleDateString().split("/");
    let timeNum = times.map(e => parseInt(e));
    for (let index = 0; index < 30; index++) {
        temp.push(`${timeNum[0]}\/${timeNum[1]}\/${timeNum[2]}`);
        if (timeNum[1] >= 1) {
            timeNum[1] -= 1;
        }
        if (timeNum[1] == 0) {
            timeNum[0] -= 1;
            timeNum[1] = 30;
        }
    }
    return temp;
}
