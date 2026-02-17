/**
 * Smooth scroll utility for anchor navigation
 * Handles smooth scrolling to sections with offset for fixed navbar
 */
export function smoothScrollTo(elementId: string, offset = 80) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
