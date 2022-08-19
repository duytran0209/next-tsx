import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";

const proxy = httpProxy.createProxyServer();
export const config = { api: { bodyParse: false } };
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // don't send proxy requests to the api server

  req.headers.cookie = "";
  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: true,
  });
}
