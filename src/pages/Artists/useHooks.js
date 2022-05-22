import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as artistsActions } from "../../redux/resources/artists";

const useHooks = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const artists = useSelector((state) => state.artists.items);
  const { fetchArtists, selectOneArtists } = artistsActions;
  const loadMore = () => {
    console.log("MMMMMOOOOOOREEEE");
    dispatch(fetchArtists({ page: page + 1 })).then((res) => console.log(res));
    setPage((page) => page + 1);
  };

  const handleSelectArtist = (artist) => () => {
    dispatch(selectOneArtists(artist));
  };

  useEffect(() => {
    console.log(artists);
  }, [artists]);

  useEffect(() => {
    dispatch(fetchArtists({ page: page + 1 })).then((res) => console.log(res));
    setPage((page) => page + 1);
  }, []);
  return { artists, page, loadMore, handleSelectArtist };
};
export default useHooks;
