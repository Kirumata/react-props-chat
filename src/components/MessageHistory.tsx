import "../App.css"
import { MessageItem } from "./utils"
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

function MessageHistory({ list = [] as MessageItem[] }) {

    let messages = [];

    for (let i = 0; i < list.length; i++) {

        switch (list[i].message.type) {
            case "message": {
                messages.push(<Message item={list[i]} key={list[i].message.id}></Message>);
                break;
            }
            case "response": {
                messages.push(<Response item={list[i]} key={list[i].message.id}></Response>);
                break;
            }
            case "typing": {
                messages.push(<Typing item={list[i]} key={list[i].message.id}></Typing>);
                break;
            }
        }
    }

    return (
        <ul>
            {messages}
        </ul>
    )
}

export default MessageHistory