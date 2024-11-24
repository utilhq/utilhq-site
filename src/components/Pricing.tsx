'use client'

import Link from 'next/link'
import { usePostHog } from '@/hooks/usePostHog'

const plans = [
  {
    name: 'Pro',
    price: 199,
    highlighted: true,
    description: 'Everything you need to build powerful internal tools.',
    features: [
      'Up to 100 users',
      'Unlimited API calls',
      'Custom domain',
      'Obsessive support',
      'Audit logs',
      'Usage analytics',
    ],
  },
  {
    name: 'Enterprise',
    price: null,
    highlighted: false,
    description: 'Advanced security, control, and support.',
    features: [
      'Everything in Pro',
      'Unlimited users',
      'SSO/SAML',
      'Enterprise SLA',
      'Dedicated support',
      'Custom contracts',
      'HIPAA compliance',
      'SOC 2 compliance',
    ],
  },
]

export default function Pricing() {
  const { capture } = usePostHog()

  const handlePlanClick = (planName: string, action: string) => {
    capture('pricing_plan_clicked', {
      plan: planName,
      action,
    })
  }

  return (
    <section id="pricing" className="w-full bg-gray-50 py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl space-y-8 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl ${
                plan.highlighted
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-200 bg-white shadow-sm'
              } p-4 sm:p-8`}
            >
              <h3 className={`mb-4 text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <div className="mb-6">
                <div className="mt-4 flex items-baseline">
                  {plan.price ? (
                    <>
                      <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>${plan.price}</span>
                      <span className={`ml-2 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>/month</span>
                    </>
                  ) : (
                    <span className={`text-2xl font-semibold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>Custom pricing</span>
                  )}
                </div>
              </div>
              <p className={`mb-8 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{plan.description}</p>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className={`mr-3 h-5 w-5 ${plan.highlighted ? 'text-white' : 'text-gray-600'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={`ml-3 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.price ? (
                <Link
                  href="https://github.com/utilhq/utilhq"
                  onClick={() => handlePlanClick(plan.name, 'get_started')}
                  className={`mt-8 block rounded-md ${
                    plan.highlighted
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500'
                  } px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm`}
                >
                  Get started
                </Link>
              ) : (
                <Link
                  href="mailto:sales@utilhq.com"
                  onClick={() => handlePlanClick(plan.name, 'contact_sales')}
                  className="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
                >
                  Contact Sales
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
