import { useState, useEffect } from "react";
import { callFechApi } from "../helpers/HelperGIFAPI";
export const useFetchGift = (categoria) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    callFechApi(categoria).then((imgs) => {
        setstate({
          data: imgs,
          loading: false,
        });
    });
  }, [categoria]);
  return state;
};
