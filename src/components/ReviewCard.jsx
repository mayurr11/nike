import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full h-[120px] w-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
          />
        <p className="my-2 text-xl text-slate-gray font-montserrat">{rating}</p>
      </div>
          <h3 className="mt-1 text-2xl font-palanquin text-center font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
