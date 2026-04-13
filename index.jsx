// VERSÃO PROFISSIONAL COMPLETA - ESTANTE INTELIGENTE

import { useState } from "react";

export default function EstanteInteligentePage() {
  const [email, setEmail] = useState("");

  const posts = [
    {
      title: "Quando a estante também nos lê",
      category: "Crônica",
      date: "Abril 2026",
      excerpt:
        "Há livros que parecem esperar o nosso tempo certo. Ficam em silêncio por semanas...",
    },
    {
      title: "O tipo de leitura que muda quem você é",
      category: "Reflexão",
      date: "Abril 2026",
      excerpt:
        "Nem toda leitura transforma — mas algumas atravessam a gente de um jeito irreversível.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F1E8] text-[#2E2A26]">
      {/* HEADER */}
      <header className="sticky top-0 bg-[#F6F1E8]/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#8E4B4D] uppercase">Estante Inteligente</p>
            <h1 className="font-semibold">Paula Costa</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#">Início</a>
            <a href="#blog">Blog</a>
            <a href="#sobre">Sobre</a>
            <a href="#newsletter">Newsletter</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl font-semibold leading-tight">
          Literatura com profundidade, escrita com identidade.
        </h2>
        <p className="mt-6 text-lg text-[#4C453F]">
          Um espaço para crônicas inéditas, análise crítica e recomendações que realmente fazem sentido.
        </p>
      </section>

      {/* BLOG */}
      <section id="blog" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-10">Últimos textos</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white p-6 rounded-2xl shadow hover:-translate-y-1 transition">
              <span className="text-xs text-[#8E4B4D]">{post.category} • {post.date}</span>
              <h4 className="text-xl font-semibold mt-2">{post.title}</h4>
              <p className="mt-3 text-[#4C453F]">{post.excerpt}</p>
              <button className="mt-4 text-[#8E4B4D] font-medium">Ler completo →</button>
            </article>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">Sobre mim</h3>
          <p className="mt-6 text-lg text-[#4C453F] leading-8">
            Sou Paula Costa, professora e escritora. Criei a Estante Inteligente para compartilhar leituras, reflexões e textos autorais com profundidade.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="py-20 px-6 bg-[#EADFD0]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">Entre para minha newsletter</h3>
          <p className="mt-4 text-[#4C453F]">
            Receba crônicas inéditas e recomendações diretamente no seu e-mail.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              className="px-4 py-3 rounded-xl w-64"
            />
            <button className="bg-[#8E4B4D] text-white px-6 py-3 rounded-xl">
              Entrar
            </button>
          </div>
        </div>
      </section>

      {/* MONETIZAÇÃO FUTURA */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold">Minha estante recomendada</h3>
        <p className="mt-4 text-[#4C453F]">
          Em breve: indicações com links para compra (estratégia de monetização).
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2E2A26] text-white py-10 text-center">
        <p>© 2026 Estante Inteligente por Paula Costa</p>
        <a href="https://www.instagram.com/estante.inteligente/" className="block mt-3 text-[#D9C7A2]">
          @estante.inteligente
        </a>
      </footer>
    </div>
  );
}
