export default function CaseCard({title,summary}){
  return (
    <article className="p-4 bg-white border rounded-md shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{summary}</p>
    </article>
  )
}