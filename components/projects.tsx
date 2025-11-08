const projects = [
  {
    name: "Valtio",
    description: "Core maintainer of popular React state management library with proxy-based reactivity.",
    link: "https://github.com/pmndrs/valtio",
    type: "Open Source",
  },
  {
    name: "Ripplio",
    description: "Fine-grained reactivity system for building performant user interfaces.",
    link: "#",
    type: "Library",
  },
  {
    name: "Pipetype",
    description: "Bitmask/union validators for TypeScript with advanced type inference.",
    link: "#",
    type: "Tool",
  },
  {
    name: "Synpatico",
    description: "Values-only transport system with core/client/genome architecture.",
    link: "#",
    type: "Framework",
  },
  {
    name: "valtio-plugin",
    description: "Plugin system for extending Valtio with custom functionality.",
    link: "#",
    type: "Plugin",
  },
  {
    name: "valtio-persist",
    description: "Persistence layer for Valtio state with multiple storage adapters.",
    link: "#",
    type: "Plugin",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-2xl font-bold mb-8 text-primary">——— PROJECTS</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border border-border p-6 rounded bg-card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{project.type}</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{project.description}</p>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
