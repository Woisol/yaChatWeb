import { createContext, useEffect, useState } from 'react'
import './MainView.css'
import ChatArea from './ChatArea/ChatArea'
import Header from './components/Header'
import TypingArea from './components/TypingArea';
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css"
import { ChatMsg } from './ChatArea/ChatBubble';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from './util/constant';
import { toast } from './util/toast';

export const UserNameContext = createContext<[string, (name: string) => void]>(['', () => { }]);
function App() {
  const [userName, setUserName] = useState('');
  const { chaterCount, chatMsgs, setChatMsgs, connected } = useServer()

  // useEffect(() => {
  //   setInterval(() => {
  //     axios.post(BASE_URL + '/update').catch(err => { console.log(err); toast('error', '服务器连接失败, error:' + err) }).then(res=>set)
  //   }, 500)
  // })

  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-yellow-200 to-yellow-100 relative">
      <UserNameContext.Provider value={[userName, setUserName]}>
        <Header chaterCount={chaterCount} connected={connected} />
        <ChatArea chatMsgs={chatMsgs} />
        <TypingArea setNewChatMsgs={setChatMsgs} />
      </UserNameContext.Provider>
      <div className={`w-screen h-[calc(100vh-4rem)] fixed  bottom-0 transition-all duration-300 ${userName === '' ? 'bg-gray-400 opacity-50 cursor-not-allowed' : 'opacity-0 pointer-events-none'}`} onClick={() => { toast('error', '请先输入用户名') }}></div>
      <ToastContainer />
    </div>
  )
}

export default App

let intervalTimer: NodeJS.Timeout | null = null
function useServer() {
  const [chaterCount, setChaterCount] = useState(0)
  const [chatMsgs, setChatMsgs] = useState<ChatMsg[]>([{ content: '你好！', sender: 'Woisol', time: new Date() }])
  const [connected, setConnected] = useState(true)

  // axios.post(BASE_URL + '/update')
  //   .then(res => setChatMsgs(res.data))
  //   .catch(err => { console.log(err); toast.error('服务器连接失败, error:' + err) })
  // httpPost('/update', '服务器连接失败').then(res =>
  //   res && setChatMsgs((res as AxiosResponse).data))

  // useEffect(() => { httpPost('/update', '服务器连接失败', (res) => setChatMsgs((res as AxiosResponse).data)) }
  //   , [])

  useEffect(() => {
    if (intervalTimer) clearInterval(intervalTimer)
    intervalTimer = setInterval(() => {
      // td 正规的方式是用websocket……这里反正流量不大先暂时用原始方法
      // httpPost('/update', '服务器连接失败', (res) => {
      //   if ((res as AxiosResponse).data.length === chatMsgs.length) return;
      //   setChatMsgs((res as AxiosResponse).data);
      //   const chatContainer = document.getElementById('chat-con');
      //   setTimeout(() => { chatContainer?.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' }) }, 100)
      // }, undefined, () => {
      //   clearInterval(intervalTimer!);
      // })

      axios.post(BASE_URL + '/update')
        .then(res => {
          setChatMsgs(res.data)
          if ((res as AxiosResponse).data.length === chatMsgs.length) return;
          setChatMsgs((res as AxiosResponse).data);
          const chatContainer = document.getElementById('chat-con');
          setTimeout(() => { chatContainer?.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' }) }, 100)
          // ！用这种scroll方式！！！
        })
        .catch(err => { if (!err) return; console.log(err); toast('error', '服务器连接失败, error:' + err); clearInterval(intervalTimer!); setConnected(false) })
      // !开发环境没问题但是一build就无消息报错……
    }, 1000)
  })


  return { chaterCount, setChaterCount, chatMsgs, setChatMsgs, connected }
}
