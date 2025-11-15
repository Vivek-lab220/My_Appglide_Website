// Home.jsx — Enhanced Wide Layout (Brand #0052CC)
import React from "react";
import ClientBadge from "../components/ClientBadge.jsx";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section Wide */}
      <section className="w-full bg-gray-50 py-16 border-b">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-snug">Remote charge your growth and tech operations!</h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-lg">We partner with global SaaS startups and Tech companies to enable rapid scaling</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="px-6 py-3 bg-[#0052CC] text-white rounded-md shadow hover:opacity-90 transition">Book a Consultation</a>
              <a href="/case-studies" className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition">View Case Studies</a>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden lg:block">
            <img src="https://appglide.io/wp-content/uploads/2024/10/Analyze-cuate-1024x1024-1.webp" alt="Growth Illustration" className="w-full max-w-[420px] h-auto rounded-xl object-contain drop-shadow-sm mx-auto" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {[{icon:"⚡",label:"Fast Delivery"},{icon:"🔒",label:"Reliable Ops"},{icon:"📈",label:"Growth Focused"},{icon:"🤝",label:"Trusted Teams"}].map((item,i)=>(
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-md bg-gray-100 border text-2xl">{item.icon}</div>
              <p className="mt-4 text-gray-800 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold">What we do</h2>
            <p className="mt-3 text-gray-600 max-w-md">Services built for high-growth companies — engineering, operations, and ERP transformation.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[{title:"Growth & Sales Ops",desc:"Lead enrichment, SDR support and ABM operations to scale revenue."},{title:"Product & Engineering",desc:"Cross-functional squads to ship features faster and reliably."},{title:"Customer Support & NOC",desc:"24x7 support and monitoring for business-critical operations."}].map((s,i)=>(
            <article key={i} className="p-8 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-semibold">Trusted by startups</h3>
          <div className="mt-8 flex gap-4 flex-wrap">
            <ClientBadge name="Priority ERP" />
            <ClientBadge name="FintechX" />
            <ClientBadge name="SaaSCo" />
            <ClientBadge name="Marketly" />
          </div>
        </div>
      </section>
    </div>
  );
}
