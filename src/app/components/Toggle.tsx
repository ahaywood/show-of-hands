import React from 'react'

const Toggle = ({ defaultChecked, name, label, onChange = () => {} }:
  { defaultChecked: boolean, name: string, label: string, onChange?: (checked: boolean) => void }) => {
  return (
    <div className="toggle">
      <input
        type="checkbox"
        id={name}
        defaultChecked={defaultChecked}
        className="hidden"
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={name}>
        <div className="bg-white rounded-full size-4 absolute top-[2px] left-[2px] transition-all duration-200" />
      </label>
      <div>{label}</div>
    </div>
  )
}

export { Toggle }