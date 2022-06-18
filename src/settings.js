import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "4ca6374662d04292a41414418511fa6a";
const token =
  "0064ca6374662d04292a41414418511fa6aIACDE4ZDHin//4+1chJ2Z0vMzI0nSxUaix9CZKTB90KPTe2j/GqVkVrGIgBZh3jXbkuvYgQAAQD+B65iAgD+B65iAwD+B65iBAD+B65i"
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "advicecast193838";