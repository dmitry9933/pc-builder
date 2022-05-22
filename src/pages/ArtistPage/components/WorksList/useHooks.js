import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as worksActions } from "../../../../redux/resources/works";

const useHooks = ({ artist }) => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const works = useSelector((state) => state.works.items);
  const work = useSelector((state) => state.works.item);
  const { fetchWorks, fetchOneWorks } = worksActions;
  const loadMore = () => {
    console.log("MMMMMOOOOOOREEEE");
    dispatch(fetchWorks({ page: page + 1 })).then((res) => console.log(res));
    setPage((page) => page + 1);
  };

  const handleSelectWork = (id) => {
    setIsLoading(true);
    dispatch(fetchOneWorks({ id: id })).then((res) => {
      setIsLoading(false);
    });
  };

  // useEffect(() => {
  //   console.log(work);
  // }, [work]);

  useEffect(() => {
    dispatch(fetchWorks({ page: page + 1, id: artist?.url })).then((res) =>
      console.log(res)
    );
    setPage((page) => page + 1);
  }, []);
  return { works, work, page, loadMore, handleSelectWork, isLoading };
};
export default useHooks;
