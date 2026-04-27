import { useState, useEffect, useRef } from 'react'

const courseStats = [
  { label: 'Holes', value: '9' },
  { label: 'Par', value: '36' },
  { label: 'Yardage', value: '2,922' },
  { label: 'Slope', value: '128' },
]

const amenities = [
  {
    title: 'Driving Range',
    body: 'A full driving range to warm up before your round or to grind on the swing on its own — open to the public during course hours.',
    icon: 'flag',
  },
  {
    title: 'Pro Shop & Carts',
    body: 'Riding carts available for rent, plus a small pro shop with the essentials — gloves, balls, tees, and friendly advice on the day.',
    icon: 'clubhouse',
  },
  {
    title: 'Lessons & Practice',
    body: 'Practice space and instruction available for new and returning players. Call the shop to book time with a local pro.',
    icon: 'club',
  },
  {
    title: 'Tournaments & Outings',
    body: 'Manchester’s home for charity scrambles, club championships, and weekend outings. Inquire to reserve the course for your group.',
    icon: 'glass',
  },
]

const courseSegments = [
  {
    number: '1—3',
    name: 'The Opening Three',
    description:
      'A walk-on start that lets you find your rhythm. Tree-lined fairways, generous landing areas, and an early test of the bentgrass on the greens.',
    shape: 'short',
    accent: '#6b9b5e',
  },
  {
    number: '4—6',
    name: 'Through the Hickories',
    description:
      'The middle stretch climbs through the heart of the property — narrower lines, longer carries, and approach shots that demand a committed club.',
    shape: 'dogleg',
    accent: '#3d6a52',
  },
  {
    number: '7—9',
    name: 'The Closing Run',
    description:
      'Big Hickory finishes with three holes that have decided more than a few club championships. Hold your line and the round comes home well.',
    shape: 'straight',
    accent: '#9e7d2e',
  },
]

const teeTimes = [
  { time: '8:00 AM', players: '4 spots', rate: '$18' },
  { time: '9:30 AM', players: '4 spots', rate: '$18' },
  { time: '11:00 AM', players: '3 spots', rate: '$22' },
  { time: '1:00 PM', players: '4 spots', rate: '$22' },
  { time: '3:00 PM', players: '2 spots', rate: '$22' },
  { time: '5:30 PM', players: '4 spots', rate: '$15' },
]

function PineSprig() {
  return (
    <svg className="sprig" viewBox="0 0 28 10" aria-hidden>
      <line x1="0" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="0.6" />
      <line x1="19" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="0.6" />
      <path
        d="M14 1 L14 9 M11 2.6 L14 5 L17 2.6 M10.4 4.4 L14 7 L17.6 4.4 M11 6.2 L14 8.4 L17 6.2"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeroIllustration() {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0f2a1f" />
          <stop offset="0.5" stopColor="#1f3a2e" />
          <stop offset="0.85" stopColor="#3a5a44" />
          <stop offset="1" stopColor="#5e7d56" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fbe7b3" stopOpacity="1" />
          <stop offset="0.25" stopColor="#f4cf7d" stopOpacity="0.7" />
          <stop offset="0.55" stopColor="#c8a24b" stopOpacity="0.25" />
          <stop offset="1" stopColor="#c8a24b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ridge1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#264737" />
          <stop offset="1" stopColor="#1a3326" />
        </linearGradient>
        <linearGradient id="ridge2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#152920" />
          <stop offset="1" stopColor="#0a1a13" />
        </linearGradient>
        <linearGradient id="fairway" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fa66a" stopOpacity="0.85" />
          <stop offset="1" stopColor="#3d6a52" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1440" height="700" fill="url(#sky)" />
      <circle cx="980" cy="240" r="260" fill="url(#sun)" />
      <circle cx="980" cy="240" r="42" fill="#fbe7b3" opacity="0.95" />

      <path
        d="M0,420 C220,380 420,400 640,390 C880,380 1080,420 1280,400 L1440,410 L1440,520 L0,520 Z"
        fill="url(#ridge1)"
        opacity="0.65"
      />
      <path
        d="M0,470 C200,440 380,470 600,450 C820,430 1040,470 1240,450 L1440,460 L1440,560 L0,560 Z"
        fill="url(#ridge1)"
      />

      <path
        d="M620,560 C700,520 820,510 960,520 C1080,528 1180,560 1280,580 L1280,700 L500,700 Z"
        fill="url(#fairway)"
      />

      <g fill="url(#ridge2)">
        <path d="M-20,560 L20,440 L60,560 Z" />
        <path d="M30,560 L80,460 L130,560 Z" />
        <path d="M100,560 L160,420 L220,560 Z" />
        <path d="M180,560 L230,470 L280,560 Z" />
        <path d="M250,560 L310,440 L370,560 Z" />
        <path d="M340,560 L390,470 L440,560 Z" />
        <path d="M410,560 L470,430 L530,560 Z" />
        <path d="M500,560 L550,470 L600,560 Z" />
        <path d="M860,560 L910,470 L960,560 Z" />
        <path d="M940,560 L1000,430 L1060,560 Z" />
        <path d="M1030,560 L1080,470 L1130,560 Z" />
        <path d="M1100,560 L1160,420 L1220,560 Z" />
        <path d="M1190,560 L1240,470 L1290,560 Z" />
        <path d="M1260,560 L1320,440 L1380,560 Z" />
        <path d="M1350,560 L1400,460 L1450,560 Z" />
      </g>

      <g opacity="0.85">
        <line x1="900" y1="600" x2="900" y2="540" stroke="#cbd2c6" strokeWidth="1.5" />
        <path d="M900,540 L922,548 L900,556 Z" fill="#c8a24b" />
        <ellipse cx="900" cy="600" rx="28" ry="6" fill="#9bbf85" opacity="0.8" />
      </g>

      <rect width="1440" height="700" fill="url(#sky)" opacity="0.35" />
    </svg>
  )
}

function HoleMap({ accent = '#6b9b5e', shape = 'dogleg', label }) {
  const paths = {
    dogleg: 'M50,180 Q70,150 95,130 Q145,108 165,60',
    straight: 'M100,180 L100,40',
    short: 'M55,170 Q100,140 150,80',
  }
  const tee = {
    dogleg: { x: 42, y: 176 },
    straight: { x: 92, y: 176 },
    short: { x: 47, y: 166 },
  }[shape]
  const green = {
    dogleg: { cx: 165, cy: 55 },
    straight: { cx: 100, cy: 35 },
    short: { cx: 155, cy: 70 },
  }[shape]
  const bunkers = {
    dogleg: [
      { cx: 130, cy: 130, rx: 22, ry: 9, rot: -15 },
      { cx: 75, cy: 105, rx: 12, ry: 7, rot: 30 },
    ],
    straight: [
      { cx: 130, cy: 80, rx: 14, ry: 8, rot: 10 },
      { cx: 70, cy: 130, rx: 18, ry: 8, rot: -10 },
      { cx: 78, cy: 50, rx: 10, ry: 6, rot: 40 },
    ],
    short: [
      { cx: 100, cy: 130, rx: 28, ry: 12, rot: -20 },
      { cx: 140, cy: 100, rx: 12, ry: 6, rot: 20 },
    ],
  }[shape]
  const id = `holemap-${shape}`
  return (
    <svg className="hole-map" viewBox="0 0 200 200" aria-hidden>
      <defs>
        <radialGradient id={`${id}-green`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={accent} stopOpacity="0.95" />
          <stop offset="1" stopColor={accent} stopOpacity="0.15" />
        </radialGradient>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f3a2e" />
          <stop offset="1" stopColor="#0f2a1f" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill={`url(#${id}-bg)`} />
      <g opacity="0.18" stroke="#9bbf85" strokeWidth="0.4">
        <line x1="0" y1="50" x2="200" y2="50" />
        <line x1="0" y1="100" x2="200" y2="100" />
        <line x1="0" y1="150" x2="200" y2="150" />
        <line x1="50" y1="0" x2="50" y2="200" />
        <line x1="100" y1="0" x2="100" y2="200" />
        <line x1="150" y1="0" x2="150" y2="200" />
      </g>
      {bunkers.map((b, i) => (
        <ellipse
          key={i}
          cx={b.cx}
          cy={b.cy}
          rx={b.rx}
          ry={b.ry}
          fill="#e8dcc0"
          opacity="0.85"
          transform={`rotate(${b.rot} ${b.cx} ${b.cy})`}
        />
      ))}
      <path d={paths[shape]} stroke="#3d6a52" strokeWidth="34" strokeLinecap="round" fill="none" />
      <path d={paths[shape]} stroke="#6b9b5e" strokeWidth="24" strokeLinecap="round" fill="none" opacity="0.95" />
      <path d={paths[shape]} stroke="#9bbf85" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.4" />
      <rect x={tee.x} y={tee.y} width="16" height="6" rx="1.5" fill="#c8a24b" />
      <circle cx={green.cx} cy={green.cy} r="24" fill={`url(#${id}-green)`} />
      <circle cx={green.cx} cy={green.cy} r="13" fill="#9bbf85" />
      <line x1={green.cx} y1={green.cy} x2={green.cx} y2={green.cy - 18} stroke="#f7f3ea" strokeWidth="1" />
      <path
        d={`M${green.cx} ${green.cy - 18} L${green.cx + 9} ${green.cy - 14.5} L${green.cx} ${green.cy - 11} Z`}
        fill="#c8a24b"
      />
      {label && (
        <text x="14" y="26" className="hole-map-label" fill="#f7f3ea" opacity="0.6">
          {label}
        </text>
      )}
    </svg>
  )
}

const Icons = {
  flag: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path d="M9 4 V28" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M9 5 L24 8 L20 12 L24 16 L9 13 Z" fill="currentColor" />
      <circle cx="9" cy="28" r="1.8" fill="currentColor" />
    </svg>
  ),
  clubhouse: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path d="M4 14 L16 5 L28 14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M6.5 14 V26 H25.5 V14" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
      <rect x="13" y="18" width="6" height="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="9" y1="17" x2="11.5" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20.5" y1="17" x2="23" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  club: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path d="M23 4 L9.5 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.5 28.5 a3.5 3.5 0 0 0 5 -2.5 L7 23 a3.5 3.5 0 0 0 -1.5 5.5 Z" fill="currentColor" />
      <circle cx="23" cy="4" r="1.6" fill="currentColor" />
    </svg>
  ),
  glass: (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path d="M9 6 H23 L21 18 a5 5 0 0 1 -10 0 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <line x1="16" y1="22" x2="16" y2="27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="11.5" y1="27" x2="20.5" y2="27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
}

function BrandMark() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3 V21 M12 4 L20 6.5 L17 9.5 L20 12.5 L12 10.5 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" strokeLinejoin="round" />
      <circle cx="12" cy="21" r="1.5" fill="currentColor" />
    </svg>
  )
}

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    el.querySelectorAll('.reveal').forEach(n => io.observe(n))
    return () => io.disconnect()
  }, [])
  return ref
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = ['Course', 'Amenities', 'Tee Times', 'Visit', 'Contact']
  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="brand">
        <span className="brand-mark" aria-hidden><BrandMark /></span>
        <span className="brand-name">
          Big Hickory <em>Golf</em>
        </span>
      </a>
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a href="tel:+16065988053" className="nav-cta" onClick={() => setOpen(false)}>Call (606) 598-8053</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <HeroIllustration />
      <div className="hero-grain" aria-hidden />
      <div className="hero-content">
        <p className="eyebrow"><PineSprig /> Manchester, Kentucky · Est. 1991</p>
        <h1>
          Nine holes in <em>the Kentucky hills.</em>
        </h1>
        <p className="lede">
          A public, well-kept 9 set among the hardwoods just outside downtown Manchester —
          bermuda fairways, bentgrass greens, and a scorecard that still rewards a smart play.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="tel:+16065988053">Call to Reserve</a>
          <a className="btn btn-ghost" href="#course">About the Course</a>
        </div>
        <dl className="hero-stats">
          {courseStats.map(s => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <a className="hero-scroll" href="#course" aria-label="Scroll to course">
        <span /> Scroll
      </a>
    </section>
  )
}

function Course() {
  const ref = useReveal()
  return (
    <section className="section section-course" id="course" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow"><PineSprig /> The Course</p>
        <h2>Built in 1991. <em>Walked ever since.</em></h2>
      </div>
      <div className="course-grid">
        <div className="course-copy reveal">
          <p className="lede-soft">
            Big Hickory plays 2,922 yards from the longest tee for a par of 36 — a 9-hole
            layout with a 128 slope that asks honest questions of every player who picks
            up the card.
          </p>
          <p>
            The course is well-maintained by the city of Manchester and has been home to
            several local and regional champions over the years. It’s public, it’s
            walkable, and it’s the kind of round you’ll want to play twice.
          </p>
          <ul className="course-bullets">
            <li>9 holes · Par 36 · 2,922 yards from the tips</li>
            <li>Bermuda fairways, bentgrass greens</li>
            <li>Slope rating 128 — a fair test from any tee</li>
            <li>Driving range and rental carts on site</li>
          </ul>
        </div>
        <div className="course-card reveal" aria-hidden>
          <div className="course-card-art">
            <HoleMap accent="#6b9b5e" shape="dogleg" label="The Course" />
          </div>
          <div className="card-meta">
            <span className="card-meta-tag">Public Course · Manchester, KY</span>
            <strong>"Big Hickory"</strong>
            <span className="card-meta-detail">9 holes · Par 36 · Slope 128</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CourseSegments() {
  const ref = useReveal()
  return (
    <section className="section section-holes" id="holes" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow"><PineSprig /> On the Course</p>
        <h2>A nine that <em>plays bigger than the card.</em></h2>
        <p className="lede-soft">
          Three short stretches, each with its own personality. Take it in the order it’s
          played — opening, middle, and the run for home.
        </p>
      </div>
      <div className="holes-grid">
        {courseSegments.map(h => (
          <article key={h.number} className="hole-card reveal">
            <div className="hole-art">
              <HoleMap accent={h.accent} shape={h.shape} label={`Holes ${h.number}`} />
            </div>
            <div className="hole-body">
              <div className="hole-number">Holes {h.number}</div>
              <h3>{h.name}</h3>
              <p>{h.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Quote() {
  return (
    <section className="section section-quote">
      <figure className="quote">
        <svg className="quote-mark" viewBox="0 0 60 60" aria-hidden>
          <path d="M14 38 Q14 22 28 16 L26 22 Q18 26 18 36 L26 36 L26 46 L14 46 Z M34 38 Q34 22 48 16 L46 22 Q38 26 38 36 L46 36 L46 46 L34 46 Z" fill="currentColor" />
        </svg>
        <blockquote>
          <p>
            Best little nine in the mountains. The greens roll true, the staff make you
            feel at home, and you can be on the first tee ten minutes after you call.
          </p>
        </blockquote>
        <figcaption>
          <strong>A regular at Big Hickory</strong>
          <span>Manchester, Kentucky</span>
        </figcaption>
      </figure>
    </section>
  )
}

function Amenities() {
  const ref = useReveal()
  return (
    <section className="section section-amenities" id="amenities" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow"><PineSprig /> Amenities</p>
        <h2>Everything you need for <em>a good round.</em></h2>
      </div>
      <div className="amenities-grid">
        {amenities.map(a => (
          <article key={a.title} className="amenity reveal">
            <span className="amenity-icon" aria-hidden>{Icons[a.icon]}</span>
            <h3>{a.title}</h3>
            <p>{a.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function TeeTimes() {
  const [date, setDate] = useState('today')
  const [players, setPlayers] = useState(2)
  const ref = useReveal()

  return (
    <section className="section section-tee" id="tee-times" ref={ref}>
      <div className="section-head reveal">
        <p className="eyebrow"><PineSprig /> Tee Times</p>
        <h2>Book your round.</h2>
        <p className="lede-soft">
          Tee times shown are example openings — call the pro shop to confirm and reserve.
          The course is open daily, 8 AM to 8 PM, weather permitting.
        </p>
      </div>
      <div className="tee-panel reveal">
        <div className="tee-controls">
          <label>
            <span>Date</span>
            <select value={date} onChange={e => setDate(e.target.value)}>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="weekend">This Weekend</option>
              <option value="next-week">Next Week</option>
            </select>
          </label>
          <label>
            <span>Players</span>
            <select value={players} onChange={e => setPlayers(Number(e.target.value))}>
              {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          <div className="tee-summary">
            <span className="tee-summary-label">Available</span>
            <span className="tee-summary-value">{teeTimes.length} times</span>
          </div>
        </div>
        <ul className="tee-list">
          {teeTimes.map(t => (
            <li key={t.time} className="tee-row">
              <span className="tee-time">{t.time}</span>
              <span className="tee-spots">{t.players}</span>
              <span className="tee-rate">{t.rate}<small>/9 holes</small></span>
              <a href="tel:+16065988053" className="btn btn-primary btn-small">Reserve</a>
            </li>
          ))}
        </ul>
        <p className="tee-note">Sample rates shown — call (606) 598-8053 for current pricing, twilight specials, and group rates.</p>
      </div>
    </section>
  )
}

function Visit() {
  const ref = useReveal()
  return (
    <section className="section section-membership" id="visit" ref={ref}>
      <div className="membership-card reveal">
        <svg className="membership-monogram" viewBox="0 0 120 120" aria-hidden>
          <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
          <text x="60" y="72" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="44" fontStyle="italic" fill="currentColor">BH</text>
        </svg>
        <div className="membership-body">
          <p className="eyebrow light"><PineSprig /> Plan Your Visit</p>
          <h2>Bring a foursome — <em>or a friend.</em></h2>
          <p className="lede">
            Big Hickory is open to the public, seven days a week, 8 AM to 8 PM weather
            permitting. Walk-ons are welcome. Tournaments and outings book ahead.
          </p>
        </div>
        <a href="tel:+16065988053" className="btn btn-primary">Call (606) 598-8053</a>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const ref = useReveal()
  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <section className="section section-contact" id="contact" ref={ref}>
      <div className="contact-grid">
        <div className="reveal">
          <p className="eyebrow"><PineSprig /> Contact</p>
          <h2>Find us in <em>the hills.</em></h2>
          <address>
            521 Big Hickory Road<br />
            Manchester, KY 40962<br /><br />
            <a href="tel:+16065988053">(606) 598-8053</a><br />
            <a href="https://www.facebook.com/Bighickorygolf/" target="_blank" rel="noreferrer">Follow us on Facebook</a>
          </address>
          <p className="hours">
            <strong>Open Daily</strong> · 8:00 AM — 8:00 PM<br />
            <strong>Weather</strong> · Closures may occur for conditions
          </p>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="form-success">
              <h3>Thank you.</h3>
              <p>We'll get back to you as soon as we’re off the course.</p>
            </div>
          ) : (
            <>
              <label>
                <span>Name</span>
                <input required type="text" name="name" autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input required type="email" name="email" autoComplete="email" />
              </label>
              <label>
                <span>How can we help?</span>
                <textarea required name="message" rows={4} placeholder="Tee time, outing inquiry, lesson question…" />
              </label>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">
          <span className="brand-mark" aria-hidden><BrandMark /></span>
          © {new Date().getFullYear()} Big Hickory Golf Course · Manchester, KY
        </span>
        <span className="footer-links">
          <a href="#course">Course</a>
          <a href="#amenities">Amenities</a>
          <a href="#tee-times">Tee Times</a>
          <a href="#contact">Contact</a>
        </span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Course />
        <CourseSegments />
        <Quote />
        <Amenities />
        <TeeTimes />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
