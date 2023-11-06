'use client'
import { useState } from 'react'
export default function Home() {
    const [numState, setNumState] = useState<any>(0)
    const [numState2, setNumState2] = useState<any>(0)
    if (numState > 10 || numState < -10) {
        setNumState(0)
    }
    if (numState2 > 10 || numState2 < -10) {
        setNumState2(0)
    }
    const addNumber = () => {
        setNumState(numState + 1)
    }
    const subtractNumber = () => {
        setNumState(numState - 1)
    }
    const addTwoNumber = () => {
        setNumState2(numState2 + 2)
    }
    const subtractTwoNumber = () => {
        setNumState2(numState2 - 2)
    }
    return (
        <main>
            <div
                id="counter"
                className="h-screen w-screen flex flex-col justify-center items-center text-[80px]">
                <h1 className="text-[40px]">Counter Apps</h1>
                <p className="font-bold">{numState}</p>
                <div className="flex flex-row gap-10">
                    <button onClick={subtractNumber}>-</button>
                    <button onClick={addNumber}>+</button>
                </div>
                <p className="font-bold">{numState2}</p>
                <div className="flex flex-row gap-10">
                    <button onClick={subtractTwoNumber}>--</button>
                    <button onClick={addTwoNumber}>++</button>
                </div>
            </div>
        </main>
    )
}
