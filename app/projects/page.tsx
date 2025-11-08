import { Navigation } from '@/components/navigation'
import { Projects } from '@/components/projects'

export default function ProjectsPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="max-w-4xl mx-auto px-6 py-8">
				<Navigation />
				<Projects />
			</div>
		</main>
	)
}
