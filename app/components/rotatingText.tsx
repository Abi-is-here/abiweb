
'use client'
import { ReactTyped } from "react-typed";

export function RotatingText({ options, typeSpeed, backDelay, backSpeed }) {
    console.log(options)
  return (
      <div>
        <ReactTyped
          strings={options}
          typeSpeed={typeSpeed}
          backSpeed={backSpeed}
          backDelay={backDelay}
          startWhenVisible
          shuffle
          loop
        />
      </div>
  )
}
