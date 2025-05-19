'use client';
import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

function ResultContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || "Anonymous";
  const pointsStr = searchParams.get('points');
  const points = pointsStr ? parseInt(pointsStr, 10) : 0;
  let eligibility = "";
  let subText = "";

  if(points >10){
    eligibility = "Eligible";
    subText = "You are definitely gonna make it bro. Just apply and you will get the job. You are a legend in the making.";
  }else if(points <= 10 && points > 7){
    eligibility = "Uhmmm... a lil dicey";
    subText = "Why not go for easier exams like upsc?";
  }else{
    eligibility = "Not Eligible";
    subText = "ngmi bro. just give up atp. kys even 🙏";
  }

  return (
    <div className="flex flex-col items-center justify-start h-auto">
      <h1 className="text-3xl font-bold mb-4">Hi {name}!</h1>
      <p className="text-xl">You scored <strong>{points}/16</strong> points.</p>
      <p className="text-xl">Your eligibility is: <strong>{eligibility}</strong></p>
      <p className="text-center">{subText}</p>
      <Image
        className="pt-2 w-60 sm:w-80 md:w-80 lg:w-[400px] h-auto"
        priority={true}
        src="/meme2.jpg"
        alt="Profile"
        width={400}
        height={400}
      />
      <br />
      <p className='text-center'>Becoming a Vishal Mega Mart security guard is no ordinary feat—it's a test of grit, willpower, and unbreakable resolve. While millions dream of donning that uniform and standing tall at the gates of glory, only a chosen few survive the ruthless trials. Forget UPSC and JEE—those are mere stepping stones compared to the Everest that is this job. Sleepless nights, laser focus, and the strength to stare down chaos itself—this is the path walked by legends. In a country full of dreams, this is the hardest one to reach.</p>
      <a className="underline pt-3" href="https://asset.cloudinary.com/dcwbfkl1a/580c96835f9bce7de83f600f27f96392">Fill out the Application now</a>
      <p>Not Sure if you can make it?</p>
      <a className="underline" href="https://www.pw.live/offline-centres/batches/vidyapeeth">Join a course!</a>
      <br />
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
