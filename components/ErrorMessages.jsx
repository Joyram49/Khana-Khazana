export const ErrorMessages = ({ errors }) => {
  if (errors?.length === 0) return null;

  const text = errors?.join(", ");

  return <div className='text-red-600 peer'>{text}</div>;
};
