import React from "react";

export const VideoBanner = () => {
    return (
        <div className="bg-primary">
            <div className="container py-8 md:py-16">
                <div className="grid grid-col-1 items-center md:grid-cols-2 gap-4 md:gap-8">
                    {/* video section */}
                    <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/E8w0KbL19mg?si=GkEMWAD9qljBNRlw"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            className="aspect-video w-full"
                        ></iframe>
                    </div>
                    {/* text section */}
                    <div className="space-y-4 text-center md:text-left text-white">
                        <h1 className="text-4xl font-bold">Watch Our Video</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quod nesciunt magnam alias vel quam asperiores
                            inventore voluptate, consectetur, possimus rem
                            aliquid quisquam sed corrupti saepe officia placeat
                            nobis? Dolore, vel.
                        </p>
                        <button className="btn-primary !bg-white !text-black">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
