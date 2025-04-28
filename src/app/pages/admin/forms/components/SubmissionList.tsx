"use client"

import { Tab } from '@/app/components/ButtonTabs'
import { ButtonTabs } from '@/app/components/ButtonTabs'
import { Icon } from '@/app/components/Icon'
import { ToggleButton } from '@/app/components/ToggleButton'
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { ByPersonCard } from './ByPersonCard'
import { Accordion } from '@/app/components/Accordion'
import { FormCard } from './ByFormCard'


const SubmissionList = () => {
  const [currentTab, setCurrentTab] = useState<"calendar" | "user" | "form">("calendar")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <div>
          <ToggleButton defaultChecked={false} label="Sort By" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="text-han-purple" onClick={() => setIsSearchOpen(prev => !prev)}>
              <Icon id="search" />
            </button>
            <AnimatePresence>
            {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <input type="text" placeholder="Search" className="border-b-2 border-x-0 border-t-0 border-han-purple border-dotted h-auto px-0 focus:outline-none hover:outline-none" />
                  <button className="text-han-purple" onClick={() => setIsSearchOpen(false)}>
                    <Icon id="close" />
                  </button>
                </motion.div>
            )}
            </AnimatePresence>
          </div>
          <ButtonTabs>
            <Tab isActive={currentTab === "calendar"} handleClick={() => setCurrentTab("calendar")}><Icon id="calendar" /></Tab>
            <Tab isActive={currentTab === "user"} handleClick={() => setCurrentTab("user")}><Icon id="user" /></Tab>
            <Tab isActive={currentTab === "form"} handleClick={() => setCurrentTab("form")}><Icon id="form" /></Tab>
          </ButtonTabs>
        </div>
      </header>


      {currentTab === 'calendar' && (
        <div>
          <Accordion defaultOpened={true} label="February 10, 2025">
            <ByPersonCard person={{
                id: "1",
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                avatar: "https://picsum.photos/seed/1744053428295/62/62"
              }}
              submissionDate="2024-01-01"
              slot="Singer"
            />
          </Accordion>
          <Accordion label="February 9, 2025">
            <ByPersonCard person={{
                id: "1",
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                avatar: "https://picsum.photos/seed/1744053428295/62/62"
              }}
              submissionDate="2024-01-01"
              slot="Singer"
            />
          </Accordion>
        </div>
      )}
      {currentTab === 'user' && (
        <div>
          <ByPersonCard person={{
              id: "1",
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@example.com",
              avatar: "https://picsum.photos/seed/1744053428295/62/62"
            }}
            submissionDate="2024-01-01"
            slot="Singer"
          />

          <ByPersonCard person={{
              id: "1",
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@example.com",
              avatar: "https://picsum.photos/seed/1744053428295/62/62"
            }}
            submissionDate="2024-01-01"
            slot="Singer"
          />
        </div>
      )}
      {currentTab === 'form' && (
        <div>
          <FormCard />
        </div>
      )}
    </>
  )
}

export { SubmissionList }