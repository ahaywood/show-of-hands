import { Avatar } from "@/app/components/Avatar"
import { User } from "@prisma/client"
import { link } from "@/app/shared/links"
import { SocialMedia } from "@/app/components/SocialMedia"

const ProfileHeader = ({ profile }: { profile: User }) => {
  return (
    <div className="flex items-start gap-8">
      <div><Avatar src={profile.avatar || ''} alt={`${profile.firstName} ${profile.lastName}`} size={108} shape="square" border={true} /></div>
      <div className="flex-1">
        <div className="flex items-start gap-4 mb-4">
          <h1 className="page-title flex-1 !mb-0">{profile.firstName} {profile.lastName}</h1>
          <a href={link(`/admin/profile/:id`)} className="button outline">View Profile</a>
        </div>
        <div className="social-and-bio">
          <SocialMedia />
          <p>{profile.bio}</p>
        </div>
      </div>
    </div>
  )
}

export { ProfileHeader }