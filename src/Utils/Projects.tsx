import mindVaidya from "/mind_vaidya.png";
import blogSpot from "/eleventy_blog_site.png";
import chatify from "/chatify.jpeg";
import Card from "../Utils/Card";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<>
			<motion.h2
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
				className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-5xl"
			>
				Crafting Code with Precision and Creativity
			</motion.h2>
			<br></br>
			<motion.p
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
				className="mx-auto text-md md:text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3"
			>
				Dive into my portfolio projects, where I turn ideas into innovative
				web solutions.
			</motion.p>

			<div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
				<Card
					img={mindVaidya}
					href={"https://github.com/M-A-N-I-K/mind_vaidya"}
					title="Mind Vaidya (Sept 2023)"
					description="Mind Vaidya is a secure Mental Health Support Platform I developed, which led to a 30% increase in user engagement, a 25% improvement in user satisfaction, and early detection of mental health concerns in 85% of cases. This platform provides personalized advice and support, positively impacting users' well-being."
				/>
				<Card
					img={blogSpot}
					href={"https://github.com/M-A-N-I-K/11ty-blog-site"}
					title="Blogspot (Aug 2023)"
					description="For Blogspot, I engineered a blog website using 11ty, hosted on Netlify, and secured with Netlify Identity for user authentication. This project integrates Netlify CMS for easy content management, resulting in lightning-fast content deployment and a 50% reduction in publishing time."
				/>
				<Card
					img={chatify}
					href={"https://github.com/M-A-N-I-K/chatify"}
					title="Chatify (Realtime Web Chat App) (May 2023)"
					description="I developed Chatify, a real-time Chat Application with a 100% message delivery rate using React.js and Node.js. This contribution led to a 90% user satisfaction rate among a thriving community of developers, fostering seamless communication for users."
				/>
			</div>
		</>
	);
};

export default Projects;
