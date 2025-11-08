const experiences = [
	{
		period: '2020 — PRESENT',
		role: 'Maintainer',
		company: 'Open Source',
		description:
			'Core maintainer of Valtio state management library. Built comprehensive ecosystem including valtio-plugin, valtio-persist, valtio-zod, and valtio-fsm.',
		technologies: ['TypeScript', 'React', 'State Management', 'Open Source'],
	},
	{
		period: '2019 — PRESENT',
		role: 'Creator & Architect',
		company: 'Independent Projects',
		description:
			'Built Ripplio (fine-grained reactivity), Pipe type (bitmask/union validators), and Synpatico (values-only transport: core/client/genome).',
		technologies: ['JavaScript', 'TypeScript', 'Performance', 'Architecture'],
	},
]

export function Experience() {
	return (
		<section id="experience" className="mb-20">
			<h2 className="text-2xl font-bold mb-8 text-primary">——— EXPERIENCE</h2>

			<div className="space-y-12">
				{experiences.map((exp, index) => (
					<div key={index} className="border-l border-border pl-6">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
							<h3 className="text-lg font-semibold">{exp.role}</h3>
							<span className="text-sm text-muted-foreground">{exp.period}</span>
						</div>
						<p className="text-primary mb-3">{exp.company}</p>
						<p className="text-muted-foreground mb-4 leading-relaxed text-pretty">
							{exp.description}
						</p>
						<div className="flex flex-wrap gap-2">
							{exp.technologies.map((tech) => (
								<span
									key={tech}
									className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
