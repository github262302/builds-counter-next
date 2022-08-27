export function GetToThreeTen(): Array<string> {
    let temp = [];
    let times = new Date().toLocaleDateString().split("/");
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
