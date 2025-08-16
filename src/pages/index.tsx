import DefaultLayout from "@/layouts/default";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Services from "@/components/services";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <motion.section
        className="flex h-full flex-col items-center justify-center gap-4 "
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col h-[75vh] mb-16 items-center justify-center text-center">
          <div className="inline-block md:inline-block lg:inline-block max-w-lg text-center justify-center ">
            <motion.span key={0} variants={childVariants} className={title()}>
              Welcome to&nbsp;
            </motion.span>
            <motion.span
              key={1}
              variants={childVariants}
              className={title({ color: "green" })}
            >
              Astral Signs&nbsp;
            </motion.span>
            <br />
            <motion.span key={2} variants={childVariants} className={title()}>
              Sign work made easy
            </motion.span>
            <motion.div
              key={3}
              variants={childVariants}
              className={subtitle({ class: "mt-4" })}
            >
              We are a family run business established in the south of England
              for over 20 years, With over 30+ years of experience.
            </motion.div>
          </div>

          <motion.div
            className="flex gap-3 justify-center mt-5"
            key={4}
            variants={childVariants}
          >
            <Link
              isExternal
              className={
                buttonStyles({
                  variant: "shadow",
                }) + " bg-gradient-to-r from-[#B5D969] to-[#9ed130] text-black"
              }
              href={siteConfig.navItems[2].href}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="inline-block max-w-lg text-center justify-center ">
          <motion.h1 key={5} variants={childVariants} className={title()}>
            Our Services
          </motion.h1>
          <motion.p
            key={6}
            variants={childVariants}
            className={subtitle({ class: "mt-2" })}
          >
            We offer a range of services to help get your business noticed
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
          {siteConfig.services.map((service, index) => (
            <Services
              key={service.id || index} // Use service.id if available, else index
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </motion.section>
    </DefaultLayout>
  );
}
