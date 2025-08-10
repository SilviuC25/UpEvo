export type BlogPost = {
  id: string
  slug: string
  title: string
  content: {
    preview?: string
    image?: string
    body?: string
  }
  published: boolean
  createdAt: string
  updatedAt: string
}

const nowIso = new Date().toISOString()

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'tech-trends-2025',
    title: 'Tech Trends That Will Define 2025',
    content: {
      preview:
        'Explore the groundbreaking technologies shaping the future — from ubiquitous AI to edge-first compute and human-centric interfaces.',
      image: '/images/about-preview/1.jpg',
      body: `
<h2>What to expect in 2025 🚀</h2>
<p>
  2025 won't be "one single technology" moment — it's a tapestry. Expect tighter integration of <strong>AI</strong> into products,
  more adoption of <em>edge compute</em>, and a stronger emphasis on privacy-preserving tech.
</p>

<h3>1. AI Everywhere (but smarter)</h3>
<ul>
  <li>On-device models for personalization without leaking your data.</li>
  <li>AI assistants that help users complete tasks (not just chat).</li>
  <li>Augmented creativity tools — from code assistants to design co-pilots.</li>
</ul>

<h3>2. Edge & Real-Time Experiences</h3>
<p>
  Moving compute closer to the user means faster UX: lower latency, offline-first capabilities, and interactive realtime features
  that previously felt impossible on mobile.
</p>

<blockquote>“Speed is the new accessibility.” — a guiding thought for 2025</blockquote>

<h3>3. Human-Centric Design</h3>
<p>
  Interfaces will become more conversational, more adaptive, and frankly, less noisy. Designers will focus on <strong>context</strong>:
  what the user needs right now, not what the app has to offer globally.
</p>

<h3>Practical tips for founders & builders</h3>
<ol>
  <li>Ship small AI features first — prove value to users before building big models.</li>
  <li>Design with offline resilience and fast reconnection in mind.</li>
  <li>Measure real-world performance (Time to Interactive, CPU usage on mobile).</li>
</ol>

<p>
  <strong>Quick tech stack suggestions:</strong> Next.js (Edge), Rust/Go microservices for heavy lifting, lightweight on-device models (tiny ML), and a
  headless CMS for content agility.
</p>

<p>— <em>Short, practical view to guide your roadmap in 2025 ✨</em></p>
      `,
    },
    published: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },

  {
    id: '2',
    slug: 'design-magic-uiux',
    title: 'The Magic of Great UI/UX Design',
    content: {
      preview:
        "Design can make or break your product. Practical rules and examples to craft interfaces users love.",
      image: '/images/about-preview/2.jpg',
      body: `
<h2>Why design matters — beyond prettiness 🎨</h2>
<p>
  Great UI/UX is not decoration. It is the interface between intention and action. Users form an opinion about your product in <strong>milliseconds</strong>.
  Good design reduces friction, increases trust, and converts curiosity into action.
</p>

<h3>Core principles I follow</h3>
<ul>
  <li><strong>Clarity over cleverness:</strong> show what matters, hide what doesn't.</li>
  <li><strong>Consistency:</strong> the same patterns behave the same way across the product.</li>
  <li><strong>Progressive disclosure:</strong> reveal advanced features only when the user is ready.</li>
</ul>

<h3>Small patterns, big wins</h3>
<p>
  Some examples of simple UI moves that materially improve user experience:
</p>
<ul>
  <li><strong>Status-driven buttons:</strong> disable and show reason instead of hiding functionality.</li>
  <li><strong>Microcopy:</strong> concise helper text prevents confusion (e.g., “Your password must include 8 characters”).</li>
  <li><strong>Skeletons instead of spinners:</strong> make load feel faster by showing structure early.</li>
</ul>

<h3>Design & brand — why they must align</h3>
<p>
  A logo is not the brand. Brand is the feeling users get from interactions. I create visual systems (color, tone, spacing, illustration style)
  that scale across landing pages, dashboards, and marketing assets.
</p>

<h3>Case study (short)</h3>
<p>
  On a recent portfolio project I redesigned the onboarding flow: simplified steps from 7 → 3, added contextual inline validation,
  and improved completion rate by 28% in A/B tests. The changes were small, targeted, and measurable.
</p>

<p><em>Design is an experiment — ship fast, measure, iterate.</em> ✨</p>
      `,
    },
    published: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },

  {
    id: '3',
    slug: 'performance-nextjs',
    title: 'Boosting Performance in Next.js Apps',
    content: {
      preview:
        'Speed matters. Practical checklist to make your Next.js apps feel instant and behave reliably.',
      image: '/images/about-preview/3.jpg',
      body: `
<h2>Performance checklist for Next.js ⚡</h2>
<p>
  Performance is not only a metric — it's a product feature. Faster pages increase retention, SEO, and conversion.
</p>

<h3>1. Prioritize what matters</h3>
<p>
  Use <strong>Largest Contentful Paint (LCP)</strong>, <strong>Cumulative Layout Shift (CLS)</strong>, and <strong>Time to Interactive (TTI)</strong> as your core signals.
  Measure them in the wild (Real User Monitoring) not just in synthetic tests.
</p>

<h3>2. Images & media</h3>
<ul>
  <li>Use optimized formats (AVIF/WebP) and responsive sizes.</li>
  <li>Preload hero images when needed; lazy-load below-the-fold images.</li>
  <li>Prefer CSS-driven aspect-ratio boxes to avoid layout shifts.</li>
</ul>

<h3>3. Code-splitting & SSR vs. Edge</h3>
<p>
  Server-side rendering works great for initial load; move non-critical JS to client bundles and leverage Next.js dynamic imports:
</p>

<pre><code>const HeavyChart = dynamic(() => import('@/components/HeavyChart'), { ssr: false })</code></pre>

<h3>4. Caching & CDNs</h3>
<p>
  Use CDN edge caching for static assets and configure <code>Cache-Control</code> headers for API responses. For dynamic pages, use incremental static regeneration or edge caches
  to cut down origin hits.
</p>

<h3>5. Third-party scripts</h3>
<p>
  Each script is a risk. Audit them, lazy-load when possible, or replace heavy analytics with lightweight alternatives.
</p>

<h3>Quick wins</h3>
<ul>
  <li>Remove unused dependencies.</li>
  <li>Compress responses (gzip/brotli).</li>
  <li>Audit bundle size (webpack/bundle-analyzer).</li>
</ul>

<p>
  <strong>Short</strong>: measure real users, prioritize LCP/CLS/TTI, optimize images, and reduce JS. Repeat.
</p>
      `,
    },
    published: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },

  {
    id: '4',
    slug: 'future-ai',
    title: 'AI: The Friend or the Foe?',
    content: {
      preview:
        'Artificial Intelligence is everywhere, but what does it mean for product teams and society at large?',
      image: '/images/about-preview/4.jpg',
      body: `
<h2>AI in everyday products — a pragmatic lens 🤖</h2>
<p>
  AI isn't magic; it's glue that automates patterns. But adopting AI requires careful product thinking:
  what's the user value, and how do you measure it?
</p>

<h3>Where AI helps most</h3>
<ul>
  <li>Personalization: recommending relevant content or actions.</li>
  <li>Automation: removing repetitive tasks with safe fallbacks.</li>
  <li>Augmentation: improving human creativity (e.g., assistive writing).</li>
</ul>

<h3>Risk & responsibility</h3>
<p>
  With great models comes great responsibility. Consider fairness, privacy, and explainability — and keep a human-in-the-loop
  for high-stakes decisions.
</p>

<h3>Product checklist before adding AI</h3>
<ol>
  <li>Define the success metric — how will you know the model helps?</li>
  <li>Start with narrow scope — a single feature, well measured.</li>
  <li>Roll out canaries and monitor in real-time for regressions.</li>
</ol>

<h3>Example: smart search</h3>
<p>
  Smart search that understands intent (synonyms, context) can increase conversion by surfacing the right product or help page faster.
</p>

<p><em>AI is a tool — wield it responsibly, and measure everything.</em></p>
      `,
    },
    published: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },

  {
    id: '5',
    slug: 'minimalism-coding',
    title: 'Coding with Minimalism in Mind',
    content: {
      preview:
        "Less is more. Practical advice to keep your codebases clean, maintainable and joyfully simple.",
      image: '/images/about-preview/1.jpg',
      body: `
<h2>Minimalism in code — not a fad, a discipline ✂️</h2>
<p>
  Minimalism is about removing unnecessary complexity: fewer moving parts, clearer APIs, and code that reads like documentation.
</p>

<h3>Rules I follow</h3>
<ul>
  <li><strong>One responsibility per module</strong> — small functions, clear names.</li>
  <li><strong>Prefer composition over inheritance</strong> — compose small pieces.</li>
  <li><strong>Document intent, not mechanics</strong> — why over how.</li>
</ul>

<h3>Refactor checklist</h3>
<ul>
  <li>Is this code duplicated? DRY it.</li>
  <li>Can this function be smaller? split it.</li>
  <li>Can we simplify the API surface?</li>
</ul>

<h3>Small example</h3>
<pre><code>// before
function process(data) {
  // do many things
}

// after
function parse(data) { ... }
function validate(parsed) { ... }
function save(validated) { ... }
</code></pre>

<p>
  Minimalism doesn't mean less power; it means <strong>clearer</strong> power. The maintenance cost drops and velocity improves.
</p>
      `,
    },
    published: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },

  {
    id: '6',
    slug: 'darkmode-ux',
    title: 'Why Dark Mode Is More Than a Trend',
    content: {
      preview:
        "Dark mode is useful, accessible, and sometimes essential — here's how to implement it right.",
      image: '/images/about-preview/2.jpg',
      body: `
<h2>Dark mode: more than aesthetics 🌙</h2>
<p>
  Dark UI is not simply inverting colors. It requires careful color decisions, contrast rules, and consideration for ambient lighting.
</p>

<h3>Design considerations</h3>
<ul>
  <li>Prefer semantic tokens (primary, surface, text) instead of raw hex colors.</li>
  <li>Avoid pure black backgrounds on large surfaces — they cause visual fatigue.</li>
  <li>Test on multiple devices and in different lighting conditions.</li>
</ul>

<h3>Implementation tips</h3>
<ol>
  <li>Use CSS variables for theme tokens.</li>
  <li>Respect the user preference: <code>prefers-color-scheme</code>.</li>
  <li>Test readability for small text and code blocks.</li>
</ol>

<p>
  Dark mode is an accessibility and comfort feature — do it right and your users will appreciate it.
</p>
      `,
    },
    published: true,
    createdAt: nowIso,
    updatedAt: nowIso,
  },
]

export default blogPosts
