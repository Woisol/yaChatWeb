import * as React from 'react';
import { UserNameContext } from '../App';
export type ChatMsg = {
	content: string;
	sender: string;
	time: Date;
}

export default function ChatBubble({ chatMsg }: { chatMsg: ChatMsg }) {
	const [userName] = React.useContext(UserNameContext)
	return (
		<div className={`max-w-[50%] p-4 rounded-2xl shadow-lg ${userName === chatMsg.sender ? 'bg-blue-500 text-white' : 'bg-white border-2 border-gray-500}'}`}></div>
	)
}