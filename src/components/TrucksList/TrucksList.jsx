import {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import TruckBasicInfo from "../TruckBasicInfo/TruckBasicInfo.jsx";
import Button from "../Button/Button.jsx";
import Loader from "../Loader/Loader.jsx";

import { getAllCampers } from "../../redux/trucks/trucksOperations.js";
import {
  selectIsRefreshing,
  selectItems,
  selectPagination,
  selectTotal,
} from "../../redux/trucks/trucksSelectors.js";
import { setPage } from "../../redux/trucks/action.js";

import css from "./TrucksList.module.css";
export default function TrucksList() {
  const dispatch = useDispatch();

  const loader = useSelector(
    selectIsRefreshing,
  );
  const totalItems = useSelector(
    selectTotal,
  );
  const pagination = useSelector(
    selectPagination,
  );
  const { page, limit } = pagination;

  const items = useSelector(
    selectItems,
  );

  const totalPages = Math.ceil(
    totalItems / limit,
  );

  const handleClickLoad = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch, page]);

  //favoritesTrucks
  const loadFromLocalStorage = () => {
    const favoritesTrucks =
      localStorage.getItem(
        "favoritesTrucks",
      );
    return favoritesTrucks
      ? JSON.parse(favoritesTrucks)
      : [];
  };

  const [favorites, setFavorites] =
    useState(loadFromLocalStorage);

  useEffect(() => {
    localStorage.setItem(
      "favoritesTrucks",
      JSON.stringify(favorites),
    );
  }, [favorites]);

  const handleButtonClick = (id) => {
    console.log("object");
    if (favorites.includes(id)) {
      const newItems = favorites.filter(
        (i) => i !== id,
      );
      setFavorites(newItems);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <div>
      <ul className={css.list}>
        {items.map((truck) => (
          <li
            key={truck.id}
            className={css.item}
          >
            <TruckBasicInfo
              data={truck}
              onClick={
                handleButtonClick
              }
              favorites={favorites}
            />
          </li>
        ))}
      </ul>
      {/* {totalPages > 1 && ( */}
      <Button
        variant="loadMore"
        loadMore={handleClickLoad}
        disabled={page === totalPages}
      >
        Load more
      </Button>
      {/* )} */}
    </div>
  );
}
