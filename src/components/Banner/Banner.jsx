import Image2 from "../../assets/blog4.jpg";
import Image from "../../assets/image.jpg";

export const Banner = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
            <div className="container md:h-[500px] items-center justify-center py-10">
                <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                    {/* image container */}
                    <div>
                        <img
                            src={Image2}
                            alt=""
                            className="max-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
                        />
                    </div>
                    {/* text container */}
                    <div className="lg:max-w-[400px] space-y-6">
                        <h1 className="text-2xl font-semibold md:text-4xl mb-4">
                            Help the Needy People
                        </h1>
                        <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                            <li className="font-medium">
                                Always give without remembering and always
                                receive without forgetting
                            </li>
                            <li className="font-medium">
                                Always give without remembering and always
                                receive without forgetting
                            </li>
                            <li className="font-medium">
                                Always give without remembering and always
                                receive without forgetting
                            </li>
                        </ul>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="container md:h-[500px] items-center justify-center py-10">
                <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                    {/* image container */}
                    <div className="sm:order-2">
                        <img
                            src={Image}
                            alt=""
                            className="max-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
                        />
                    </div>
                    {/* text container */}
                    <div className="sm:order-1 lg:max-w-[400px] space-y-6">
                        <h1 className="text-2xl font-semibold md:text-4xl mb-4">
                            Help the Needy People
                        </h1>
                        <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                            <li className="font-medium">
                                Always give without remembering and always
                                receive without forgetting
                            </li>
                            <li className="font-medium">
                                Always give without remembering and always
                                receive without forgetting
                            </li>
                            <li className="font-medium">
                                Always give without remembering and always
                                receive without forgetting
                            </li>
                        </ul>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
