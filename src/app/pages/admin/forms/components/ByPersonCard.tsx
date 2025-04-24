import { Avatar } from '@/app/components/Avatar'
import { Icon } from '@/app/components/Icon'

const ByPersonCard = ({ person, submissionDate, slot }: {
  person: {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string,
}, submissionDate: string, slot: string }) => {
  return (
    <div className="bg-white rounded-lg py-4 pl-5 pr-8 flex items-center gap-6 mb-3">
      <Avatar src={person.avatar} alt={`${person.firstName} ${person.lastName}`} size={62} />
      <div className="flex-1">
        <h3 className="text-han-purple text-3xl font-normal mb-0 pb-0 leading-none">{person.firstName} {person.lastName}</h3>
        <p className="text-han-purple text-base mb-0 pb-0 leading-none">{person.email}</p>
      </div>
      <div className="text-han-purple text-base px-10">{submissionDate}</div>
      <div className="text-han-purple text-base px-10">{slot}</div>
      <div className="pl-10">
        <button>
          <Icon id="three-dots" />
        </button>
      </div>
    </div>
  )
}

export {ByPersonCard}