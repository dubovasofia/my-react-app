import React, { useState, useEffect } from "react"
const Greeting = ({ name }) => {
const [prevName, setPrevName] = useState(null)

useEffect(() => {
    setPrevName(name)
}, [name])

if (prevName === null) {
    return <p>Привет, <strong>{name}</strong>!</p>
} else if (prevName !== name) {
    return <p>Привет, у тебя поменялось имя, теперь ты <strong>{name}</strong>!</p>
} else {
    return <p>Привет, <strong>{name}</strong>!</p>
}
}
export default Greeting
