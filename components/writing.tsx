export function Writing() {
	const articles = [
		{
			title: 'Cosplay and Wiretapping in JS',
			description:
				'JavaScript’s lesser-known capabilities—[Symbol].toPrimitive and proxies—can together create seemingly “impossible” reactivity by intercepting state reads and producing live values.',
			date: '2025',
			type: 'Technical Article',
			url: 'https://dev.to/overthemike/cosplay-and-wiretapping-javascripts-hidden-superpowers-1gcm',
		},
		{
			title: 'My favorite failed experiment',
			description:
				"How close can we mimic typescript's compile time language features during runtime? Hint: more than you probably think, but less than what is most likely helpful",
			date: '2025',
			type: 'Technical Article',
			url: 'https://dev.to/overthemike/pipetype-typescript-unions-bitwise-operators-and-my-favorite-failed-experiment-1cbk',
		},
	]

	return (
		<section id="writing" className="mb-16">
			<div className="mb-8">
				<h2 className="text-xl font-bold text-primary mb-2">
					<span className="text-muted-foreground">{'>'}</span> writing
				</h2>
				<div className="h-px bg-border mb-6"></div>
				<p className="text-muted-foreground text-sm leading-relaxed">
					Technical articles, architecture guides, and deep-dives into frontend engineering, state
					management, and developer experience optimization.
				</p>
			</div>

			<div className="space-y-6">
				{articles.map((article, index) => (
					<div key={index} className="group">
						<a href={article.url}>
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
								<h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
									{article.title}
								</h3>
								<div className="flex items-center gap-3 text-xs text-muted-foreground">
									<span className="bg-card px-2 py-1 rounded border">{article.type}</span>
									<span>{article.date}</span>
								</div>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed mb-3">
								{article.description}
							</p>
							<div className="text-xs text-primary">
								<span className="text-muted-foreground">{'>'}</span> read more
							</div>
						</a>
					</div>
				))}
			</div>
		</section>
	)
}
