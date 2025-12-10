export function About() {
	return (
		<section id="about" className="mb-20">
			<h2 className="text-2xl font-bold mb-8 text-primary">——— ABOUT</h2>

			<div className="space-y-6 text-lg leading-relaxed">
				<p className="text-pretty">
					I'm a Staff+/Principal-level frontend leaning / platform engineer with deep expertise in
					advanced JavaScript/TypeScript and React. I'm a core maintainer of{' '}
					<a href="https://valtio.dev" target="_blank">
						valtio
					</a>{' '}
					and have authored several of it's eco-system libraries.
				</p>

				<p className="text-pretty">
					My work spans design systems at scale, complex migrations and tooling (codemods, ESLint,
					Storybook), performance-minded architecture, and library development with a focus (though
					not limited to) React.
				</p>

				<p className="text-pretty">
					I’m currently developing Synpatico, a collection of libraries and tools that transparently
					compress JSON payloads, prune dead data from REST calls, and provide the most fine-grained
					api analytics available anywhere — all without requiring any code changes for the user.
					I'm also working on some new dev tools and other exciting new additions to the valtio
					eco-system (at least I hope). I'll be writing and sharing what I can as time permits,
				</p>
			</div>
		</section>
	)
}
