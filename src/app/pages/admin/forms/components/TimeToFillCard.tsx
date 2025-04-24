import React from 'react'

const TimeToFillCard = () => {
  return (
    <div className="bg-peach-puff card">
      <h3 className="text-xl text-han-purple font-bold mb-5 my-2">Time to Fill</h3>
      <div className="text-6xl text-han-purple font-black font-display flex">
        <div>
          03
          <div className="text-xs uppercase text-medium-slate-blue font-bold text-center">days</div>
        </div>:
        <div>
          12
          <div className="text-xs uppercase text-medium-slate-blue font-bold text-center">hours</div>
        </div>:
        <div>
          45
          <div className="text-xs uppercase text-medium-slate-blue font-bold text-center">minutes</div>
        </div>
      </div>
    </div>
  )
}

export { TimeToFillCard }