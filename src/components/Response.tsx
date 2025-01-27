import "../App.css"
import { MessageItem } from "./utils"

function Response({ item }: { item: MessageItem }) {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{item.message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{item.from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {item.message.text}
            </div>
        </li>
    )
}

export default Response