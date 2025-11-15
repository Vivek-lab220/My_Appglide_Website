export default function ServiceCard ({ icon, title, desc, href = '#' }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-white/80 bg-white p-8 shadow-[0_20px_60px_rgba(79,70,229,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(79,70,229,0.12)]">
      <div>
        <div
          aria-hidden="true"
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600"
        >
          {icon}
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-gray-600">{desc}</p>
      </div>
      <a href={href} className="mt-8 text-sm font-semibold text-indigo-600 hover:text-indigo-500">
        View More
      </a>
    </article>
  )
}