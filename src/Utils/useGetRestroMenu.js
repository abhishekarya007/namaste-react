import { restroMenuApiUrl } from "../Utils/Constants";
import { useState, useEffect } from "react";

const useGetRestroMenu = (resId) => {
  const [restroMenu, setRestroMenu] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(restroMenuApiUrl + resId);
    const json = await data.json();
    setRestroMenu(json)
  };
  return restroMenu
};

export default useGetRestroMenu;
