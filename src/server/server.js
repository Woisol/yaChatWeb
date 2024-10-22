import express from 'express';
import cors from 'cors';
const server = express();
server.use(cors());
let chatDatas = [{ content: '欢迎来到yaChat聊天室！', sender: 'Server', time: new Date() }]
server.post('/update', (req, res) => {
	res.status(200).send(chatDatas);
})
server.post('/send', (req, res) => {
	if (req.query.data) {

		// !艹vsc调试又发癫……
		// req.query.data.time = new Date(req.query.data.time);
		chatDatas.push(req.query.data);
	}
	res.status(200).send(chatDatas);
})
server.listen(6999);
console.log('Server is running on port 6999');