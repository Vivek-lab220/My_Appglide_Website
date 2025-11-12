import React from 'react'
import ServiceCard from '../components/ServiceCard'
export default function Growth(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Growth Offerings</h1>
      <p className="mt-2 text-gray-600">Services to drive predictable revenue and scaling.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard title="Demand Gen & SDR" desc="Outbound, inbound playbooks and SDR support."/>
        <ServiceCard title="Account-based Growth" desc="Targeted accounts and enterprise outreach."/>
        <ServiceCard title="Growth Analytics" desc="Funnel insights and attribution models."/>
      </div>
    </div>
  )
}