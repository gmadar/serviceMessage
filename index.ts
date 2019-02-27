import request from "request";

export async function sendSingle(
  uri: string,
  data: { [key: string]: any }
): Promise<any> {
  return sendBatch(uri, [data]);
}

async function sendBatch(
  uri: string,
  data: { [key: string]: any }[]
): Promise<any> {
  return new Promise((resolve, reject) => {
    const reqBody = {
      json: {
        messages: data
      }
    };
    request.post(uri, reqBody, function(error, response) {
      if (error) {
        return reject(error);
      }
      return resolve(response);
    });
  });
}

export function parseRequest(req): { [key: string]: any } {
  return req.body.messages;
}

const defaultObj = { sendSingle, sendBatch, parseRequest };
export default defaultObj;
