import { createContext, useState } from 'react'
import './MainView.css'
import ChatArea from './ChatArea/ChatArea'
import Header from './components/Header'
import TypingArea from './components/TypingArea';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css"

export const UserNameContext = createContext<[string, (name: string) => void]>(['', () => { }]);
function App() {
  const [userName, setUserName] = useState('');

  const [chaterCount, setChaterCount] = useState(0)
  const [chatMsgs, setChatMsgs] = useState<ChatMsg[]>([])

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-tr from-yellow-200 to-yellow-100">
      <UserNameContext.Provider value={[userName, setUserName]}>
        <Header chaterCount={chaterCount} />
        <ChatArea chatMsgs={chatMsgs} />
      </UserNameContext.Provider>
      <TypingArea />
      <div className={`w-screen h-[calc(100vh-4rem)] fixed  bottom-0 transition-all duration-300 ${userName === '' ? 'bg-gray-400 opacity-50 cursor-not-allowed' : 'opacity-0 pointer-events-none'}`} onClick={() => { toast.error('请先输入用户名') }}></div>
      <ToastContainer />
    </div>
  )
}

export default App
