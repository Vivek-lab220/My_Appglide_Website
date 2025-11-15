import React, {useState} from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_7s69z1p'
const TEMPLATE_ID = 'template_s8b1k6g'
const PUBLIC_KEY = 'Wbvz2QPR18-KZnS31'

export default function Contact(){
  const [form,setForm] = useState({name:'', email:'', message:''})
  const [loading,setLoading] = useState(false)
  const [status,setStatus] = useState(null)
  const [errorMsg,setErrorMsg] = useState('')

  function handleChange(e){ const {name,value} = e.target; setForm(prev=>({...prev,[name]:value})) }
  function validate(){ if(!form.name.trim()||!form.email.trim()||!form.message.trim()){ setErrorMsg('Please fill all fields.'); return false } if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){ setErrorMsg('Please enter a valid email address.'); return false } setErrorMsg(''); return true }

  async function handleSubmit(e){ e.preventDefault(); if(!validate()) return; setLoading(true); setStatus(null); try{ const templateParams = { user_name: form.name, user_email: form.email, user_message: form.message }; await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY); setLoading(false); setStatus('success'); setForm({name:'',email:'',message:''}) }catch(err){ console.error(err); setLoading(false); setStatus('error'); setErrorMsg('Failed to send message. Please try later.') } }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="mt-2 text-gray-600">Reach out for partnerships, hiring or enquiries.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg p-6 border shadow-sm">
          <h3 className="font-semibold">Office locations</h3>
          <ul className="mt-4 text-sm text-gray-700 space-y-3">
            <li><div className="font-medium">Chennai</div><div className="text-gray-600 text-sm">Prince Infocity 1, OMR, Chennai</div></li>
            <li><div className="font-medium">Bengaluru</div><div className="text-gray-600 text-sm">Varthur Hobli, Bengaluru</div></li>
            <li><div className="font-medium">USA</div><div className="text-gray-600 text-sm">Lake Oswego, Oregon</div></li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6 border">
          {status==='success' && <div className="mb-4 p-3 rounded-md bg-green-50 border border-green-200 text-green-800">Your message was sent successfully.</div>}
          {status==='error' && <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-red-800">{errorMsg}</div>}
          {errorMsg && status!=='error' && <div className="mb-4 p-3 rounded-md bg-yellow-50 border border-yellow-200 text-yellow-800">{errorMsg}</div>}

          <label className="block"><div className="text-sm font-medium">Your name</div><input name="name" value={form.name} onChange={handleChange} className="mt-2 w-full rounded-md border p-2" placeholder="Jane Doe"/></label>
          <label className="block mt-4"><div className="text-sm font-medium">Email</div><input name="email" value={form.email} onChange={handleChange} className="mt-2 w-full rounded-md border p-2" placeholder="hello@company.com"/></label>
          <label className="block mt-4"><div className="text-sm font-medium">Message</div><textarea name="message" value={form.message} onChange={handleChange} className="mt-2 w-full rounded-md border p-2 h-32" placeholder="Tell us about your project"></textarea></label>

          <div className="mt-4 flex items-center gap-3">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-black text-white rounded-md">{loading?'Sending...':'Send message'}</button>
            <button type="button" onClick={()=>{setForm({name:'',email:'',message:''}); setStatus(null); setErrorMsg('')}} className="px-4 py-2 border rounded-md">Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}