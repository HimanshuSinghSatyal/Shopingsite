import { Link } from "react-router-dom";
import Avatar from "../Components/Avatar"

function ShowCard({show}) {
console.log("show in card",show)
  const placeholderImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img 
        src={show?.image?.medium ||  placeholderImage}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show?.name}</h2>
          <p>
            {show?.summary}
          </p>
        </div>
        <Link
          to={"/show/"+ show?.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
        <Avatar cast={show?.cast} />
      </div>
    </div>
  );
}

export default ShowCard;
