import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";
import SectionWrapper from "../animations/SectionWrapper";
import invite from "../assets/inviteSection/invite.jpg"

export default function InviteSection() {
    return (
        <div
            className="relative w-full items-center lg:items-start overscroll-x-none">
            <video
                src={invite}
                autoPlay
                loop
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
            </div>

            <SectionWrapper
                className="flex flex-col text-start md:items-center md:justify-center md:text-center w-full md:w-[95%] lg:max-w-5xl mx-auto px-6 sm:px-12 py-14 md:py-14 lg:py-16">
                <motion.h1 variants={fadeInUp}
                    className="heading-primary">De verborgen luxe van Sendang Redjo</motion.h1>
                <motion.p variants={fadeInUp}
                    className="body-text">
                    Bij Sendang Redjo ervaar je een unieke mix van rust, natuur en warme Javaanse gastvrijheid. Alles is ontworpen om je volledig onder te dompelen in ontspanning en beleving.<br></br>
                    Stijlvolle cabanas<br></br>
                    Elke cabana is met Javaanse elegantie ontworpen: warme details, zachte luxe en een panoramisch zicht over het stille meer dat je elke ochtend opnieuw verwelkomt.<br></br>

                    Rust & privacy<br></br>
                    Dit is een plek die je omarmt. Geen drukte, geen haast — alleen de rust van het water, het ruisen van de bomen en het gevoel dat de tijd hier nét een beetje langzamer loopt.<br></br>

                    Avontuurlijke beleving<br></br>
                    Laat de dag ontstaan zoals jij dat wil: glijd in stilte over het meer, vang je eigen vis of geef je over aan het gewichtloze dobberen. Alles op jouw tempo, alles in jouw verhaal.<br></br>

                    Authentieke Javaanse keuken<br></br>
                    Onze gerechten worden langzaam bereid op houtvuur, precies zoals de traditie het bedoelt. Pure smaken, warme geuren — luxe in zijn meest oprechte vorm.<br></br>
                </motion.p>
            </SectionWrapper>
        </div>
    )
}
