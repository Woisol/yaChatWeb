import * as React from 'react';
import { UserNameContext } from '../App';
export type ChatMsg = {
	content: string;
	sender: string;
	time: Date;
}

export default function ChatBubble({ chatMsg }: { chatMsg: ChatMsg }) {
	const [userName] = React.useContext(UserNameContext)
	if (!chatMsg) return null
	const isSelf = chatMsg.sender === userName;
	return (
		<div className={`w-fit max-w-[50%] px-4 py-2 rounded-2xl shadow-lg relative group ${isSelf ? 'bg-blue-500 text-white self-end' : 'bg-white border-2 border-gray-500}'}`}>
			{/* // ! flex内部独立一个self-end！ */}
			{chatMsg.content}
			{chatMsg.sender !== userName &&
				<span className="absolute left-0 -top-3 text-xs text-gray-400">{chatMsg.sender}</span>
			}
			<span className={`absolute -bottom-3 text-xs text-transparent transition-all duration-300 group-hover:text-gray-400 ${isSelf ? 'right-0' : 'left-0'}`}>{new Date(chatMsg.time).toLocaleTimeString()}</span>
		</div>
	)
}