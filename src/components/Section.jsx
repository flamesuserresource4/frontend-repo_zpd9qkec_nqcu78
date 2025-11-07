export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-3xl">{subtitle}</p>
        )}
      </div>
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        {children}
      </div>
    </section>
  );
}
