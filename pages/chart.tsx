import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import Link from "next/link";
import styles from "../styles/chart.module.css";
import { ModelBuilds } from "model/model";
type LineProps = {
    data: Array<Record<string, any>>;
    padding: number | "auto" | number[];
    xField: string;
    yField: string;
    xAxis: any;
    smooth: boolean;
};
function App(props) {
    const [data, setData] = useState([]);
    const [content, setContent] = useState<Array<ModelBuilds>>([]);
    async function Get() {
        const res = await fetch("/api/builds/lately?email=" + props.email).then(
            res => res.json()
        );
        setData(res.msg);
    }
    async function GetContent() {
        const res = await fetch(
            "/api/builds/seelist?email=" + props.email
        ).then(res => res.json());
        setContent(res.msg);
    }
    const config: LineProps = {
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
        GetContent();
    });
    return (
        <div style={{ padding: "48px" }}>
            <Link href="/">{"home"}</Link>
            <h1>最近30天提交统计:</h1>
            <h3>{props.email}</h3>
            <div className={styles.content}>
                <div className={styles.list}>
                    最近50次提交:
                    {content.map((e, i) => (
                        <div className={styles.single} key={i}>
                            <div>{e.content}</div>
                            <div>{e.date}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <Line {...config} />
                </div>
            </div>
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
