import { Banner } from "./components/Banner/Banner";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { OurVision } from "./components/OurVision/OurVision";
import { OverviewCounter } from "./components/OverviewCounter/OverviewCounter";

export const App = () => {
    return (
        <>
            <main className="overflow-x-hidden bg-white dark:bg-gray-900">
                <Navbar />
                <Hero />
                <OverviewCounter />
                <OurVision />
                <Banner />
            </main>
        </>
    );
};
