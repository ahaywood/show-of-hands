import { Avatar } from "@/app/components/Avatar"
import { link } from "@/app/shared/links"

const MessageCard = ({ active }: { active: boolean }) => {
  return (
    <li>
      <a href={link(`/admin/messages/:id`, { id: '1' })} className={`cursor-pointer flex items-center gap-4 py-2 px-6 w-full group/card ${active ? 'bg-peach-puff' : ''}`}>
        <div className="w-[42px]">
          <Avatar src="/images/placeholder.jpg" alt={''} size={42} shape="square" border={true} />
        </div>
        <div className="text-lg text-han-purple whitespace-nowrap truncate flex-1 group-hover/card:underline underline-offset-4 text-left">Amy Haywood Dutton</div>
      </a>
    </li>
  )
}

export {MessageCard}