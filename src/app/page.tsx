'use client';
import Image from "next/image";
import QuestionBox from "./_components/QuestionBox";
import NameBox from "./_components/NameBox";
import Submit from "./_components/Submit";
import { useState } from "react";
import {sampleData} from "../data/sampleData.js";



export default function Home() {
  const [selectedValues, setSelectedValues] = useState <Record<string, string>>({});
  const [points, setPoints] = useState <Record<string, number>>({});
  const totalPoints = Object.values(points).reduce((sum, val) => sum + val, 0);
  const [userName, setUserName] = useState("");
  const nameEntered = userName.trim().length > 0;
  const allQuestionsAnswered = sampleData.every(
  (q) => selectedValues[q.name]
  );
  const formIsComplete = allQuestionsAnswered && nameEntered;
  const handleChange = (name: string, value: string, points: number) => {
    setSelectedValues((prev) => ({
      ...prev,
      [name]: value
    }));
    setPoints((prev) => ({
    ...prev,
    [name]: points,
  }));
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        className="pt-2 w-60 sm:w-80 md:w-80 lg:w-[400px] h-auto"
        priority={true}
        src="/meme.png"
        alt="Profile"
        width={400}
        height={400}
      />
      <br />
      <h1 className="font-extrabold">DO YOU HAVE WHAT IT TAKES?</h1>
      <h2>Check your eligibility now!</h2>
      {sampleData.map((data)=>{
        return(
          <QuestionBox key = {data.name}  {...data} selectedValue={selectedValues[data.name] || ""} onChange={(value, points) => handleChange(data.name, value, points)} />
        )
      })}
      <NameBox userName={userName} setUserName={setUserName}/>
      <Submit isActive={formIsComplete} userName={userName} totalPoints={totalPoints}/>
    </div>
  );
}
