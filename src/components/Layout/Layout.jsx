import { Suspense } from 'react';

import Header from '../Header/Header.jsx';

import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={css.container}>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </>
  );
}