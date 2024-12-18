import {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useParams } from "react-router-dom";

import FeedbackForm from "../../components/FeedbackForm/FeedbackForm.jsx";
import DetailInfo from "../../components/DetailInfo/DetailInfo.jsx";
import MainTruckInfo from "../../components/MainTruckInfo/MainTruckInfo.jsx";

import {
  selectIsRefreshing,
  selectTruckInfo,
} from "../../redux/trucks/trucksSelectors.js";
import { getCamperById } from "../../redux/trucks/trucksOperations.js";

import css from "./CamperPage.module.css";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Loader from "../../components/Loader/Loader.jsx";

function CamperInfoPage() {
  const dispatch = useDispatch();
  const truckInfo = useSelector(
    selectTruckInfo,
  );
  const loader = useSelector(
    selectIsRefreshing,
  );

  const { id } = useParams();

  const [features, setFeatures] =
    useState(true);
  const [reviews, setReviews] =
    useState(false);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  const handleClick = (name) => {
    if (name === "features") {
      setFeatures(true);
      setReviews(false);
    } else {
      setFeatures(false);
      setReviews(true);
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        Object.keys(truckInfo)
          .length !== 0 && (
          <div
            className={css.container}
          >
            <MainTruckInfo
              truckInfo={truckInfo}
            />
            <div
              className={css.navigation}
            >
              <button
                className={`${
                  css.btn
                } ${
                  features &&
                  css.isActive
                }`}
                onClick={() =>
                  handleClick(
                    "features",
                  )
                }
              >
                <h3>Features</h3>
              </button>
              <button
                className={`${
                  css.btn
                } ${
                  reviews &&
                  css.isActive
                }`}
                onClick={() =>
                  handleClick("reviews")
                }
              >
                <h3>Reviews</h3>
              </button>
            </div>
            <div
              className={
                css.detail_info_form
              }
            >
              {features ? (
                <DetailInfo
                  truckInfo={truckInfo}
                />
              ) : (
                <Reviews
                  reviews={
                    truckInfo.reviews
                  }
                />
              )}
              <FeedbackForm />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default CamperInfoPage;
