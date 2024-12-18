import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

function NotFoundPage() {
    return (
      <div className={css.container}>
    <Link to="/" className={css.link}>
      <button
        className={css.button}
        type="button"
      >
        404 Not Found
      </button>
    </Link >
        </div>
  );
}

export default NotFoundPage;
