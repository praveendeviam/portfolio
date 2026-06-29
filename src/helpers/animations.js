/**
 * Shared Framer Motion scroll-triggered animation preset.
 * Fades in and slides up when the element enters the viewport.
 */
export const flyIn = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

/**
 * Hero entrance animation (uses animate instead of whileInView).
 */
export const heroFly = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})
