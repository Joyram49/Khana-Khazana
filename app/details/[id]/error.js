"use client";

export default function error({ error }) {
  return (
    <div className='flex justify-center items-center'>
      {error.name} || {error.message}
    </div>
  );
}
