import * as React from 'react';
import ChatBubble, { ChatMsg } from './ChatBubble';

export default function ChatArea({ chatMsgs }: { chatMsgs: ChatMsg[] }) {
	return (
		<div className="w-screen flex-1 flex flex-col ">
			{chatMsgs.map((chatMsg, index) => <ChatBubble key={index} chatMsg={chatMsg} />)}
		</div>
	)
}