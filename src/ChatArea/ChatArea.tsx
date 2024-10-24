import ChatBubble, { ChatMsg } from './ChatBubble';

export default function ChatArea({ chatMsgs }: { chatMsgs: ChatMsg[] }) {
	return (
		<div id='chat-con' className="w-screen p-4 py-20 h-screen fixed top-0 flex flex-col gap-6 overflow-y-auto">
			{chatMsgs.map((chatMsg, index) => <ChatBubble key={index} chatMsg={chatMsg} />)}
		</div>
	)
}