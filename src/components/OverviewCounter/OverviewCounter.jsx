import { motion } from "framer-motion";
import CountUp from "react-countup";

export const OverviewCounter = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="container h-12 md:h-32 p-3"
        >
            <div className="mx-auto my-4 grid w-full grid-cols-4 divide-x divide-slate-700 bg-white shadow-lg dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] lg:-translate-y-20 p-2 md:p-8">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
                        <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            start={0}
                            end={234}
                            suffix="+"
                            duration={2.75}
                        />
                    </p>
                    <h1 className="sm:text-md text-xs md:text-lg">
                        Fundraisers
                    </h1>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
                        <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            start={0}
                            end={56}
                            suffix="+"
                            duration={2.75}
                        />
                    </p>
                    <h1 className="sm:text-md text-xs md:text-lg">Raised</h1>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
                        <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            start={0}
                            end={234}
                            suffix="k+"
                        />
                    </p>
                    <h1 className="sm:text-md text-xs md:text-lg">Donations</h1>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
                        <CountUp
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                            start={-875.039}
                            end={160527.012}
                            separator=" "
                            suffix="+"
                        />
                    </p>
                    <h1 className="sm:text-md text-xs md:text-lg">
                        Volunteers
                    </h1>
                </div>
            </div>
        </motion.div>
    );
};
