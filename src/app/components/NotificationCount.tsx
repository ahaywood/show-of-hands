import React from 'react'

const NotificationCount = ({ count }: { count: number }) => {
  return (
    <div className="center bg-coral-red text-white font-bold size-6 rounded-full text-sm">
      {count}
    </div>
  )
}

export { NotificationCount }