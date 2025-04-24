import React from 'react'

const Checkbox = ({ disabled = false, name, label, defaultValue }:
  { disabled?: boolean, name: string, label: string, defaultValue: boolean }) => {
  return (
    <div className="flex items-center gap-4">
      <input type="checkbox" name={name} id={name} defaultChecked={defaultValue} disabled={disabled} />
      <label htmlFor={name} className="text-xl text-han-purple mb-0 font-normal">{label}</label>
    </div>
  )
}

export { Checkbox }