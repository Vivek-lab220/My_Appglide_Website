import React from 'react'
import CaseCard from '../components/CaseCard'
export default function CaseStudies(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Case Studies</h1>
      <p className="mt-2 text-gray-600">Selected client work and outcomes.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CaseCard title="Scaling Support Ops" summary="Reduced response time from 5h to 20m for a fintech."/>
        <CaseCard title="Product Acceleration" summary="Launched 12 features in 3 months for a B2B SaaS."/>
      </div>
    </div>
  )
}