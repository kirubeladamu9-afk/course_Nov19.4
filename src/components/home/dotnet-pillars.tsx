import { BriefcaseBusiness, Monitor, Pencil, ShieldCheck, Sparkles, Video } from 'lucide-react'

const categories = [
  {
    name: 'Web Development',
    count: 3,
    description: 'Learn how to build modern, responsive websites using HTML, CSS, JavaScript, and more.',
    icon: Monitor,
  },
  {
    name: 'UI/UX Design',
    count: 2,
    description: 'Master user-centered design principles, wireframing, and prototyping to create intuitive experiences.',
    icon: Pencil,
  },
  {
    name: 'Digital Marketing',
    count: 1,
    description: 'Discover strategies for growing brands online through SEO, social media, content, and more.',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Cyber Security',
    count: 0,
    description: 'Understand the fundamentals of securing systems, networks, and data while learning the essentials.',
    icon: ShieldCheck,
  },
  {
    name: 'Artificial Intelligence',
    count: 0,
    description: 'Explore the basics of AI, machine learning, and data-driven decision making to build new skills.',
    icon: Sparkles,
  },
  {
    name: 'Video Editing',
    count: 0,
    description: 'Learn professional video editing techniques, storytelling, and post-production skills.',
    icon: Video,
  },
]

const DotNetPillars = () => (
  <section aria-labelledby="dotnet-pillars-title" className="bg-[#f5f7fb] px-4 py-10 sm:px-6 md:px-8 md:py-14">
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-1 text-[10px] font-medium leading-none text-slate-600 shadow-sm">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          Categories
        </span>
        <h2 id="dotnet-pillars-title" className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-[2rem]">
          Explore Category
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ name, count, description, icon: Icon }) => (
          <article key={name} className="group min-h-[164px] rounded-2xl border border-white/80 bg-white p-[18px] shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-100 bg-white text-violet-500 shadow-sm">
                <Icon aria-hidden="true" size={16} strokeWidth={2} />
              </span>
              <span className="rounded-full bg-slate-50 px-2 py-1 text-[10px] font-medium leading-none text-slate-600">
                {count} {count === 1 ? 'Course' : 'Courses'}
              </span>
            </div>
            <h3 className="mb-1.5 mt-8 text-[15px] font-medium leading-snug text-slate-950">{name}</h3>
            <p className="line-clamp-2 text-xs leading-[1.45] text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default DotNetPillars
