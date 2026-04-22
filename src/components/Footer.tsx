export default function Footer() {
  return (
    <footer className="py-12 bg-ink border-t border-accent/8">
      <div className="px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div className="max-w-xs">
            <span className="font-display font-bold text-lg text-pearl">SKILLSCAPER</span>
            <p className="text-pearl/30 text-sm mt-3 leading-relaxed">
              Immersive assessments that reveal true professional performance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            {[
              { heading: 'Product', links: ['How It Works', 'Sectors', 'Methodology', 'Pricing'] },
              { heading: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
              { heading: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Accessibility'] },
            ].map(col => (
              <div key={col.heading}>
                <p className="text-xs tracking-widest uppercase mb-4 text-accent/40">{col.heading}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-pearl/35 hover:text-accent transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-accent/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pearl/20">
          <p>© {new Date().getFullYear()} Skillscaper. All rights reserved.</p>
          <p>Built for enterprise. Designed for humans.</p>
        </div>
      </div>
    </footer>
  )
}
