import { IMG_CDN_URL } from "../utils/constants";

const CastCard = ({ ImgPath,Name,Character}) => {
   
  if (!ImgPath) return null;
  return (
    <div className="w-36 md:w-32 pr-4 hover:w-36 cursor-pointer">
      <img  className="rounded-full"alt="Movie Card" src={IMG_CDN_URL + ImgPath} />
      <h1 className="text-md text-white font-bold">{Name}</h1>
        <h1 className="text-sm text-white">{Character}</h1>
    </div>
    
  );
};
export default CastCard;