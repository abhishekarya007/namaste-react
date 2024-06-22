import { cdnUrl } from "../Utils/Constants";

const RestroCard = (props) => {
  let { restroInfo } = props;
  let { name, cuisines, areaName, costForTwo ,avgRating} = restroInfo.info;

  return (
    <div className="restro-card">
      <img
        className="restro-img"
        src={cdnUrl + restroInfo.info.cloudinaryImageId}
      ></img>
      <div>{name}</div>
      <div className="cusines">{cuisines.join(",")}</div>
      <div>{areaName}</div>
      <div>{costForTwo}</div>
      <div>{"Avg Rating : " + avgRating}</div>
    </div>
  );
};

export default RestroCard;
