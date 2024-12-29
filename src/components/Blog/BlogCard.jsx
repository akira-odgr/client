import { blogData } from "./blogData";

export const BlogCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogData.map((data) => (
                <div
                    key={data.id}
                    className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white"
                >
                    <div className="overflow-hidden">
                        <img
                            src={data.img}
                            alt=""
                            className="mx-auto h-[250px] object-cover w-full transition duration-700 hover:skew-x-2 hover:scale-110"
                        />
                    </div>
                    <div className="flex justify-between pt-2 text-slate-600 text-sm">
                        <p>{data.data}</p>
                        <p className="line-clamp-1">by {data.writer}</p>
                    </div>
                    <div className="space-y-2 py-3">
                        <h1 className="line-clamp-1 font-bold">{data.title}</h1>
                        <p className="line-clamp-2 text-sm">{data.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
