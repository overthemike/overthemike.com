import { Contact } from '@/components/contact'
import { Navigation } from '@/components/navigation'

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="max-w-4xl mx-auto px-6 py-8">
				<Navigation />
				<Contact />
			</div>
		</main>
	)
}
