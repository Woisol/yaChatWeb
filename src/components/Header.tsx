import * as React from 'react';
import { UserNameContext } from '../App';
import { TextField } from '@mui/material';
export default function Header({ chaterCount, connected }: { chaterCount?: number, connected?: boolean }) {
	const [userName, setUserName] = React.useContext(UserNameContext);
	return (
		<div className="w-screen h-16 py-4 relative text-xl text-center filter rounded-b-2xl bg-white backdrop-blur-sm bg-opacity-75 z-10">
			<span className="">
				作为
				<TextField label='UserName' sx={{ marginX: '5px', cursor: connected ? 'pointer' : 'not-allowed' }} size='small' disabled={!connected} className={` transition-all duration-300 hover:shadow-lg active:shadow-lg ${!connected && 'bg-gray-200'}`} placeholder='在此写下你的名字' type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
				聊天
			</span>
		</div>
	)
}