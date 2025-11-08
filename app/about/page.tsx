import { About } from '@/components/about'
import { Navigation } from '@/components/navigation'

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="max-w-4xl mx-auto px-6 py-8">
				<Navigation />
				<About />
			</div>
		</main>
	)
}
