import { useState } from "react"

export default function NameBox({userName, setUserName} : {userName: string, setUserName: (name: string) => void}) {
  return (
    <div className="flex flex-col items-start w-[95%] max-w-sm mt-6">
        <label htmlFor="nameInput" className="mb-1 font-semibold">Enter your name:</label>
        <input
          id="nameInput"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your full name"
          className="border border-amber-100 rounded-lg px-3 py-2 w-full"
        />
      </div>
  )
}
