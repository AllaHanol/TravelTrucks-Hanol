import TruckOptions from "../TruckOptions/TruckOptions";
import css from "./TruckOptionsList.module.css";

export default function TruckOptionsList({
  data,
}) {
  //   const keysOptions = [
  //     "AC",
  //     "TV",
  //     "radio",
  //     "bathroom",
  //     "kitchen",
  //     "refrigerator",
  //     "microwave",
  //     "gas",
  //     "water",
  //   ];

  const options = Object.keys(
    data,
  ).filter(
    (option) => data[option] === true,
  );

  return (
    <ul className={css.optionsList}>
      {options.map((option) => (
        <li key={option}>
          <TruckOptions
            option={option}
            id={option}
          />
        </li>
      ))}
      {/* <li>
        <TruckOptions
          option={data.transmission}
          id={"transmission"}
        />
      </li>
      <li>
        <TruckOptions
          option={data.engine}
          id={"engine"}
        />
      </li> */}
      {/* {keysOptions.map((key) => {
        if (data?.[key] === true) {
          return (
            <li key={key}>
              <TruckOptions
                option={key}
                id={key}
              />
            </li>
          );
        }
        return null;
      })} */}
    </ul>
  );
}
