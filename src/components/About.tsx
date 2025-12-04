import { Cpu, Heart, TrendingUp } from 'lucide-react'

const About = () => {
	return (
		<section id='about' className='py-20 bg-secondary'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 text-foreground'>Nasza pasja to komputery</h2>
					<div className='h-1 w-24 bg-primary mx-auto mb-8'></div>
					<p className='text-lg text-foreground/80 leading-relaxed'>
						Naszą największą pasją są komputery. Oferujemy szeroką gamę produktów – od podzespołów komputerowych, przez
						multimedia i akcesoria, po notebooki i gotowe zestawy PC. Z roku na rok poszerzamy asortyment i wprowadzamy
						nowe usługi, by sprostać oczekiwaniom naszych klientów.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
					<div className='bg-card p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 border border-border group hover:border-primary text-center'>
						<div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
							<Cpu className='h-8 w-8 text-primary' />
						</div>
						<h3 className='text-xl font-bold mb-2 text-card-foreground'>Doświadczenie</h3>
						<p className='text-muted-foreground'>Lata praktyki w naprawie i serwisie komputerów</p>
					</div>

					<div className='bg-card p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 border border-border group hover:border-primary text-center'>
						<div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
							<Heart className='h-8 w-8 text-primary' />
						</div>
						<h3 className='text-xl font-bold mb-2 text-card-foreground'>Pasja</h3>
						<p className='text-muted-foreground'>Każdy projekt traktujemy indywidualnie i z zaangażowaniem</p>
					</div>

					<div className='bg-card p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 border border-border group hover:border-primary text-center'>
						<div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
							<TrendingUp className='h-8 w-8 text-primary' />
						</div>
						<h3 className='text-xl font-bold mb-2 text-card-foreground'>Rozwój</h3>
						<p className='text-muted-foreground'>Stale poszerzamy ofertę i podnosimy kwalifikacje</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
