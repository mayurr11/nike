import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] max-sm:self-center" />
      <div className="mt-8 flex flex-col justify-start gap-2.5 max-sm:mx-7 max-sm:gap-1">
        <div className="flex gap-3">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            {rating}
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-lg leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
