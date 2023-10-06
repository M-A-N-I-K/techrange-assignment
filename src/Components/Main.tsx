import Projects from "../Utils/Projects";
import { motion } from "framer-motion";

export default function Main() {
	return (
		<section className="text-gray-600 h-[100vh] overflow-y-scroll body-font">
			<div className="max-w-5xl relative z-20 pt-52 pb-24 mx-auto">
				<motion.h1
					initial={{ opacity: 0, x: 72 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: {
							delay: 0.5,
							duration: 1,
						},
					}}
					viewport={{ once: true }}
					className="text-3xl sm:text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6"
				>
					Welcome to My Portfolio
				</motion.h1>
				<motion.h2
					initial={{ opacity: 0, x: 92 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: {
							delay: 0.5,
							duration: 1,
						},
					}}
					viewport={{ once: true }}
					className="text-xl sm:text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-[#D6D5A8] text-center"
				>
					Manik Dingra | Web Developer
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, x: 112 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: {
							delay: 0.5,
							duration: 1,
						},
					}}
					viewport={{ once: true }}
					className="flex justify-center text-center"
				>
					<a
						className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent rounded-lg bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-[#D6D5A8]  focus:shadow-outline"
						target="_blank"
						href="https://github.com/M-A-N-I-K"
					>
						<div className="flex text-lg">
							<span className="justify-center">Github</span>
						</div>
					</a>
					<a
						className="inline-flex items-center py-3 font-semibold tracking-tighter rounded-lg text-black duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-[#D6D5A8] via-white to-[#D6D5A8] hover:from-white hover:via-[#D6D5A8] hover:to-white transition-bg px-8 text-md md:mt-0 focus:shadow-outline"
						target="_blank"
						href="https://linkedin.com/in/manik-dingra"
					>
						<div className="flex text-lg">
							<span className="justify-center">Linkedin</span>
						</div>
					</a>
				</motion.div>
			</div>
			<Projects />
		</section>
	);
}
