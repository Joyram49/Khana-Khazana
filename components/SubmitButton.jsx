"use client";

import BtnLoader from "./ui/BtnLoader";
export const SubmitButton = ({ loading }) => {
  return loading ? (
    <BtnLoader text='Submitting' />
  ) : (
    <button
      disabled={loading}
      className='text-white bg-[#eb4a36] hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-4'
      type='submit'
    >
      Create User
    </button>
  );
};
