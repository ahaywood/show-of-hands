"use client"

import { Icon } from '@/app/components/Icon'
import { Constants } from '@/app/shared/Constants'
import { useCopyToClipboard, useEscapeKey, useOutsideClick } from 'captain-react-hooks'
import { AnimatePresence, motion } from 'motion/react'
import React, { useRef, useState } from 'react'
import QRCode from "react-qr-code";

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const { copy } = useCopyToClipboard()

  const menuRef = useRef<HTMLDivElement>(null)
  useOutsideClick(() => setIsOpen(false), menuRef)

  useEscapeKey(() => setIsOpen(false))

  const handleCopy = async () => {
    await copy(`${Constants.BASE_URL}/1`)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative" ref={menuRef}>
      <button className="button secondary" onClick={() => setIsOpen(preValue => !preValue)}>
        <Icon id="share" />
        Share
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-classic-rose border-2 border-han-purple rounded-3xl p-6 absolute top-14 -right-6 w-[600px] flex gap-8">
            <div className="bg-white p-3">
              <QRCode
                size={142}
                style={{ height: "142px", maxWidth: "142px", width: "142px" }}
                value={`${Constants.BASE_URL}/1`}
                viewBox={`0 0 256 256`}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="url" className="text-lg font-bold text-medium-slate-blue mb-2">Public Link</label>
                <button className="text-han-purple" onClick={handleCopy}>
                  {isCopied ? <Icon id="check" /> : <Icon id="clipboard" />}
                </button>
              </div>
              <input type="text" id="url" className="bg-white border-none rounded-lg font-normal text-xl mb-5" value={`${Constants.BASE_URL}/1`} readOnly />
              <ul className="flex gap-4 items-center text-han-purple">
                <li><Icon id="x" /></li>
                <li><Icon id="instagram" /></li>
                <li><Icon id="bluesky" /></li>
                <li><Icon id="threads" /></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { ShareButton }