import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

const Socket = socketIOClient(ENDPOINT);

export {
    Socket
};