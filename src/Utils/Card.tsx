import { ReactElement } from "react";
import { motion } from "framer-motion";

interface project {
	img: string;
	title: string;
	description: string;
	href: string;
}

const Card = ({ img, title, description, href }: project): ReactElement => {
	return (
		<motion.a
			initial={{ opacity: 0, y: 72 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					delay: 0.5,
					duration: 1,
				},
			}}
			viewport={{ once: true }}
			href={href}
			target="_blank"
			className="ktq4"
		>
			<img
				className="hover:scale-105 cursor-pointer transition duration-700 ease-in-out"
				src={img}
			></img>
			<h3 className="pt-3 font-bold text-lg text-[#D6D5A8]">{title}</h3>
			<p className="pt-2 value-text text-xs sm:text-md text-gray-200 fkrr1">
				{description}
			</p>
		</motion.a>
	);
};

export default Card;
