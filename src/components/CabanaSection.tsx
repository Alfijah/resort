import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import CabanaCarousel from "./carousels/CabanaCarousel";


export default function CabanaSection() {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.55, // elementen komen 1-voor-1
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
    };

    // const fadeInLeft = {
    //     hidden: { opacity: 0, x: 50 },
    //     visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
    // };

    return (
        <motion.div variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full max-w-screen-2xl mx-auto  sm:px-10 md:px-12 lg:px-20 flex flex-col lg:flex-row items-start overscroll-x-none mt-4 sm:mt-10 lg:mt-24">

            <motion.div variants={container}
                className="flex flex-col items-start justify-center w-full lg:w-1/3 mx-auto px-6 py-12 md:py-16 lg:py-20">
                <motion.h1 variants={fadeInUp}
                    className="text-2xl md:text-4xl xl:text-4xl leading-snugged text-gray-800">Cabanas</motion.h1>
                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed8">
                    Onze cabanas zijn jouw privéplek aan het water — ontworpen voor rust, comfort en volledige ontspanning.
                </motion.p>

                <motion.p variants={fadeInUp}
                    className="text-sm md:text-base lg:text-base xl:text-base pt-4 md:pt-6 xl:pt-8 text-gray-600 leading-relaxed">
                    Elke cabana beschikt over een luxe outdoor zithoek, een eigen keuken met bar, poolbeds, een hangmat en een moderne douche met warm water en toilet. Kajaks, hengels en luchtmatrassen staan voor je klaar, of je nu het meer op wil of in stilte wil dobberen.
                </motion.p>
            </motion.div>

            <motion.div variants={container}
                className="w-full lg:w-1/2 mx-auto">
                <div className="relative w-full overflow-hidden h-[240px] sm:h-[348px] md:h-[456px] lg:h-[480px]">
                    <CabanaCarousel />

                </div>
            </motion.div>
        </motion.div>
    )

}
