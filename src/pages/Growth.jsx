import React from 'react'
import ServiceCard from '../components/ServiceCard'

const HERO_IMAGE =
  'https://appglide.io/wp-content/uploads/2024/05/website_growth_offerings_image-removebg-preview.png'

// Icon components
const LinkedInIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const HandshakeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z" />
  </svg>
)

const ScheduleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
)

const NetworkIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z" />
  </svg>
)

const SettingIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const DataSharingIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const MoneyWithdrawalIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <path d="M1 10h22" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 14h.01M17 14h.01" />
  </svg>
)

const CloudIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z" />
  </svg>
)

const GROWTH_OFFERINGS = [
  {
    icon: <LinkedInIcon />,
    title: 'Linkedin Outbound ABM',
    desc: 'Account based marketing for B2B outreach using LinkedIn to generate high quality Sales Qualified Leads.'
  },
  {
    icon: <GlobeIcon />,
    title: 'Customer Support Operations and NOC',
    desc: 'Technical and Product support for fast growing customers. 24x7 monitoring of assets and resources.'
  },
  {
    icon: <HandshakeIcon />,
    title: 'Sales and Marketing operations',
    desc: 'SEO, SMM operations for optimizing marketing assets. Salesforce/Hubspot operations, metrics, dashboards, revenue operations.'
  },
  {
    icon: <ScheduleIcon />,
    title: 'Personalized Scheduling Solutions',
    desc: 'Appointment Setting and Personalized Scheduling Solutions.'
  },
  {
    icon: <NetworkIcon />,
    title: 'Technology Operations',
    desc: 'Build tools and automation workflows that help amplify startup tech teams.'
  },
  {
    icon: <SettingIcon />,
    title: 'Automation',
    desc: 'Build tools and automation workflows that help amplify startup tech teams.'
  },
  {
    icon: <DataSharingIcon />,
    title: 'Data Enrichment',
    desc: 'Sales and marketing data enrichment for leads and accounts.'
  },
  {
    icon: <MoneyWithdrawalIcon />,
    title: 'Finance Operations',
    desc: 'Account based marketing for B2B outreach using LinkedIn to generate high quality Sales Qualified Leads.'
  },
  {
    icon: <CloudIcon />,
    title: 'Salesforce Services',
    desc: 'Navigate the business ecosystem of Salesforce with our services.'
  }
]

export default function Growth () {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
      <section className="flex flex-col-reverse items-center justify-center gap-12 lg:flex-row">
        <div className="flex-1 text-center">
          <span className="relative inline-block text-3xl font-semibold text-indigo-600 md:text-4xl lg:text-5xl">
            <span className="elementor-headline-dynamic-text elementor-headline-text-active">Next-Gen Operations</span>
            <svg
              className="headline-underline"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <mask id="headline-underline-mask">
                  <rect x="0" y="0" width="500" height="150" fill="#fff" className="underline-mask-rect" />
                </mask>
              </defs>
              <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" mask="url(#headline-underline-mask)" />
            </svg>
          </span>
          <h1 className="mt-10 text-4xl font-semibold text-slate-900 md:text-5xl font-manrope">
            Powering Startups to<br />Peak Performance.
          </h1>
        </div>
        <figure className="flex-1 w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[280px]">
          <img
            src={HERO_IMAGE}
            alt="Growth operations illustration"
            loading="lazy"
            decoding="async"
            width="500"
            height="500"
            className="w-full h-auto"
          />
        </figure>
      </section>
      <h2 className="mt-20 text-3xl font-semibold text-center lg:text-left">Growth Offerings</h2>
      <p className="mt-2 text-gray-600">Services to drive predictable revenue and scaling.</p>
      <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {GROWTH_OFFERINGS.map(offer => (
          <ServiceCard key={offer.title} icon={offer.icon} title={offer.title} desc={offer.desc} />
        ))}
      </div>
    </div>
  )
}