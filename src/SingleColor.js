import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {

  const [alert, setAlert] = useState(false);
  const bsg = rgb.join(',')
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1500)
    return ()=> clearTimeout(timeout);
  }, [alert])
  

  return (
    <>
      <artcile  className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bsg})`}} onClick={()=> {setAlert(true); navigator.clipboard.writeText(hex)}}>
        <p className='percent-value'>{weight}%</p>
        <p className="color-value">{hex}</p>
        {alert && <p className='alert'>copied to clipboard</p>}
      </artcile>
    </>  
  )
}

export default SingleColor
