import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './styles.module.scss';
const HomePage = lazy(() =>
  import("@/components/home").then((module) => ({ default: module.HomePage }))
);
const AboutPage = lazy(() =>
  import("@/components/about").then((module) => ({ default: module.AboutPage }))
);

export const App = () => (
  <div className={styles.app}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
      <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </div>
)
