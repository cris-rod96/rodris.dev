import { instance } from "./base.api.js";

export const messageEndpoint = {
  saveMessage: (messageData) => {
    return instance.post("/message/send", messageData);
  },
};
