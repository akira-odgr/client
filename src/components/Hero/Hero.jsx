import { useState } from "react";
import HeroImg from "../../assets/image2.jpg";
import { motion } from "framer-motion";
import { FadeUp, FormAnimation } from "../../utility/animation";

const bgStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    width: "100%",
};

export const Hero = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        amount: 0,
    });

    const handleClick = (e) => {
        // console.log(e);
        const name = e.target.name;
        setData((previousData) => {
            return {
                ...previousData,
                [name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);
    };

    return (
        <div style={bgStyle}>
            <div className="min-h-[650px] md:min-h-[750px] pb-10 pt-32 md:pt-48">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
                        <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
                            <motion.h1
                                variants={FadeUp(0.2)}
                                initial="initial"
                                animate="animate"
                                className="text-5xl lg:text-7xl font-bold"
                            >
                                Join Us in Changing Lives
                            </motion.h1>
                            <motion.p
                                variants={FadeUp(0.4)}
                                initial="initial"
                                animate="animate"
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia, eveniet. Velit rem
                                quam impedit, voluptatum laudantium quis at
                                aspernatur molestiae?
                            </motion.p>
                            <div className="space-x-4">
                                <motion.button
                                    variants={FadeUp(0.6)}
                                    initial="initial"
                                    animate="animate"
                                    className="btn-primary"
                                >
                                    Get Started
                                </motion.button>
                                <motion.button
                                    variants={FadeUp(0.8)}
                                    initial="initial"
                                    animate="animate"
                                    className="btn-outline"
                                >
                                    Login
                                </motion.button>
                            </div>
                        </div>
                        {/* Form section */}
                        <motion.div
                            variants={FormAnimation()}
                            initial="initial"
                            animate="animate"
                            className="bg-white dark:bg-black w-[90%] md:w-[400px] mx-auto p-4 text-black dark:text-white rounded-2xl shadow-md"
                        >
                            <div>
                                <h1 className="text-lg text-center font-semibold">
                                    Quick Donation Form
                                </h1>
                                <div className="flex items-center justify-center gap-8 py-4">
                                    <button className="button-square">
                                        $01
                                    </button>
                                    <button className="button-square">
                                        $05
                                    </button>
                                    <button className="button-square">
                                        $10
                                    </button>
                                    <button className="button-square">
                                        $99
                                    </button>
                                </div>
                                {/* input section here  */}
                                <div className="space-y-6">
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        onChange={handleClick}
                                        placeholder="Amount"
                                        defaultValue={1}
                                        min={1}
                                        max={100}
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                                    />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={handleClick}
                                        placeholder="Name"
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleClick}
                                        placeholder="Email"
                                        className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
                                    />
                                    <button
                                        className="btn-primary w-full rounded-full"
                                        onClick={handleSubmit}
                                    >
                                        Donate Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
