const steps = [
  {
    number: "1",
    title: "Sign Up",
    description:
      "Create your utilhq account in seconds. No credit card required for getting started.",
  },
  {
    number: "2",
    title: "Point Your App",
    description:
      "Update your Interval app's endpoint to utilhq, and you're ready to go. No other changes needed.",
  },
]

export default function GetStarted() {
  return (
    <section id="get-started" className="w-full bg-indigo-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Get Started with utilhq
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Two simple steps to start using utilhq
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="mb-4 inline-block rounded-lg bg-indigo-100 px-3 py-1.5 text-lg font-bold text-indigo-600 sm:px-4 sm:py-2">
                  {step.number}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {step.number !== '2' && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 transform lg:block">
                    <svg
                      className="h-8 w-8 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
