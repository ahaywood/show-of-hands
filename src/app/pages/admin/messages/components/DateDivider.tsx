const DateDivider = ({ date }: { date: Date }) => {
  return (
    <div className="flex items-center justify-center">
      <hr className="mb-0" />
      <div className="text-sm bg-white rounded-full px-5 py-2 whitespace-nowrap text-han-purple font-bold ">
        {date.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}
      </div>
      <hr className="mb-0" />
    </div>
  )
}

export {DateDivider}