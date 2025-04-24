"use client"

import { useState } from "react"
import { Icon } from "./Icon"
import { AnimatePresence, motion } from "motion/react"

const Accordion = ({ defaultOpened = false, label, children }:
  { defaultOpened?: boolean, label: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  return (
    <div className="mb-5">
      <button
        className="flex items-center justify-start w-full gap-2 text-han-purple"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <motion.div
          initial={{ rotate: -90 }}
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: 0.3 }}
        >
          <Icon id="chevron-down" />
        </motion.div>
        <div className="text-xl font-bold">{label}</div>
      </button>
      <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-2">{children}</div>
          </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}

export { Accordion }