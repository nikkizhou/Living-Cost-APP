import React from 'react'

interface Props{
  cityname: string|undefined,
  updateShowErrDialog:Function
}

function AlertDialog({ cityname, updateShowErrDialog }: Props) {
  
  return (
    <div className='alertContainer'>
      <div className='alert'>Can't find the living cost data of {cityname}</div>
      <button className='alert-button' onClick={() => updateShowErrDialog(false)}>Got it</button>
    </div>
  )
}

export default AlertDialog
