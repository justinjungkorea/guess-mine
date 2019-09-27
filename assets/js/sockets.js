import { handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => window.SocketIO;

export const updateSocket = aSocket => (socket = aSocket);

export const initSockets = (aSocket) => {
    const { events } = window;
    updateSocket(aSocket);
    aSocket .on(window.events.newUser, handleNewUser);
};