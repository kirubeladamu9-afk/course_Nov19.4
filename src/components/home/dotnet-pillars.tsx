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
  <section aria-labelledby="dotnet-pillars-title" className="bg-[#f5f7fa] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium leading-5 tracking-[0.035em] text-slate-600 shadow-sm">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#127C71]" />
          Categories
        </span>
        <h2 id="dotnet-pillars-title" className="mt-4 text-[clamp(2rem,calc(1.6087rem+1.7391vw),3rem)] font-semibold leading-[1.25] tracking-[-0.06em] text-slate-950">
          Explore Category
        </h2>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {categories.map(({ name, count, description, icon: Icon }) => (
          <article key={name} className="group rounded-3xl border-2 border-transparent bg-white px-5 pb-6 pt-5 transition-all duration-500 hover:border-[#127C71] sm:px-7 sm:pb-8 sm:pt-7">
            <div className="mb-9 flex items-start justify-between sm:mb-11 lg:mb-[60px]">
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-slate-100 bg-white text-[#127C71] shadow-lg">
                <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
              </span>
              <span className="rounded-full bg-[#f5f7fa] px-3 py-1 text-sm font-medium leading-5 tracking-[0.035em] text-slate-600">
                {count} {count === 1 ? 'Course' : 'Courses'}
              </span>
            </div>
            <h3 className="text-lg font-medium leading-7 text-slate-950 sm:text-xl lg:text-2xl">{name}</h3>
            <p className="mt-3 line-clamp-2 text-base leading-6 tracking-[0.03em] text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default DotNetPillars
