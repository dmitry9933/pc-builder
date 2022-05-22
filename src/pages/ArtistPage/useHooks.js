import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as artistsActions } from "../../redux/resources/artists";

const useHooks = () => {
  const artist = useSelector((state) => state.artists.item);
  const dispatch = useDispatch();
  const { fetchOneArtists } = artistsActions;
  useEffect(() => {
    if (artist?.url) {
      dispatch(fetchOneArtists({ id: artist?.url })).then((res) =>
        console.log(res)
      );
    } else window.location.href = "/artists";
  }, []);
  return { artist };
};
export default useHooks;
