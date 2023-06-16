const KAMAILIO_JSONRPC_HOST = process.env.KAMAILIO_JSONRPC_HOST || "127.0.0.1";
const KAMAILIO_JSONRPC_PORT = process.env.KAMAILIO_JSONRPC_PORT || "50681";

import axios from 'axios';

/** Run jsonrpc call to Kamailio server
 * @param {*} param0
 * @returns
 */
 export const kamApi = async ({ method, params }) => {
    const payload = {
      jsonrpc: "2.0",
      method,
      params,
      id: 1,
    };
    return await axios.post(
      `http://${KAMAILIO_JSONRPC_HOST}:${KAMAILIO_JSONRPC_PORT}/RPC`,
      payload
    );
  };
