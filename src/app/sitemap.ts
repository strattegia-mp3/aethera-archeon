import type { MetadataRoute } from "next";

/**
 * @description Geração dinâmica do sitemap.xml para SEO avançado.
 * No Next.js App Router, este arquivo mapeia as rotas da aplicação para os motores de busca.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aetheraarcheon.com.br";

  return [
    {
      url: baseUrl,
      lastModified: new Date(), // Puxa a data do último build ou deploy
      changeFrequency: "monthly", // Frequência esperada de atualização
      priority: 1.0, // Prioridade máxima para a Home (0.0 a 1.0)
    },
  ];
}
