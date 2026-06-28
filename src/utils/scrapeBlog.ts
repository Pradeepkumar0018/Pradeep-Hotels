export async function scrapeArticle(title: string) {
  return {
    title,
    description: `${title} is a popular food topic searched by users worldwide. Learn more about ingredients, preparation methods, nutrition, and serving ideas.`,
    url: `https://www.google.com/search?q=${encodeURIComponent(title)}`
  };
}