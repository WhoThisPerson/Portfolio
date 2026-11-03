import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import './index.css';
import { useState } from 'react';

const HomePage = () => {

	const [pageToggle, setPageToggle] = useState<"About" | "Projects" | "Resume" | "Contact">("About");
	const [sectionToggle, setSectionToggle] = useState<"Experience" | "Education">("Experience");
	
	return (
		<div>
			<Header 
				pageToggle={pageToggle}
				setPageToggle={setPageToggle}
			/>
			<div className="pt-20 bg-black text-gray-light min-h-screen
				bg-gradient-to-tr from-black via-sky-900 to-black
				bg-[length:200%_200%]
				animate-gradient">
				
				{pageToggle === "About" && (
					<>
						<section><About /></section>
						{/* Toggle Button */}
						<div className="max-w-4xl mx-auto px-4 py-5 flex gap-2">

							<div className="relative flex bg-gray-700 rounded-lg overflow-hidden w-full border">
								
								{/* Sliding Indicator */}
								<div
									className={`absolute top-0 left-0 h-full w-1/2 transition-transform duration-300 ease-in-out`}
									style={{
										transform: sectionToggle === "Experience" 
											? "translateX(0%)" 
											: "translateX(100%)",
									}}
								></div>

								<button
									onClick={() => setSectionToggle("Experience")}
									className={`relative flex-1 py-3 z-10 rounded text-xl font-semibold transition-colors duration-300 ${
										sectionToggle === "Experience"
											? "bg-black text-white"
											: "bg-gray-light text-gray-dark"
									}`}
								>
									Experience
								</button>

								<button
									onClick={() => setSectionToggle("Education")}
									className={`relative flex-1 py-3 z-10 rounded text-xl font-semibold transition-colors duration-300 ${
										sectionToggle === "Education"
											? "bg-black text-white"
											: "bg-gray-light text-gray-dark"
									}`}
								>
									Education
								</button>
							</div>
						</div>

						{sectionToggle === "Experience" && <section className="animate-fadeIn"><Experience /></section>}
						{sectionToggle === "Education" && <section className="animate-fadeIn"><Education /></section>}

						<section><Skills /></section>
					</>
				)}

				{pageToggle === "Projects" && <section><Projects /></section>}
				{pageToggle === "Resume" && <section><Resume /></section>}
				{pageToggle === "Contact" && <section><Contact /></section>}
			</div>
		</div>

	);
}

export default HomePage;
