import { FacebookShare, TwitterShare } from "react-share-kit";

export default function SharingIcons({
  recipeId,
  name,
  category,
  description,
}) {
  const shareUrl = `http://localhost:3000/details/${recipeId}`;
  return (
    <ul className='flex gap-x-5'>
      <li>
        {/* Facebook Share Button */}
        <FacebookShare
          url={shareUrl}
          quote={description}
          size={32}
          title={name}
          round
        />
      </li>
      <li>
        {/* Facebook Share Button */}
        <TwitterShare
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
