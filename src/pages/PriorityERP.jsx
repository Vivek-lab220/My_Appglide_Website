import React from 'react'
export default function PriorityERP(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Priority ERP Solutions</h1>
      <p className="mt-2 text-gray-600">ERP integrations, migrations and managed services tailored for enterprises.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="font-semibold">ERP Migration</h3>
          <p className="mt-2 text-sm text-gray-600">Safe migration with minimal downtime.</p>
        </div>
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="font-semibold">Custom Integrations</h3>
          <p className="mt-2 text-sm text-gray-600">Connect ERP to modern services and APIs.</p>
        </div>
      </div>
    </div>
  )
}