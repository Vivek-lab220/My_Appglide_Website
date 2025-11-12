import React from 'react'
export default function Resources(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Resources</h1>
      <p className="mt-2 text-gray-600">Case studies, guides and templates for founders.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="font-semibold">Guide: Remote Team Handbook</h3>
          <p className="mt-2 text-sm text-gray-600">Processes & rituals for distributed teams.</p>
        </div>
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="font-semibold">Template: Incident Response</h3>
          <p className="mt-2 text-sm text-gray-600">A start-to-finish runbook for incidents.</p>
        </div>
      </div>
    </div>
  )
}