import { Route, Routes } from "react-router-dom"
import {lazy, Suspense} from 'react';
import css from './App.module.css';
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

function App() {

  return (
    <div className={css.container}>
      <Layout>
          <Suspense fallback ={null}>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/catalog" element={<h1>Catalog</h1>}/>
            </Routes>
          </Suspense>

      </Layout>

      
    </div>
  )
}

export default App
