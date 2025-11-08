import { Navigation } from '@/components/navigation'
import { Writing } from '@/components/writing'

export default function WritingPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="max-w-4xl mx-auto px-6 py-8">
				<Navigation />
				<Writing />
			</div>
		</main>
	)
}
