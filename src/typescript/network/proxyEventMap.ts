//import { MessageDto } from "../model/chat";

export interface ProxyEventMap
{
    "login": () => void;
    //"message": ( channelId: string, message: MessageDto ) => void;
    "conversation": ( channelId: string ) => void;
}