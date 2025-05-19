'use client';
import { useRouter } from 'next/navigation';

export default function Submit({
  isActive,
  userName,
  totalPoints
}: {
  isActive: boolean;
  userName: string;
  totalPoints: number;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (!isActive) return;
    router.push(`/result?name=${encodeURIComponent(userName)}&points=${totalPoints}`);
  };

  return (
    <button
      disabled={!isActive}
      onClick={handleClick}
      className={`mt-4 px-6 py-2 rounded-md font-bold text-black ${
        isActive ? 'bg-amber-100 hover:bg-amber-200' : 'bg-gray-500 cursor-not-allowed'
      }`}
    >
      Submit
    </button>
  );
}
