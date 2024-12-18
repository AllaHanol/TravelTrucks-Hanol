import { useNavigate } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import clsx from "clsx";

import { selectFilters } from "../../redux/trucks/trucksSelectors.js";
import {
  addQueryFilters,
  resetItems,
} from "../../redux/trucks/action.js";

import createQueryParams from "../../utils/createQueryParams.js";

import css from "./Button.module.css";
import {
  getCamperById,
  getAllCampers,
} from "../../redux/trucks/trucksOperations.js";

export default function Button({
  variant,
  id,
  children,
  loadMore,
  disabled = false,
  type = "button",
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const filters = useSelector(
    selectFilters,
  );

  const handleButtonClick = () => {
    if (variant === "viewNow")
      navigate("/catalog");
    if (variant === "showMore") {
      navigate(`/catalog/${id}`);
      dispatch(getCamperById(id));
    }
    if (variant === "loadMore")
      loadMore();
    if (variant === "search") {
      const queryFilters =
        createQueryParams(filters);
      dispatch(
        addQueryFilters(queryFilters),
      );
      dispatch(resetItems());
      dispatch(getAllCampers());
    }
  };
  return (
    <button
      className={clsx(css.button, {
        [css.view]:
          variant === "viewNow",
        [css.show]:
          variant === "showMore",
        [css.load]:
          variant === "loadMore",
        [css.search]:
          variant === "search",
        [css.submit]:
          variant === "submit",
      })}
      onClick={handleButtonClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
