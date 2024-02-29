import { PostMetaData } from "@/types";
import Link from "next/link";
import React from "react";

function PostPreviewCard({ article }: { article: PostMetaData }) {
    return (
        <div className="p-4 w-full flex flex-col gap-y-2 rounded-md border border-slate-100/20">
            <Link
                className="text-[#3b82f6] font-bold"
                href={`/article/${article.slug}`}
            >
                {article.title}
            </Link>
            <p className="text-[#9ca3af] text-lg font-normal line-clamp-3">{article.subtitle}</p>
            <p className="text-sm text-slate-400">{article.date}</p>
        </div>
    );
}

export default PostPreviewCard;
