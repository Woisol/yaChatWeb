import * as React from 'react';
import { UserNameContext } from '../App';
import { TextField } from '@mui/material';
export default function Header({ chaterCount }: { chaterCount?: number }) {
	const [userName, setUserName] = React.useContext(UserNameContext);
	return (
		<div className="w-screen h-16 py-4 relative text-xl text-center filter rounded-b-2xl bg-white backdrop-blur-sm bg-opacity-75">
			<span className="">
				作为
				<TextField label='UserName' sx={{ marginX: '5px' }} size='small' className=' transition-all duration-300 hover:shadow-lg active:shadow-lg' placeholder='在此写下你的名字' type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
				聊天
			</span>
		</div>
	)
}