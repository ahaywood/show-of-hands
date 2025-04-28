import { Avatar } from "@/app/components/Avatar"
import { ChatMessageWithUser } from "../actions"
import { link } from "@/app/shared/links"
const ChatMessage = ({ chat }: { chat: ChatMessageWithUser }) => {
  return (
    <div className="flex gap-4 items-start px-9 mb-6">
      <div><Avatar src="/images/placeholder.jpg" alt="Amy Dutton" size={42} shape="square" border={true} /></div>
      <div>
        <div className="flex items-end gap-4">
          <h3 className="text-han-purple font-bold font-lg">
            <a href={link('/admin/profile/:id', { id: chat.user?.id })} className="hover:underline">
              {chat.user?.firstName || ''} {chat.user?.lastName || ''}
            </a>
          </h3>
          <p className="text-medium-slate-blue">{chat.createdAt.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })}</p>
        </div>
        {chat.message}
      </div>
    </div>
  )
}

export { ChatMessage }