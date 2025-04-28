import { Avatar } from '@/app/components/Avatar'
import { Layout } from '../layout'
import { Icon } from '@/app/components/Icon'
import { MessageCard } from './components/MessageCard'
import { db } from '@/db'
import { MessageForm } from './components/MessageForm'
import { RequestInfo } from '@redwoodjs/sdk/worker'
import { getChatList, getChatMessages, getUserProfile } from './actions'
import { ProfileHeader } from './components/ProfileHeader'
import { ChatMessage } from './components/ChatMessage'
import { DateDivider } from './components/DateDivider'


const ListPage = async ({params}: RequestInfo ) => {
  const chatList = await getChatList({ userId: "1" });

  // if a parameter exists, get that particular chat thread, otherwise, use the m ost recent
  let chatId;
  if (params.id) {
    chatId = params.id;
  } else {
    chatId = chatList[0].id;
  }

  // get the chat messages
  const chatMessages = await getChatMessages({ chatId });

  // get the profile for the other user in the chat
  const otherUser = chatList[0].users.find((user) => user.userId !== "1");
  const otherUserProfile = otherUser ? await getUserProfile({ userId: otherUser.userId }) : null;

  return (
    <Layout>
      <div className="grid grid-cols-[300px_1fr] h-screen overflow-hidden">
        {/* list of contacts */}
        <div className="border-r-[3px] border-white pt-10 page-bottom min-h-screen overflow-y-auto">
          <h2 className="text-xl font-bold text-han-purple mb-4 px-6">Direct Messages</h2>
          <div className="relative text-han-purple mb-8 px-6">
            <input type="search" placeholder="Search" id="search" name="search" className="bg-white pl-[44px] border-none h-12 rounded-2xl font-normal" />
            <div className="absolute top-3 left-9"><Icon id="search" /></div>
          </div>
          <ul>
            {chatList.map((chat, index) => (
              <MessageCard active={false} key={index} />
            ))}
          </ul>
        </div>

        {/* message detail */}
        <div className="min-h-screen overflow-y-auto pt-14 relative pb-[200px]">
          <div className="pb-12 px-9 profile-header"><ProfileHeader profile={otherUserProfile} /></div>
          {chatMessages && (
            <ul>
              {chatMessages.map((chat, index) => (
                <ChatMessage chat={chat} key={index} />
              ))}
              <li><DateDivider date={new Date()} /></li>
            </ul>
          )}
          <div className="flex gap-4 items-start fixed bottom-0 right-0 w-[calc(100%_-_605px)] bg-sezerac px-9 py-5">
          <Avatar src="/images/placeholder.jpg" alt="Amy Dutton" size={52} shape="square" border={true} />
            <div className="flex-1"><MessageForm /></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export { ListPage }