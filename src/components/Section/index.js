import { useRef } from "react";
import { useInView } from "framer-motion";
import "./styles.css";

function SectionAnimate({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className='animate_section' ref={ref}>
			<span
				className='animate'
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition:
						"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}>
				{children}
			</span>
		</section>
	);
}

export default SectionAnimate;
