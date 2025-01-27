import "../App.css"
import { MessageItem } from "./utils"

function Typing({ item }: { item: MessageItem }) {
    return (
        <li className="clearfix">
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{item.from.name}</span>
                <span className="message-data-time">{item.message.time}</span>
            </div>
            <div className="message my-message">
                <i className="fa fa-circle"></i>
                <i className="fa fa-circle"></i>
                <i className="fa fa-circle"></i>
            </div>
        </li>
    )
}

export default Typing