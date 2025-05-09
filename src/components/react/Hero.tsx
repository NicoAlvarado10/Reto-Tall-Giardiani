import { useState, useEffect, useRef } from "react";
import { ArrowRight, MoveRight } from "lucide-react";

const Hero: React.FC = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		// Mark as loaded after a short delay for entrance animation
		setTimeout(() => {
			setIsLoaded(true);
		}, 300);
	}, []);

	return (
		<section 
			ref={sectionRef}
			className="relative flex flex-col items-center justify-center min-h-screen py-20 px-5 md:px-16 lg:px-24 overflow-hidden bg-gradient-to-r from-black via-gray-950 to-black"
			
		>
			
			{/* Main content with staggered animations */}
			<div className="relative z-10  mx-auto text-center">
				{/* Animated badge */}
				<div 
					className={`inline-block my-6 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/30 transition-all duration-700 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}
				>
					<span className="text-blue-300 text-sm font-medium flex items-center">
						<span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2 animate-ping"></span>
						Revoluciona tu estrategia digital
					</span>
				</div>

				{/* Main heading with split-letter animation */}
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight overflow-hidden">
					{/* First line */}
					<div className="overflow-hidden">
						<span className={`inline-block transition-transform duration-700 delay-300 ${isLoaded ? 'transform-none' : 'translate-y-full'}`}>
							Logra un Crecimiento Exponencial
						</span>
					</div>

					{/* Second line */}
					<div className="overflow-hidden mt-2">
						<span className={`inline-block transition-transform duration-700 delay-500 ${isLoaded ? 'transform-none' : 'translate-y-full'}`}>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-x">
								Embudos de Venta Efectivos
							</span>
						</span>
					</div>
				</h1>

				{/* Animated line separator */}
				<div className={`h-px w-0 mx-auto mt-8 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-1000 ease-out ${isLoaded ? 'w-48 md:w-64' : ''}`}></div>

				{/* Description with fade in */}
				<p className={`text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mt-8 leading-relaxed transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
					Ayudamos a empresas, marcas personales e influencers a alcanzar nuevas alturas.
				</p>

				{/* Animated CTA button */}
				<div className={`mt-10 transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
					<a
						href="#get-started"
						className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full text-white text-lg font-medium max-sm:text-base"
					>
						{/* Button background layers */}
						<span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-x bg-size-200"></span>
						
						{/* Hover reveal layer */}
						<span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-white/10"></span>
						
						{/* Light beam effect on hover */}
						<span className="absolute h-full w-1/6 bg-white/20 skew-x-[20deg] -translate-x-40 group-hover:translate-x-[32rem] transition-transform duration-700"></span>
						
					
						
						{/* Button content with animated arrow */}
						<span className="relative flex items-center">
							<span>Comienza Ahora</span>
							<MoveRight className="w-5 h-5 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
