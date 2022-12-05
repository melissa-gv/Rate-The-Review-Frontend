import React, { useEffect } from 'react'

function Timer({ seconds, setSeconds, isRunning }) {
  useEffect(() => {
    if (seconds === 0) {
      setSeconds(0)
      return
    }

    if (isRunning) {
      const intervalId = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)

      return () => clearInterval(intervalId)
    }
  }, [isRunning, seconds])

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '80px' }}>
        <span>{seconds}</span>
      </div>
    </div>
  )
}
export default Timer

// useEffect(() => {
//   if (seconds === 0) {
//     setSeconds(0)
//     return
//   }

//   const intervalId = setInterval(() => {
//     setSeconds(seconds - 1)
//   }, 1000)

//   return () => clearInterval(intervalId)
// }, [seconds])

// const startTimer = () => {
//   setInterval(() => {
//     setSeconds(seconds - 1)
//   }, 1000)
// }

// const currentCount = seconds





// const startTimer = () => {
//   setInterval(() => {
//     setSeconds(seconds - 1)
//   }, 1000)
// }

// const stopTimer = () => {
//   clearInterval(setSeconds(15))
// }

// const currentCount = seconds


// -----
// const startTimer = () => {
//   setInterval(() => {
//     setSeconds(seconds - 1)
//   }, 1000)
// }

// const currentCount = seconds
// const stopTimer = () => {
//   clearInterval(currentCount)
// }

// if (paused) {
//   stopTimer()
// } else {
//   startTimer()
//   // setPaused(false)
// }


// }