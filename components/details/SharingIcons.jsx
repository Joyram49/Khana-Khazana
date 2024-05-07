import {
  FacebookShare,
  LinkedinShare,
  TelegramShare,
  TwitterShare,
} from "react-share-kit";

export default function SharingIcons({
  recipeId,
  name,
  category,
  description,
}) {
  const shareUrl = `https://assignment-8-khana-khazana-seven.vercel.app/details/${recipeId}`;
  return (
    <ul className='flex gap-x-5 mt-5 bg-slate-200 px-3 py-2 rounded-md'>
      <li className='hover:ring-1 ring-offset-2 rounded-sm'>
        <FacebookShare
          url={shareUrl}
          quote={description}
          size={32}
          title={name}
          round
        />
      </li>
      <li className='hover:ring-1 ring-offset-2 rounded-sm'>
        <TwitterShare
          url={shareUrl}
          quote={description}
          size={32}
          title={name}
          round
        />
      </li>
      <li className='hover:ring-1 ring-offset-2 rounded-sm'>
        <LinkedinShare
          url={shareUrl}
          quote={description}
          size={32}
          title={name}
          round
        />
      </li>
      <li className='hover:ring-1 ring-offset-2 rounded-sm'>
        <TelegramShare
          url={shareUrl}
          quote={description}
          size={32}
          title={name}
          round
        />
      </li>
    </ul>
  );
}
