import { Avatar } from '@/app/components/Avatar'

const Aside = () => {
  return (
    <div className="border-3 border-han-purple px-10 py-8 min-h-[calc(100vh_-_48px)] flex flex-col justify-between">
      <div>
        <h1 className="page-title">Fall Fest at Heritage Elementary</h1>
        <div className="flex items-center gap-x-4 mb-10">
          <Avatar size={48} alt="Heritage Elementary" src="https://picsum.photos/seed/1744053428295/62/62" />
          <div>
            <div className="text-xs font-bold text-han-purple">Main Contact</div>
            <div className="text-lg text-han-purple">
              <a href="mailto:john.doe@gmail.com">John Doe</a>
            </div>
          </div>
        </div>
        <p className="text-xl font-bold text-han-purple mb-6"><strong>6:00pm</strong> on <strong>December 10, 2024</strong></p>
        <p className="text-lg text-han-purple mb-8">
          West Franklin Church
          <br />
          Franklin, TN 37067
        </p>
      </div>
      <div>
        <button className="button primary large mb-5">
          Submit + Sign Up
        </button>
        <p className="text-lg text-center text-han-purple">Already signed up? <a href="/login" className="underline font-bold hover:no-underline">Change your sign up</a></p>
      </div>
    </div>
  )
}

export { Aside }