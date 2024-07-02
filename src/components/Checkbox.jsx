import React from 'react'

function Checkbox() {
  return (
    <div className="form-control">
    <label className="cursor-pointer label">
      <span className="label-text pr-4">Completed: </span>
      <input
        type="checkbox"
        defaultChecked
        className="checkbox checkbox-info"
      />
    </label>
  </div>
  )
}

export default Checkbox
