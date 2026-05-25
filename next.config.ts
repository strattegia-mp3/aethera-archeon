import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ─── Segurança ─── */
  // Oculta o header "X-Powered-By: Next.js" nas requisições.
  // É uma boa prática de segurança para não expor a stack do servidor gratuitamente.
  poweredByHeader: false,

  /* ─── Otimização de Imagens (Crucial para Arquitetura) ─── */
  images: {
    // Força o Next.js a tentar servir as imagens nos formatos mais leves e modernos primeiro.
    // O AVIF pode ser até 20% menor que o WebP, melhorando drasticamente o LCP (Core Web Vitals).
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  /* ─── Otimizações de Compilação ─── */
  experimental: {
    // Excelente escolha! Garante que importações de bibliotecas com muitos exports
    // não inchem o bundle carregando o que não é usado (Tree Shaking forçado).
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  /* ─── Limpeza de Produção (Opcional, mas recomendado) ─── */
  compiler: {
    // Remove todos os console.log() quando o projeto for para produção,
    // mantendo o terminal do cliente limpo e evitando vazar dados de debug.
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
