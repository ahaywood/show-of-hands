import React from 'react'

const SlotCard = () => {
  return (
    <div className="bg-lumber card stat-card">
      <h3 className="primary">Total Slots</h3>
      <div className="big-number primary">10</div>
      <h3 className="secondary">Remaining Slots</h3>
      <div className="big-number secondary">10</div>
    </div>
  )
}

export { SlotCard }