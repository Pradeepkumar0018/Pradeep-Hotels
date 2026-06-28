import { readFileSync } from "fs";
import { join } from "path";

const blogDataPath = join(
  process.cwd(),
  "public/data/blogdata.json"
);

export function getAllPosts() {
  const fileContents = readFileSync(
    blogDataPath,
    "utf8"
  );

  if (!fileContents.trim()) {
    return [];
  }

  return JSON.parse(fileContents);
}

export function getPostBySlug(slug: string) {
  const fileContents = readFileSync(
    blogDataPath,
    "utf8"
  );

  if (!fileContents.trim()) {
    return null;
  }

  const posts = JSON.parse(fileContents);

  return posts.find(
    (post: any) => post.slug === slug
  );
}

export function getPostSlugs() {
  const fileContents = readFileSync(
    blogDataPath,
    "utf8"
  );

  if (!fileContents.trim()) {
    return [];
  }

  const posts = JSON.parse(fileContents);

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}