import React from 'react'
import { Overlay } from './Overlay'

const Modal = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <Overlay />
      <div className="fixed inset-0 center z-modal">
        <div className="bg-white rounded-2xl p-12">
          <button className="button" onClick={handleClose}>
            CLOSE
          </button>
          <h1 className="page-title">Fall Fest</h1>
        </div>
      </div>
    </>
  )
}

export { Modal }