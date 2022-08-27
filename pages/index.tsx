import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Line } from "@ant-design/plots";
// import { getServerSideProps } from "next";
export interface List {
    controller: string;
    api: Array<Li>;
}
interface Li {
    url: string;
    title: string;
    query: string;
}

const data: Array<List> = [
    {
        controller: "Builds",
        api: [
            {
                url: "/api/builds/create",
                title: "新增一次提交",
                query: "email content",
            },
            {
                url: "/api/builds/seecount",
                title: "查看提交次数",
                query: "email",
            },
            {
                url: "/api/builds/seelist",
                title: "查看最近的提交50次内容",
                query: "email",
            },
        ],
    },
    {
        controller: "User",
        api: [{ url: "/api/user/create", title: "创建用户", query: "email" }],
    },
    {
        controller: "chat",
        api: [{ url: "/chart", title: "查看统计", query: "email" }],
    },
];

export default function Home() {
    return (
        <div className={styles.container}>
            <div>
                <h1>编译计数器使用文档</h1>
                <h3>http://demo.vimjs.com:10006</h3>
                <br />
                参数形式 <code>query </code>
                <br />
                返回格式 <code>{`json`}</code>
                <h2>配套插件</h2>
                <h3>Webpack</h3>
                <a
                    target={"_blank"}
                    href="https://www.npmjs.com/package/builds-webpack-plugin"
                    rel="noreferrer">
                    builds-webpack-plugin
                </a>
            </div>
            <div>
                <h2>API</h2>
                {data.map((e, i) => (
                    <div key={i}>
                        <h2>{e.controller}</h2>

                        <ul>
                            {e.api.map((fa, f) => (
                                <LI {...fa} key={f} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
function LI(props: Li & { key: number }) {
    const { key, url, query, title } = props;
    const [v, setV] = useState("");

    return (
        <li key={key}>
            <strong>{url}?email=</strong>
            <input type="text" onChange={e => setV(e.target.value)} />
            <a
                target={"_blank"}
                href={`http://demo.vimjs.com:10006${url}?email=${v}`}
                rel="noreferrer">
                点击发送
            </a>
            <br />
            {title}
            <div style={{ color: "#818181" }}>query:{query}</div>
        </li>
    );
}
