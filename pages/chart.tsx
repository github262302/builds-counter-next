import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import Link from "next/link";
import styles from "../styles/chart.module.css";
import { ModelBuilds } from "model/model";
import { request_url } from "sm/utils/env";
import Image from "next/image";

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
    const [pooling, setPooling] = useState(true);
    async function Get() {
        const res = await fetch("/api/builds/lately?email=" + props.email).then(
            res => res.json()
        );
        setData(res.msg);
    }
    async function GetContent() {
        const res = await fetch(
            request_url + "/api/builds/seelist?email=" + props.email
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
        const TimerT = setInterval(function () {
            if (!pooling) {
                return;
            }
            Get();
            GetContent();
        }, 5000);

        return () => {
            clearInterval(TimerT);
        };
    }, [pooling]);
    return (
        <div style={{ padding: "48px" }}>
            <Link href="/">{"home"}</Link>
            <h1>最近30天提交统计:</h1>
            <h3>
                {props.email}
                <span>
                    <Image
                        className={
                            pooling ? styles.poolingRota : styles.pooling
                        }
                        src="/xz.png"
                        layout="fixed"
                        width={24}
                        height={24}
                        onClick={() => setPooling(e => !e)}
                        alt="f"
                    />
                </span>
            </h3>
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
