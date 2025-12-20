import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { useToast } from '@/hooks/use-toast'
import { Send, Loader2 } from 'lucide-react'

const formSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, { message: 'Imię musi mieć co najmniej 2 znaki' })
		.max(100, { message: 'Imię nie może przekraczać 100 znaków' }),
	email: z
		.string()
		.trim()
		.email({ message: 'Nieprawidłowy adres email' })
		.max(255, { message: 'Email nie może przekraczać 255 znaków' }),
	phone: z
		.string()
		.trim()
		.min(9, { message: 'Numer telefonu musi mieć co najmniej 9 cyfr' })
		.max(20, { message: 'Numer telefonu nie może przekraczać 20 znaków' })
		.regex(/^[0-9\s\+\-\(\)]+$/, { message: 'Nieprawidłowy format numeru telefonu' }),
	message: z
		.string()
		.trim()
		.min(10, { message: 'Opis problemu musi mieć co najmniej 10 znaków' })
		.max(1000, { message: 'Opis problemu nie może przekraczać 1000 znaków' }),
})

type FormValues = z.infer<typeof formSchema>

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const { toast } = useToast()

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
	})

	const onSubmit = async (data: FormValues) => {
		setIsSubmitting(true)

		try {
			const formData = new FormData()
			formData.append('access_key', 'a8ad8be0-cc12-4b7a-b0df-45a81a4944bd')
			formData.append('name', data.name)
			formData.append('email', data.email)
			formData.append('phone', data.phone)
			formData.append('message', data.message)

			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			})

			const result = await response.json()

			if (result.success) {
				toast({
					title: 'Wiadomość wysłana!',
					description: 'Dziękujemy za kontakt. Odezwiemy się wkrótce.',
				})
				form.reset()
			} else {
				toast({
					title: 'Błąd',
					description: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.',
					variant: 'destructive',
				})
			}
		} catch (error) {
			toast({
				title: 'Błąd',
				description: 'Coś poszło nie tak. Spróbuj ponownie.',
				variant: 'destructive',
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className='bg-card p-8 rounded-lg border border-border'>
			<h3 className='text-2xl font-bold mb-6 text-card-foreground'>Wyślij wiadomość</h3>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Imię i nazwisko</FormLabel>
								<FormControl>
									<Input placeholder='Jan Kowalski' {...field} className='bg-background' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type='email' placeholder='jan.kowalski@example.com' {...field} className='bg-background' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Telefon</FormLabel>
								<FormControl>
									<Input type='tel' placeholder='+48 123 456 789' {...field} className='bg-background' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Opis problemu</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Opisz swój problem lub zapytanie...'
										className='min-h-[120px] bg-background resize-none'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type='submit'
						className='w-full bg-primary hover:bg-primary/90 text-primary-foreground'
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<Loader2 className='mr-2 h-5 w-5 animate-spin' />
								Wysyłanie...
							</>
						) : (
							<>
								<Send className='mr-2 h-5 w-5' />
								Wyślij wiadomość
							</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default ContactForm
