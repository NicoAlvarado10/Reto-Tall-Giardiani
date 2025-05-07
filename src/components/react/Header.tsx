import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [activeSection, setActiveSection] = useState<string>("");
	const [hoverEffect, setHoverEffect] = useState<{
		active: boolean;
		x: number;
		y: number;
	}>({ active: false, x: 0, y: 0 });
	const headerRef = useRef<HTMLElement | null>(null);
	
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
			
			// Update active section based on scroll position
			const sections = ["services", "exito", "about", "contact"];
			const currentSection = sections.find(section => {
				const element = document.getElementById(section);
				if (!element) return false;
				const rect = element.getBoundingClientRect();
				return rect.top <= 100 && rect.bottom >= 100;
			});
			
			if (currentSection) {
				setActiveSection(currentSection);
			}
		};
		
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	
	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		if (!headerRef.current) return;
		const rect = headerRef.current.getBoundingClientRect();
		setHoverEffect({
			active: true,
			x: ((e.clientX - rect.left) / rect.width) * 100,
			y: ((e.clientY - rect.top) / rect.height) * 100
		});
	};
	
	const handleMouseLeave = () => {
		setHoverEffect({ active: false, x: 0, y: 0 });
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header 
			ref={headerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
				${scrolled ? "py-2" : "py-4"} px-4 sm:px-6 md:px-8 lg:px-16`}
			style={{
				background: hoverEffect.active 
					? `radial-gradient(circle at ${hoverEffect.x}% ${hoverEffect.y}%, rgba(0, 140, 255, 0.15), rgba(10, 10, 10, ${scrolled ? '0.95' : '0.85'}) 30%)`
					: `rgba(10, 10, 10, ${scrolled ? '0.95' : '0.85'})`,
				backdropFilter: 'blur(10px)',
				boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 6, 23, 0.5)' : 'none'
			}}
		>
			<div className="max-w-7xl mx-auto">
				{/* Animated navigation line */}
				<div className="absolute h-0.5 bottom-0 left-0 right-0">
					<div className="h-full bg-gradient-to-r from-[#01012E]/0 via-[#008cff] to-[#101727]/0 bg-size-200 animate-gradient-x" />
				</div>
				
				<div className="flex justify-between items-center relative">
					{/* Logo with animated effect */}
					<div className="flex items-center group">
						<a href="#" className="flex items-center space-x-3 relative overflow-hidden">
							<div className="relative">
								<img src="./logo.png" alt="Tall Giardini Logo" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-none z-10 relative transition-transform duration-500 " />
							</div>
							<div className="overflow-hidden">
								<span className="text-white font-bold text-lg sm:text-xl block relative">
									Tall Giardini
								</span>
							</div>
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button 
						className="relative w-10 h-10 flex items-center justify-center rounded-full  text-gray-300 hover:text-white overflow-hidden lg:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-1">
						{[
							{ href: "#services", label: "Servicios", hasDropdown: true },
							{ href: "#exito", label: "Modelo de Éxito", hasDropdown: false },
							{ href: "#about", label: "Nosotros", hasDropdown: false }
						].map((item) => (
							<div key={item.href} className="relative group perspective">
								<a 
									href={item.href}
									className={`relative px-4 py-2 text-gray-300 font-medium group-hover:text-white transition-colors flex items-center overflow-hidden rounded-lg mx-1
										${activeSection === item.href.substring(1) ? 'text-white' : ''}`}
								>
									<span className="relative z-10">{item.label}</span>
									{item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />}
									
									{/* Interactive hover background */}
									<span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
										style={{
											background: 'radial-gradient(circle closest-side, rgba(37, 99, 235, 0.3), transparent)',
											transform: 'translateZ(-1px)'
										}}></span>
								</a>
								 
								{/* Enhanced dropdown with animation */}
								{item.hasDropdown && (
									<div className="absolute top-full left-0 mt-1 w-56 origin-top-left transform transition-all duration-300 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible">
										<div className="backdrop-blur-xl bg-gray-900/90 rounded-lg overflow-hidden divide-y divide-gray-800/50 shadow-2xl border border-gray-800/30">
											{[
												{ href: "#embudos", label: "Embudos de Ventas", icon: "🚀" },
												{ href: "#estrategias", label: "Estrategias Personalizadas", icon: "🔍" },
												{ href: "#prospeccion", label: "Prospectos Calificados", icon: "🎯" }
											].map((subItem) => (
												<a 
													key={subItem.href}
													href={subItem.href} 
													className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all"
												>
													<span className="mr-2">{subItem.icon}</span>
													{subItem.label}
												</a>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</nav>

					{/* Call to Action Button - Desktop only */}
					<a
						href="#contact"
						className="hidden lg:flex items-center px-6 py-2.5 relative overflow-hidden group rounded-full transition-all duration-300"
					>
						<span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500"></span>
						<span className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-20">
							<svg className="w-full h-full" viewBox="0 0 100 100">
								<defs>
									<pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
										<path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></path>
									</pattern>
								</defs>
								<rect width="100" height="100" fill="url(#grid)"></rect>
							</svg>
						</span>
						<Sparkles className="w-4 h-4 mr-2 relative text-white" />
						<span className="relative z-10 text-white font-medium">Crezcamos Juntos</span>
					</a>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div 
						className="fixed inset-0 bg-[#0a0a0afa] h-screen w-screen block lg:hidden backdrop-blur-3xl z-50" 
						onClick={closeMenu}
						style={{
							backdropFilter: 'blur(12px)',
							WebkitBackdropFilter: 'blur(12px)',
						}}
					>
						<div className="flex flex-col h-full" onClick={(e) => e.stopPropagation()}>
							<div className="flex justify-end p-6">
								<button 
									className="text-gray-300 hover:text-white absolute top-5 right-8 rounded-full p-2 transition-colors duration-300"
									onClick={closeMenu}
									aria-label="Close menu"
								>
									<X size={24} />
								</button>
							</div>
							<div className="flex-1 flex flex-col justify-center items-center space-y-8 px-8">
								<a href="#services" className="text-2xl text-center text-white font-medium hover:text-blue-400 transition-colors" onClick={closeMenu}>
									Servicios
								</a>
								<a href="#exito" className="text-2xl text-center text-white font-medium hover:text-blue-400 transition-colors" onClick={closeMenu}>
									Modelo de Éxito
								</a>
								<a href="#about" className="text-2xl text-center text-white font-medium hover:text-blue-400 transition-colors" onClick={closeMenu}>
									Nosotros
								</a>
								<a 
									href="#contact" 
									className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transform hover:scale-105 transition-all"
									onClick={closeMenu}
								>
									Crezcamos Juntos
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;