import React from 'react'
export default function Blogs(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Blogs</h1>
      <p className="mt-2 text-gray-600">Insights on product, growth and operations.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <article className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="font-semibold">How to run remote product squads</h3>
          <p className="mt-2 text-sm text-gray-600">Best practices from our engineering teams.</p>
        </article>
        <article className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="font-semibold">Data pipelines for startups</h3>
          <p className="mt-2 text-sm text-gray-600">Designing reliable ETL for scale.</p>
        </article>
      </div>
    </div>
  )
}