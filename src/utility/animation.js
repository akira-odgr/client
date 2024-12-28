export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

export const FormAnimation = () => {
    return {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };
};

export const FadeAnimation = (delay) => {
    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

// class Animation {
//     constructor(delay) {
//         this.delay = delay;
//     }

//     static FadeUp() {
//         return {
//             initial: {
//                 opacity: 0,
//                 y: 100,
//             },
//             animate: {
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                     duration: 0.6,
//                     delay: this.delay,
//                     ease: "easeInOut",
//                 },
//             },
//         };
//     }

//     static FormAnimation() {
//         return {
//             initial: {
//                 opacity: 0,
//                 x: 100,
//             },
//             animate: {
//                 opacity: 1,
//                 x: 0,
//                 transition: {
//                     type: "spring",
//                     stiffness: 100,
//                 },
//             },
//         };
//     }

//     static FadeAnimation() {
//         return {
//             initial: {
//                 opacity: 0,
//             },
//             animate: {
//                 opacity: 1,
//                 transition: {
//                     duration: 0.6,
//                     delay: this.delay,
//                     ease: "easeInOut",
//                 },
//             },
//         };
//     }
// }

// // 使用例
// const fadeUpAnimation = Animation.FadeUp();
// const formAnimation = Animation.FormAnimation();
// const fadeAnimation = new Animation(0.5).FadeAnimation();
