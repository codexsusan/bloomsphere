import PostPreviewCard from "@/components/PostPreviewCard";
import { getPostMetaData } from "@/utils/post";
import Link from "next/link";

function HomePage() {
    const postMetaData = getPostMetaData();

    return (
        <>
            <div className="min-h-60 bg-gradient-to-t from-violet-800/5 via-violet-800 to-violet-900 backdrop-blur-md overflow-hidden flex flex-col justify-center items-center ">
                <div className="2xl:w-1/2 lg:w-3/4 md:w-full w-1/2 text-3xl font-semibold flex justify-center text-center gap-y-4 text-white leading-10">
                    A personal note.
                </div>
            </div>
            <main className="flex justify-center mt-10">
                <div className="max-w-full w-full p-4 grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12">
                    <div className="flex flex-col gap-y-2 md:col-start-2 md:col-span-8 lg:col-span-6 lg:col-start-4">
                        {postMetaData.map((article, index) => {
                            return <PostPreviewCard key={index} article={article} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export default HomePage;
