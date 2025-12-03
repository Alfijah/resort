import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import SectionWrapper from "../animations/SectionWrapper";
import invite from "../assets/inviteSection/leaf.jpg"

export default function InviteSection() {
    return (
        <div
            className="invite-section relative w-full h-[760px] md:h-[640px] mt-18 sm:mt-20 md:mt-22 pb-8 lg:pb-0 flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${invite})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            <div className="absolute inset-0 bg-black/70">
            </div>

            <SectionWrapper
                className="relative z-20 flex flex-col text-start md:text-center w-full md:w-[90%] lg:max-w-4xl px-6 sm:px-12">
                <motion.h1 variants={fadeInUp} className="heading-primary">
                    De verborgen luxe van Sendang Redjo
                </motion.h1>

                <motion.p variants={fadeInUp} className="body-text">
                    Bij Sendang Redjo ervaar je een unieke mix van rust, natuur en warme Javaanse gastvrijheid.
                    Alles is ontworpen om je volledig onder te dompelen in ontspanning en beleving.<br /><br />
                </motion.p>

                <motion.p variants={fadeInUp} className="body-text">
                    <span className="italic">Stijlvolle cabanas</span><br />
                    Ontworpen met Javaanse elegantie—warme details, zachte luxe en een panoramisch zicht op het meer.<br /><br />
                </motion.p>

                <motion.p variants={fadeInUp} className="body-text">
                    <span className="italic">Rust & privacy</span><br />
                    Geen haast, geen drukte—alleen natuur, stilte en het gevoel dat tijd hier trager stroomt.<br /><br />
                </motion.p>

                <motion.p variants={fadeInUp} className="body-text">
                    <span className="italic">Avontuurlijke beleving</span><br />
                    Glijd in stilte over het water, vang je eigen vis of dobber weg in totale ontspanning.<br /><br />
                </motion.p>

                <motion.p variants={fadeInUp} className="body-text">
                    <span className="italic">Authentieke Javaanse keuken</span><br />
                    Langzaam bereid op houtvuur—pure smaken, warme geuren en traditie in zijn mooiste vorm.
                </motion.p>
            </SectionWrapper>
        </div>
    )
}
