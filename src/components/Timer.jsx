import { useEffect } from 'react'

function Timer({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(0)
      return
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId);
  }, [timeLeft])

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{timeLeft}</span>
      </div>
    </div>
  )
}

export default Timer
