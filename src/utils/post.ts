import { PostMetaData } from "@/types";
import fs from "fs";
import matter from "gray-matter";

export const getPostMetaData: () => PostMetaData[] = () => {
  const folder = "src/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`src/posts/${fileName}`, "utf-8");
    const matterContent = matter(fileContents);
    return {
      title: matterContent.data.title,
      date: matterContent.data.date,
      subtitle: matterContent.data.subtitle,
      authorName: matterContent.data.authorName,
      authorProfile: matterContent.data.authorProfile,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};
