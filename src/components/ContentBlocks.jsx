import { AlertTriangle, CheckCircle2, FileText, Globe, Route, Stethoscope, Users } from "lucide-react";

export function ExecutiveOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <h3 className="font-semibold mb-2">What the MVP delivers</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          A reviewer-friendly web demo for an IoT-enabled multi‑organ wearable and emergency response system with three roles: Patient, Caretaker, and Doctor. Includes mock auth, simulated real‑time vitals, role‑based alerts, SOS flow, PHB baselines, chatbot stub, and premium UI.
        </p>
      </div>
      <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <h3 className="font-semibold mb-2">What reviewers can do</h3>
        <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
          <li>Login as each role and navigate tailored dashboards</li>
          <li>Watch live vitals refresh (~10s) and trigger SOS / alert simulations</li>
          <li>Review PHB baselines, history, and simple report exports</li>
          <li>Follow a guided 4‑minute script with resettable demo data</li>
        </ul>
      </div>
    </div>
  );
}

export function MissingMustHaves() {
  const items = [
    {
      icon: Globe,
      title: "Information architecture",
      bullets: [
        "Add Help/Docs, Privacy, Terms pages with footer links",
        "Dedicated Alerts and History pages linked from dashboards",
        "Settings area for profile, consent, notification prefs",
      ],
    },
    {
      icon: Users,
      title: "Role-specific UX gaps",
      bullets: [
        "Patient: clearer PHB trend vs. today, SOS confirmation",
        "Caretaker: acknowledge + notes on each alert, last-known location",
        "Doctor: cohort filters, patient detail, export report button",
      ],
    },
    {
      icon: FileText,
      title: "Content gaps",
      bullets: [
        "Microcopy for tooltips, empty/error states, accessibility hints",
        "Consistent labels, plain-English explanations for vitals",
        "Chatbot + model limitation disclaimer language",
      ],
    },
    {
      icon: Stethoscope,
      title: "Compliance & policy",
      bullets: [
        "Consent capture banner + versioned consent record",
        "Privacy/HIPAA highlights, retention notice, BAA statement",
        "Audit trail visibility (view recent events per role)",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Observability & reliability",
      bullets: [
        "Status banner for data pipeline health and last update time",
        "Alert delivery confirmations with timestamps",
        "Uptime notice and fallback messaging during issues",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Demo essentials",
      bullets: [
        "Sample users/roles, guided walkthrough script",
        "Reset demo data + simulate alert/SOS controls",
        "One‑pager PDF and screenshot set for reviewers",
      ],
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((i) => (
        <div key={i.title} className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-2 mb-2">
            <i.icon className="text-indigo-600" size={18} />
            <h3 className="font-semibold">{i.title}</h3>
          </div>
          <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
            {i.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function DemoWorkflow() {
  return (
    <div className="space-y-4">
      <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <h3 className="font-semibold mb-2">4‑minute demo script (per role)</h3>
        <ol className="list-decimal pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
          <li>Login with provided sample account for the role.</li>
          <li>Observe live vitals card updating and PHB baseline badge.</li>
          <li>Trigger an alert or SOS and view confirmations + timestamps.</li>
          <li>Open History to see the logged event and export a simple report.</li>
        </ol>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h3 className="font-semibold mb-2">Acceptance criteria</h3>
          <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
            <li>Vitals refresh visibly within ~10 seconds without page reload</li>
            <li>Alert/SOS shows delivery confirmation and appears in History</li>
            <li>Each role sees tailored navigation and content</li>
            <li>Accessibility: keyboard focus, ARIA labels, color contrast</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <h3 className="font-semibold mb-2">Reset & simulation</h3>
          <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
            <li>Reset demo data to default baseline in Settings</li>
            <li>Simulate alert/SOS from the Alerts page</li>
            <li>Provide screenshots and one‑pager for offline review</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
