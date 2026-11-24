import { Award, GraduationCap, MonitorPlay } from 'lucide-react'

const benefits = [
  {
    title: 'Expert Instructors',
    description: 'Learn from experienced professionals who bring real-world expertise to every lesson.',
    image: '/images/why-skillsaint-instructors.png',
    alt: 'Instructor leading an online lesson',
    icon: GraduationCap,
  },
  {
    title: 'Interactive Learning Experience',
    description: 'Engage with video lessons, assignments, and quizzes that make learning practical.',
    image: '/images/why-skillsaint-interactive.png',
    alt: 'Interactive online learning interface',
    icon: MonitorPlay,
  },
  {
    title: 'Recognized Certificates',
    description: 'Boost your portfolio with verified certificates after completing courses.',
    image: '/images/why-skillsaint-certificates.png',
    alt: 'Certificate of achievement',
    icon: Award,
  },
]

const WhySkillsaint = () => (
  <section aria-labelledby="why-skillsaint-title" className="bg-[#0e121b] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#343744] bg-[#171a24] px-3 py-1.5 text-sm font-medium text-slate-300">
          <Award aria-hidden="true" size={16} />
          Why Skillsaint
        </span>
        <h2 id="why-skillsaint-title" className="mt-4 text-[clamp(2rem,calc(1.6087rem+1.7391vw),3rem)] font-semibold leading-[1.25] tracking-[-0.04em] text-white">
          The Smarter Way to Learn Tech
        </h2>
        <p className="mx-auto mt-4 max-w-[478px] text-base leading-6 text-slate-400">
          Experience the difference with a platform engineered to help you actually learn, apply, and succeed.
        </p>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {benefits.map(({ title, description, image, alt, icon: Icon }) => (
          <article key={title} className="rounded-3xl border border-[#202020] bg-gradient-to-br from-[#222530] to-[#131422] px-4 pb-4 pt-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#303342] to-[#191b27] text-violet-300">
              <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 text-xl font-semibold leading-[1.5] text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            <img src={image} alt={alt} loading="lazy" className="mt-8 aspect-[3/2] w-full rounded-xl border-4 border-[#2a2c36] object-cover" />
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default WhySkillsaint
