import { Send } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { ChatMsg } from '../ChatArea/ChatBubble';
import { UserNameContext } from '../App';
import { httpPost } from '../util/http';

export default function TypingArea({ setNewChatMsgs }: { setNewChatMsgs: (msgs: ChatMsg[]) => void }) {
	const [userName] = React.useContext(UserNameContext);
	const [message, setMessage] = React.useState('');
	function handleSend() {
		httpPost('/send', '无法发送信息', (res) => { setNewChatMsgs((res as AxiosResponse).data) }, { content: message, sender: userName, time: new Date() } as ChatMsg)
		setMessage('');
		const chatContainer = document.getElementById('chat-con');
		setTimeout(() => { chatContainer?.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' }) }, 100)
		// axios.post(BASE_URL + '/send', { content: message, sender: userName, time: new Date() } as ChatMsg).then(newChatMsg => setNewChatMsgs(newChatMsg.data))
	}
	return (
		<div className="w-screen h-16 px-10 py-4 fixed bottom-0 text-xl text-center flex items-center rounded-t-2xl bg-white filter backdrop-blur-sm bg-opacity-75">
			<TextField type="text" label='来聊天吧！' size='small' value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') handleSend() }} style={{ flex: 1, backgroundColor: 'transparent', outline: 'none' }} />
			<Button sx={{ width: '2.5rem', height: '2.5rem' }} onClick={handleSend}  ><Send /></Button>
		</div>
	)
}