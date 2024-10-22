import { Send } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import * as React from 'react';

export default function TypingArea() {
	const [message, setMessage] = React.useState('');
	return (
		<div className="w-screen h-16 px-10 py-4 relative text-xl text-center flex items-center rounded-t-2xl bg-white filter backdrop-blur-sm bg-opacity-75">
			<TextField type="text" label='来聊天吧！' size='small' value={message} onChange={(e) => setMessage(e.target.value)} style={{ flex: 1, backgroundColor: 'transparent', outline: 'none' }} />
			<Button sx={{ width: '2.5rem', height: '2.5rem' }} onClick={() => { }} ><Send /></Button>
		</div>
	)
}