import { cdnUrl } from "../Utils/Constants";

const RestroCard = (props) => {
  let { restroInfo } = props;
  let { name, cuisines, areaName, costForTwo, avgRating } = restroInfo.info;

  return (
    <div className="flex flex-col bg-gray-100 m-5 w-[200px] p-1 rounded-md hover:bg-gray-300">
      <img
        className="w-fit h-[225px]"
        src={cdnUrl + restroInfo.info.cloudinaryImageId}
      ></img>
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </div>
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(",")}
      </div>
      <div>{areaName}</div>
      <div>{costForTwo}</div>
      <div>{"Avg Rating : " + avgRating}</div>
    </div>
  );
};

export default RestroCard;
