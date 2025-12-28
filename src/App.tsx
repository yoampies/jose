// src/App.tsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./features/home/Home"));
const Psycotherapy = lazy(() => import("./features/psycotherapy/Psycotherapy"));
const Constelations = lazy(
  () => import("./features/constelations/Constelations")
);
const Contact = lazy(() => import("./features/contact/Contact"));
const ArticleDetail = lazy(() => import("./features/articles/ArticleDetails"));

const PageLoader = () => (
  <div className="bg-blue-900 min-h-screen flex items-center justify-center text-white">
    <div className="text-xl animate-pulse font-light italic">Cargando...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/psicoterapia" element={<Psycotherapy />} />
            <Route path="/constelaciones" element={<Constelations />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/articulos/:id" element={<ArticleDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
