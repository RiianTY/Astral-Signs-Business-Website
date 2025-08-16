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
      // No need for initial/animate here; controlled by parent
    >
      <Card className="rounded-md">
        <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible p-4">
          <Image
            alt="Card background"
            className="object-cover rounded-md"
            src={image}
            width={300}
            height={200}
          />
        </CardBody>
      </Card>
    </motion.div>
  );
}
