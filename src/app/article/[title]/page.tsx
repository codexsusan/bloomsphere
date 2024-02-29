import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetaData } from "@/utils/post";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ArticlePageProps {
    params: {
        title: string;
    };
}

const getPostContent = (title: string) => {
    const folder = "src/posts/";
    const file = `${folder}${title}.md`;
    const content = fs.readFileSync(file, "utf-8");
    const matterContent = matter(content);
    return matterContent;
};

export const generateStaticParams = () => {
    const posts = getPostMetaData();

    return posts.map((post) => ({
        slug: post.slug,
    }));
};

function ArticlePage(props: ArticlePageProps) {
    const { title } = props.params;
    const article = getPostContent(title);
    return (
        <div className="flex justify-center p-4 bg-[#121212] ">
            <div className="prose text-white prose-lg prose-strong:text-white prose-em:text-white  prose-headings:text-white prose-blockquote:text-white prose-zinc prose-a:text-blue-600 max-w-full md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
                <div className="flex gapx-x-2 items-center">
                    <Link className="no-underline font-bold" href={"/"}>
                        Home
                    </Link>
                    <ChevronRight className="text-blue-500" />
                    <Link
                        className="no-underline font-semibold"
                        href={`/article/${title}`}
                    >
                        {article.data.title}
                    </Link>
                </div>
                <div className="my-10 flex flex-col gap-y-3 justify-center w-full">
                    <h1 className="my-0 text-center">{article.data.title}</h1>
                    <p className="my-0 text-center">{article.data.subtitle}</p>
                    <div className="flex justify-center gap-x-4 items-center text-slate-100">
                        <div className="flex gap-x-2  items-center">
                            <Image
                                height={460}
                                width={460}
                                className="h-8 w-8 rounded-full my-2"
                                alt="carousel"
                                src={article.data.authorProfile}
                                priority
                            />
                            <div className="text-lg">{article.data.authorName}</div>
                        </div>
                        <div>• {article.data.date}</div>
                    </div>
                </div>
                <Markdown>{article.content}</Markdown>
            </div>
        </div>
    );
}

export default ArticlePage;
