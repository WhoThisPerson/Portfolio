import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import './index.css';
import { useState } from 'react';

const HomePage = () => {

	const [pageToggle, setPageToggle] = useState<"Experience" | "Education">("Experience");

	return (
		<main>
			<Header />
			<main className="pt-20 bg-gray-dark text-gray-light min-h-screen">
				<section><About /></section>
				{/* Toggle Button */}
				<div className="max-w-4xl mx-auto px-4 py-5 flex gap-2">
					<button
						onClick={() => setPageToggle("Experience")}
						className={`flex-1 py-3 rounded ${
							pageToggle === "Experience"
								? "bg-black text-white font-bold text-xl"
								: "bg-gray-light text-gray-dark font-semibold text-xl"
						}`}
					>
						Experience
					</button>

					<button
						onClick={() => setPageToggle("Education")}
						className={`flex-1 py-3 rounded ${
							pageToggle === "Education"
								? "bg-black text-white font-bold text-xl"
								: "bg-gray-light text-gray-dark font-semibold text-xl"
						}`}
					>
						Education
					</button>

				</div>

				{pageToggle === "Experience" && <section className="animate-fadeIn"><Experience /></section>}
				{pageToggle === "Education" && <section className="animate-fadeIn"><Education /></section>}
				<section><Projects /></section>
			</main>
		</main>

	);
}

export default HomePage;
