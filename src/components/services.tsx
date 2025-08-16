import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";

// Define variants for the individual service card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface ServiceProps {
  title: string;
  image: string;
  key: string | number;
}

export default function Services({ title, image, key }: ServiceProps) {
  return (
    <motion.div
      key={key}
      variants={cardVariants}
      // need for initial/animate here; controlled by parent
    >
      <Card className="rounded-md">
        <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{title}</h4>
        </CardHeader>
        <CardBody className="relative overflow-hidden p-4">
          <Image
            alt="Card background"
            className="object-cover rounded-md block w-full h-auto z-0"
            src={image}
            width={300}
            height={200}
          />
          {/* subtle glass overlay: smaller blur and finer opacity */}
          <div
            className="absolute inset-0 rounded-md z-10 pointer-events-none
                       bg-[rgba(255,255,255,0.01)] backdrop-blur-[0.5px]"
          />
        </CardBody>
      </Card>
    </motion.div>
  );
}
