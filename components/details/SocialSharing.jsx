"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import SharingIcons from "./SharingIcons";

export default function SocialSharing({
  recipeId,
  name,
  category,
  description,
}) {
  const { auth } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const handleShare = (e) => {
    if (auth) {
      setIsActive(!isActive);
    } else {
      toast.warning("Please log in to share recipe");
    }
  };

  return (
    <div
      className='flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6] relative'
      onClick={handleShare}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
        <path d='M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
        <path d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
        <path d='M8.7 10.7l6.6 -3.4' />
        <path d='M8.7 13.3l6.6 3.4' />
      </svg>
      <span>Share</span>
      {isActive && (
        <div className='absolute bottom-[-60px] left-[-100px]'>
          <SharingIcons
            recipeId={recipeId}
            name={name}
            category={category}
            description={description}
          />
        </div>
      )}
    </div>
  );
}
