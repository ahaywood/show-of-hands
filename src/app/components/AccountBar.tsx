"use client";

import React, { useRef, useState } from 'react'
import { Avatar } from './Avatar';
import { Icon } from './Icon';
import { DropdownLink, DropdownMenu } from './Dropdown';
import { AnimatePresence, motion } from 'motion/react';
import { useEscapeKey, useOutsideClick } from 'captain-react-hooks';

const AccountBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(() => setIsMenuOpen(false), menuRef);

  useEscapeKey(() => setIsMenuOpen(false));

  return (
    <div className="flex items-center gap-3 p-5 pr-page">
      <div className="w-[60px]">
        <Avatar src="/images/placeholder.jpg" alt="Jack Patel" />
      </div>

      <div className="flex-1 text-han-purple text-lg leading-tight">
        <strong>Jack</strong><br />
        Patel
      </div>

      <div className="relative" ref={menuRef}>
        <button className="cursor-pointer" role="button" onClick={() => setIsMenuOpen(prev => !prev)}>
          <Icon id="three-dots" />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute -right-7 bottom-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <DropdownMenu position="bottom">
                <DropdownLink href="/admin/account"><Icon id="user" /> My Account</DropdownLink>
                <DropdownLink href="/admin/settings">Settings</DropdownLink>
                <DropdownLink href="/logout">Logout</DropdownLink>
              </DropdownMenu>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export { AccountBar }