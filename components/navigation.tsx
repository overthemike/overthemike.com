'use client'

type GitHubIconProps = {
	size?: number
	className?: string
}

export default function GitHubIcon({ size = 24, className = '' }: GitHubIconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			className={className}
		>
			<path
				d="M12 0C5.37 0 0 5.373 0 12c0 5.303 
        3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61
        -.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73
        1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998
        .107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.932
        0-1.31.465-2.382 1.235-3.222-.135-.303-.54-1.523.105-3.176 
        0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 
        2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23 
        .645 1.653.24 2.873.12 3.176.765.84 1.23 1.912 
        1.23 3.222 0 4.61-2.805 5.63-5.475 5.922.429.37.81 1.096.81 2.215 
        0 1.6-.015 2.89-.015 3.286 0 .315.21.69.825.57C20.565 
        21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"
			/>
		</svg>
	)
}

const navItems = [
	{ name: 'ABOUT', href: '#about' },
	{ name: 'PROJECTS', href: '#projects' },
	{ name: 'WRITING', href: '#writing' },
	{ name: 'CONTACT', href: '#contact' },
	{ name: 'GITHUB', icon: <GitHubIcon />, href: 'https://github.com/overthemike' },
]

export function Navigation() {
	return (
		<nav className="mb-16">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div className="text-sm text-muted-foreground">{'>'} michael.sweeney</div>
				<div className="flex gap-8">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm transition-colors hover:text-primary text-muted-foreground"
						>
							{item.icon ? item.icon : item.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	)
}
