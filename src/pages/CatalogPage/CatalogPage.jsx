import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Button from "../../components/Button/Button.jsx";
import Location from "../../components/Location/Location.jsx";
import VehicleEquipment from "../../components/VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../../components/VehicleType/VehicleType.jsx";
import TrucksList from "../../components/TrucksList/TrucksList.jsx";

import { resetItems } from "../../redux/trucks/action.js";

import css from "./CatalogPage.module.css";

function CatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetItems());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <section className={css.filters}>
        <Location />
        <VehicleEquipment />
        <VehicleType />
        <Button variant="search">
          Search
        </Button>
      </section>
      <section className={css.trucks}>
        <TrucksList />
      </section>
    </div>
  );
}

export default CatalogPage;
