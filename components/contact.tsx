import { FaDiscord } from 'react-icons/fa'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
	{
		name: 'GitHub',
		icon: Github,
		href: 'https://github.com/overthemike',
		username: '@overthemike',
	},
	{
		name: 'LinkedIn',
		icon: Linkedin,
		href: 'https://linkedin.com/in/overthemike',
		username: 'overthemike',
	},
	{
		name: 'Email',
		icon: Mail,
		href: 'mailto:overthemike@gmail.com',
		username: 'overthemike@gmail.com',
	},
	{
		name: 'Discord',
		icon: FaDiscord,
		hre3f: 'https://discord.com/users/overthemike',
		username: '@overthemike',
	},
]

export function Contact() {
	return (
		<section id="contact" className="mb-20">
			<h2 className="text-2xl font-bold mb-8 text-primary">——— CONTACT</h2>

			<div className="space-y-6">
				<p className="text-lg leading-relaxed text-pretty">
					Interested in discussing frontend architecture, state management, or potential
					collaboration? I'm always open to connecting with fellow engineers and exploring new
					opportunities.
				</p>

				<div className="grid gap-4 sm:grid-cols-2">
					{socialLinks.map((link) => {
						const Icon = link.icon
						return (
							<a
								key={link.name}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 p-4 border border-border rounded hover:border-primary transition-colors group"
							>
								<Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
								<div>
									<div className="font-medium">{link.name}</div>
									<div className="text-sm text-muted-foreground">{link.username}</div>
								</div>
							</a>
						)
					})}
				</div>
			</div>
		</section>
	)
}
