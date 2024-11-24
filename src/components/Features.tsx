import {
  ServerIcon,
  WrenchIcon,
  ChartBarIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  CircleStackIcon,
  BellAlertIcon,
  ClockIcon,
  DocumentTextIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    title: "Code-First Development",
    description:
      "Build internal tools in your IDE with full version control, CI/CD integration, and the power of your existing development workflow.",
    icon: <CodeBracketIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Seamless Integration",
    description:
      "Import and call your existing functions directly. No need to create new database connections or duplicate business logic.",
    icon: <CircleStackIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Zero Frontend Work",
    description:
      "Focus on your business logic. No need to build UIs or learn new frameworks - we handle the interface automatically.",
    icon: <CommandLineIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Unrestricted Customization",
    description:
      "It's just code - customize anything you want. No abstractions or limitations holding you back.",
    icon: <WrenchIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Event & Schedule Management",
    description:
      "Trigger actions based on events or schedule them to run automatically. Built-in support for cron jobs and webhooks.",
    icon: <ClockIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Comprehensive Logging",
    description:
      "Full audit trails for every action. Track who did what and when, with detailed execution logs.",
    icon: <DocumentTextIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Smart Notifications",
    description:
      "Keep your team informed with customizable notifications via email, Slack, or other channels.",
    icon: <BellAlertIcon className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption, SSO integration, and regular security audits.",
    icon: <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />,
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full bg-white py-24 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose utilhq?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Build internal tools the way developers prefer - with code, not clicks
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
            >
              <div className="mb-4 flex items-center justify-center sm:justify-start">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
