export function Article() {
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-[700px] mt-16 mb-32">
        <h2 className="my-4">Why is Color Contrast important?</h2>
        <h3 className="text-custom-700 dark:text-custom-200">
          Ensure Color Accessibility with Our WCAG 2.1 Contrast Checker
        </h3>
        <p className="my-4">
          Our color contrast checker helps web designers and developers ensure
          that their color combinations meet the{" "}
          <strong>WCAG 2.1 guidelines</strong> for accessibility. Proper
          contrast between text and background, as well as between user
          interface components, is crucial for creating accessible web designs
          that everyone can read, including individuals with visual impairments.
        </p>
        <p className="mb-2">
          Using the official WCAG formula, our tool evaluates whether your
          chosen colors meet the following standards:
        </p>
        <ul className="list-disc pl-4">
          <li>
            <strong>Normal Text:</strong> Requires a contrast ratio of at least
            4.5:1 for WCAG AA and 7:1 for WCAG AAA.
          </li>
          <li>
            <strong>Large Text:</strong> For text that is bold and 14pt or
            regular at 18pt and larger, WCAG AA requires a contrast ratio of 3:1
            and 4.5:1 for AAA.
          </li>
          <li>
            <strong>UI Components:</strong> Interactive elements such as buttons
            or form fields should maintain a contrast ratio of at least 3:1 to
            ensure they are distinguishable from their surroundings.
          </li>
        </ul>
        <p className="my-4">
          By meeting these standards, your site will be more readable,
          user-friendly, and accessible to everyone, including users with color
          blindness or low vision. Whether you're testing color combinations for
          text, background, or UI elements, our contrast checker provides
          instant feedback on whether your design passes WCAG compliance. This
          ensures that your website follows best practices for web accessibility
          and improves overall user experience.
        </p>
        <p>
          Accessible color contrast also positively impacts your SEO, as search
          engines prioritize sites with strong usability and accessibility
          features. Ensuring proper color contrast can reduce bounce rates,
          increase engagement, and ensure compliance with global web standards.
        </p>
      </div>
    </div>
  )
}
