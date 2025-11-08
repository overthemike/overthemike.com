import { Experience } from '@/components/experience'
import { Navigation } from '@/components/navigation'

export default function ExperiencePage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="max-w-4xl mx-auto px-6 py-8">
				<Navigation />
				<Experience />
			</div>
		</main>
	)
}
