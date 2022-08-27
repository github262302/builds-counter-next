declare module "goo";
// import { NextApiRequest, NextApiResponse } from "next";
declare function ApiHandler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void>;
