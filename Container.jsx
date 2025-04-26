import React, { useState, useEffect } from "react"
import Greeting from "./Greeting"
import Clock from "./Clock"
import Header from "./Header"

const Container = () => {
    const [name, setName] = useState("")

    const generateRandomName = (useCallback) => {
        const names = ["Андрей", "Юлия", "София", "Дамир", "Илья", "Данил", "Артур", "Жасмина"]
        return names[Math.floor(Math.random() * names.length)];
    }

useEffect(() => {
    setName(generateRandomName())
    const intervalId = setInterval (() => {
        setName(generateRandomName())
    }, 10000)
        return () => clearInterval(intervalId)
    }, [generateRandomName])

    return (
        <div>
            <Header />
            <Greeting name={name} />
            <Clock />
        </div>
    )
}
    export default Container
    