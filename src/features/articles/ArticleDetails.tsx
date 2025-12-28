import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { articles } from "../../shared/constants";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import SEO from "../../shared/components/SEO";

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const mainRef = useRef<HTMLElement>(null);
  const article = articles.find((a) => a.id === Number(id));

  useEffect(() => {
    if (!article) return;

    const ctx = gsap.context(() => {
      gsap.from(mainRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
    }, mainRef);

    return () => ctx.revert();
  }, [article]);

  if (!article) {
    return (
      <div className="bg-blue-900 min-h-screen text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Artículo no encontrado</h2>
        <Link to="/" className="text-blue-400 hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col">
      <SEO
        title="Inicio"
        description="Psicoterapia Gestalt y Constelaciones Familiares para el crecimiento y evolución personal."
        image="/assets/home_therapy.webp"
      />
      <Navbar />
      <main
        ref={mainRef}
        className="flex-grow container mx-auto px-6 py-20 max-w-4xl"
      >
        <Link
          to="/"
          className="text-[#FFD685] mb-8 inline-block hover:underline"
        >
          &larr; Volver a artículos
        </Link>
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-96 object-cover rounded-2xl mb-8 shadow-2xl"
        />
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center text-gray-300 mb-8 italic">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </div>
        <div className="text-lg leading-relaxed space-y-4">
          <p>{article.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
