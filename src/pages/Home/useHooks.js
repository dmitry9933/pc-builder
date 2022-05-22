import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { partTypes } from "../../constants/config";
import { actions as mainActions } from "../../redux/resources/main";

const useHooks = () => {
  const dispatch = useDispatch();
  const { getMain } = mainActions;
  const parts = useSelector((state) => state.main);
  useEffect(() => {
    partTypes.forEach(({name})=>{
      dispatch(getMain({ partName: name })).then(
        (res) => {
       
        },
        (e) => {
          console.log(e);
        }
      );
    })

  }, []);
  useEffect(() => {
    console.log(parts);
  }, [parts]);
  return { items: parts };
};
export default useHooks;
