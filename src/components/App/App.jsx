import {
  Route,
  Routes,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import css from "./App.module.css";
import Layout from "../Layout/Layout";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() =>
  import(
    "../../pages/HomePage/HomePage"
  ),
);
const CatalogPage = lazy(() =>
  import(
    "../../pages/CatalogPage/CatalogPage"
  ),
);
const CamperPage = lazy(() =>
  import(
    "../../pages/CamperPage/CamperPage"
  ),
);
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div className={css.container}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/catalog"
              element={<CatalogPage />}
            />
            <Route
              path="/catalog/:id"
              element={<CamperPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
