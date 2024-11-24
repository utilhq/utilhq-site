import posthog from 'posthog-js'

export function usePostHog() {
  const capture = (eventName: string, properties?: Record<string, any>) => {
    posthog.capture(eventName, properties)
  }

  return {
    capture,
  }
}
