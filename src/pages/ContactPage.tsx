import { useTranslation } from "react-i18next";
import SectionWrapper from "../animations/SectionWrapper";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/Varianten";

export default function ContactPage(){
    const { t } = useTranslation();
        
          return (
            <div className="w-full py-20">
              <SectionWrapper className="max-w-screen-xl mx-auto px-6 sm:px-8 md:px-10">
                
                <motion.h1 variants={fadeInUp} className="heading-primary mb-6">
                  {t("cabanas.title")}
                </motion.h1>
        
                <motion.p variants={fadeInUp} className="body-text mb-10">
                  {t("cabanas.subtitle1")}
                </motion.p>
        
                {/* Voeg hier jouw inhoud toe */}
                
              </SectionWrapper>
            </div>
          );
}