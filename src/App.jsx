import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { ExecutiveOverview, MissingMustHaves, DemoWorkflow } from "./components/ContentBlocks";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-rose-50 dark:from-indigo-950 dark:via-fuchsia-950 dark:to-rose-950" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            MOWAERS MVP 1.0 — Website Readiness Plan
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            A concise, actionable blueprint to finalize a reviewer‑friendly demo for an IoT‑enabled multi‑organ wearable and emergency response system with Patient, Caretaker, and Doctor roles.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#overview" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500">Read Overview</a>
            <a href="#mvp" className="px-4 py-2 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800">Fill MVP Gaps</a>
            <a href="#demo" className="px-4 py-2 rounded-md bg-rose-600 text-white text-sm font-medium hover:bg-rose-500">Run the Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main>
        <Hero />

        <Section id="overview" title="Executive Overview" subtitle="What reviewers can expect and do in the MVP demo.">
          <ExecutiveOverview />
        </Section>

        <Section id="mvp" title="Missing Must‑Haves for MVP" subtitle="Concrete, testable items to make the site demo‑ready.">
          <MissingMustHaves />
        </Section>

        <Section id="demo" title="Demo Workflow & Acceptance Criteria" subtitle="A guided script with clear outcomes and reset instructions.">
          <DemoWorkflow />
        </Section>

        <Section id="structure" title="Website Structure & Navigation" subtitle="How users move across pages for each role.">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold mb-2">Sitemap</h3>
              <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                <li>Landing → Login → Dashboards (Patient, Caretaker, Doctor)</li>
                <li>Alerts, History, Settings, Help/Docs, Privacy, Terms</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold mb-2">Navigation</h3>
              <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                <li>Top nav quick links + role‑aware sidebar in dashboards</li>
                <li>Primary CTAs on landing for each role + demo login</li>
                <li>Mobile: bottom bar with Home, Alerts, History, Settings</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="content" title="Visual, Content, and Accessibility" subtitle="Guidance for consistent, inclusive presentation.">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold mb-2">Visual & Brand</h3>
              <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                <li>Use indigo/fuchsia/rose gradient for accents and CTAs</li>
                <li>Cards: soft borders, subtle shadows, rounded corners</li>
                <li>Alerts: green/amber/red with clear labels and icons</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold mb-2">Accessibility</h3>
              <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                <li>Keyboard focus states and ARIA labels</li>
                <li>Readable contrast, motion‑reduced transitions</li>
                <li>Meaningful error messages with next steps</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="security" title="Security, Privacy, and Consent" subtitle="User‑facing safeguards for trust and clarity.">
          <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
            <li>Consent capture with version and timestamp on first login</li>
            <li>Privacy highlights: what we collect, why, retention window</li>
            <li>Delivery confirmations for alerts/SOS with timestamps</li>
            <li>Non‑diagnostic disclaimer near chatbot and vitals cards</li>
          </ul>
        </Section>

        <Section id="deliverables" title="Deliverables" subtitle="Hand‑off items for reviewers and submission.">
          <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
            <li>Final sitemap and content outline</li>
            <li>UX copy deck (headings, labels, tooltips, states)</li>
            <li>Demo script + acceptance checklist + reset steps</li>
            <li>Reviewer one‑pager and screenshot set</li>
            <li>Known‑issues list with workarounds</li>
          </ul>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
