import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider } from 'next-themes'
import Index from './pages/Index'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

// Vite sam wie, czy działa w subfolderze (GitHub Pages)
const basename = import.meta.env.BASE_URL === '/' ? '/' : '/expert-komp-folio'

const App = () => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
			<TooltipProvider>
				<Toaster />
				<Sonner />

				<BrowserRouter basename={basename}>
					<Routes>
						<Route path='/' element={<Index />} />

						<Route path='/contact' element={<Navigate to='/#contact' replace />} />

						<Route path='*' element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</ThemeProvider>
	</QueryClientProvider>
)

export default App
