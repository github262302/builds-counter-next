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
    let timest = new Date().toLocaleDateString().split("/");
    let times = timest.reverse();
    let timeNum = times.map(e => parseInt(e));
    for (let index = 0; index < 30; index++) {
        temp.push(`${timeNum[0]}\/${timeNum[1]}\/${timeNum[2]}`);
        if (timeNum[2] >= 1) {
            timeNum[2] -= 1;
        }
        if (timeNum[2] == 0) {
            timeNum[1] -= 1;
            timeNum[2] = 30;
        }
    }
    return temp;
}
