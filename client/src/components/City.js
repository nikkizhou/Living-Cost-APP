import React from 'react'

export default function City({title, pricesDisplay, picUrl}) {
  return(  
    <div className ='cityDisplay-city'>
      <h2>{title}</h2>
      {pricesDisplay && pricesDisplay.map(item =>{
        return <>
          <p>{item.item_name}:</p>
          <p className='price'>{item.usd.avg}$</p>
        </>
      })}
      <img src={picUrl} alt={title}></img>
    </div>
  )
}