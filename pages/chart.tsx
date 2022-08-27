import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import Link from "next/link";
function App(props) {
    const [data, setData] = useState([]);
    async function Get() {
        const res = await fetch("/api/builds/lately?email=" + props.email).then(
            res => res.json()
        );
        setData(res.msg);
    }
    const config: {
        data: Array<Record<string, any>>;
        padding: number | "auto" | number[];
        xField: string;
        yField: string;
        xAxis: any;
        smooth: boolean;
    } = {
        data: data,
        padding: "auto",
        xField: "date",
        yField: "num",
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
    };
    useEffect(() => {
        Get();
        return () => {};
    }, []);
    return (
        <div style={{ padding: "48px" }}>
            <Link href="/">{"home"}</Link>
            <h1>最近30天提交统计:</h1>
            <h3>{props.email}</h3>
            <Line {...config} />
        </div>
    );
}
export default App;

export async function getServerSideProps(context) {
    if (context.query.email) {
        return {
            props: { email: context.query.email },
        };
    }
    return {
        props: { email: "" },
    };
}
