import "../App.css"
import { MessageItem } from "./utils"

import "../assets/font-awesome-4.7.0/css/font-awesome.min.css"

function Message({ item }: { item: MessageItem }) {
    return (
        <li className="clearfix">
            <div className="message-data">
                
                <span className="message-data-name"><i className="fa fa-circle online"></i>{item.from.name}</span>
                <span className="message-data-time">{item.message.time}</span>
            </div>
            <div className="message my-message">
                {item.message.text}
            </div>
        </li>
    )
}

export default Message