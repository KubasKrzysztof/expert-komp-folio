import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
			setIsMobileMenuOpen(false)
		}
	}

	const navItems = [
		{ label: 'Strona główna', id: 'hero' },
		{ label: 'O nas', id: 'about' },
		{ label: 'Oferta', id: 'services' },
		{ label: 'Kontakt', id: 'contact' },
	]

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'open' : ''} 
				${isScrolled || isMobileMenuOpen ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent dark:bg-transparent'}
}`}>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-20'>
					<button
						onClick={() => scrollToSection('hero')}
						className='text-2xl font-bold text-primary hover:text-primary/90 transition-colors'>
						expert-komp
					</button>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center gap-8'>
						{navItems.map(item => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className='relative px-3 py-2 text-foreground text-xl font-bold group transition-colors'>
								<span>{item.label}</span>
								<span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#EFD9CE] transition-all duration-300 group-hover:w-full'></span>
							</button>
						))}
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className='ml-2 group'>
							{theme === 'dark' ? (
								<Sun className='h-7 w-7 transition-transform duration-500 group-hover:scale-150' />
							) : (
								<Moon className='h-7 w-7 transition-transform duration-500 group-hover:scale-150' />
							)}
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden flex items-center gap-2'>
						<Button variant='ghost' size='icon' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
							{theme === 'dark' ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
						</Button>
						<Button variant='ghost' size='icon' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
							{isMobileMenuOpen ? <X /> : <Menu />}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className='md:hidden pb-4'>
						<div className='flex flex-col gap-4'>
							{navItems.map(item => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className='text-foreground hover:text-primary transition-colors font-medium text-left'>
									{item.label}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navigation
