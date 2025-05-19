'use client';
import { QuestionProps } from "../types/question"
import { useState, useEffect } from "react";

export default function QuestionBox({question, options, name, selectedValue, reactionText, onChange}: QuestionProps) {
    const [reaction, setReaction] = useState("Select an option");

  useEffect(() => {
    setReaction(reactionText[selectedValue] || "Select an option");
  }, [selectedValue, reactionText]);
  return (
    <>
    <div className="flex flex-col pl-2 items-start justify-center w-[95%] border-amber-100 border-1 rounded-lg mt-4">
    <p className="pb-1 pt-0.5">{question}</p>
    <form action="">
        {options.map((option) => (
            <div key={option.value} className="flex items-center">
                <input
                    type="radio"
                    id={option.value}
                    name={name}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={() => onChange(option.value, option.points)}
                />
                <label className="pl-[2px]" htmlFor={option.value}>{option.label}</label>
            </div>
        ))}
    </form>
    </div>
    <div className="flex justify-center items-center w-[95%] max-w-sm">
        <p className={`text-center font-extralight text-xs break-words ${reaction === "Select an option" ? "hidden" : ""}`}>{reaction}</p>
    </div>
    
    </>
  )
}
