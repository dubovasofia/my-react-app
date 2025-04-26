import React, { useState, useEffect } from "react"
const Clock = () => {
    const [time, setTime] = useState(new Date())

useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date())
    }, 1000)
    return() => clearInterval(intervalId)
}, [])

const minutes = time.getMinutes()
const isDivisibleBy5 = minutes % 5 === 0

return (
    <div>
        <p>Текущее время: {time.toLocaleTimeString()} </p>
        <p>Дата: {time.toLocaleDateString()}</p>
        {isDivisibleBy5 && <p>Время делится на 5</p>}
        </div>
)
} 
export default Clock
