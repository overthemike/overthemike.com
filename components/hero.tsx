export function Hero() {
	return (
		<section className="mb-20">
			<div className="mb-8">
				<h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Michael Sweeney</h1>
				<p className="text-lg leading-relaxed text-pretty max-w-3xl">
					Advanced JS/TS and React specialist. Building scalable design systems, performance-minded
					architecture, and developer experience tools that impact organizations at scale.
				</p>
			</div>

			<div className="text-sm text-muted-foreground">
				<p className="mb-2">$ whoami</p>
				<p className="pl-4">Valtio core maintainer</p>
				<p className="pl-4">
					Creator of{' '}
					<a
						href="https://github.com/valtiojs/valtio-plugin"
						className="underline hover:text-green-200"
						target="_blank"
					>
						valtio-plugin
					</a>
					,{' '}
					<a
						href="https://github.com/valtiojs/valtio-persist"
						className="underline hover:text-green-200"
						target="_blank"
					>
						valtio-persist
					</a>
					,{' '}
					<a
						href="https://github.com/valtiojs/valtio-zod"
						className="underline hover:text-green-200 green"
						target="_blank"
					>
						valtio-zod
					</a>
					,{' '}
					<a
						href="https://github.com/valtiojs/valtio-fsm"
						className="underline hover:text-green-200"
						target="_blank"
					>
						valtio-fsm
					</a>{' '}
					as well as some experimental libraries:{' '}
					<a
						href="https://github.com/overthemike/ripplio"
						className="underline hover:text-green-200"
						target="_blank"
					>
						ripplio
					</a>
					,{' '}
					<a
						href="https://github.com/overthemike/pipetype"
						className="underline hover:text-green-200"
						target="_blank"
					>
						pipetype
					</a>
					, and{' '}
					<a
						href="https://github.com/synpatico"
						className="underline hover:text-green-200"
						target="_blank"
					>
						synpatico protocol
					</a>
				</p>
			</div>
		</section>
	)
}
