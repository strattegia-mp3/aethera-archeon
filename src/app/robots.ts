import type { MetadataRoute } from "next";

/**
 * @description Geração dinâmica do robots.txt.
 * Define as regras de rastreamento para web crawlers, protegendo rotas sensíveis
 * e direcionando os motores de busca para o sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://aetheraarcheon.com.br";

  return {
    rules: {
      // Aplica as regras para todos os robôs de busca (Google, Bing, DuckDuckGo, etc.)
      userAgent: "*",

      // Permite o rastreamento de toda a aplicação visível
      allow: "/",

      // Bloqueia rotas que não devem ser indexadas (mesmo que ainda não existam,
      // declarar isso demonstra boas práticas de segurança corporativa no portfólio)
      disallow: [
        "/api/", // Bloqueia endpoints de API
        "/admin/", // Bloqueia painéis de controle
        "/private/", // Bloqueia áreas restritas
      ],
    },

    // Aponta o caminho absoluto do sitemap para os motores de busca
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
