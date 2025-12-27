import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../../shared/constants";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const article = articles.find((a) => a.id === Number(id));

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
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
