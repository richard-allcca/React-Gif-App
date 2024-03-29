import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGif = (categoria) => {
  const [images, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const data = await getGifs(categoria);
    setImg(data);
    setIsLoading(false);
    // console.log(data)
  };

  useEffect(() => {
    getData();
  }, [categoria]);

  return {
    images,
    isLoading
  };
};

export default useFetchGif;