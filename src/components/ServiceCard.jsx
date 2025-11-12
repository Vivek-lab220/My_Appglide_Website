export default function ServiceCard({title,desc}){
  return (
    <div className="p-6 bg-white rounded-lg border shadow-sm">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}