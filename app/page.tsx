const phone = "6291890860";
const whatsappDirect = `https://api.whatsapp.com/send?phone=91${phone}&text=${encodeURIComponent(
  "Hi, I would like to book an appointment at H S Hair Studio & Beauty."
)}`;
const whatsapp = "#whatsapp-booking";
const instagram = "https://www.instagram.com/hshairstudioandbeauty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const facebook = "https://www.facebook.com/p/Hs-Hair-Studio-Beauty-100063928427776/";

const services = [
  { no: "01", title: "Hair Artistry", text: "Precision cuts, blow-dries, styling and personalised looks shaped around you.", tag: "Cut · Style · Finish" },
  { no: "02", title: "Colour Studio", text: "Dimensional colour, global colour, highlights and balayage with a polished finish.", tag: "Colour · Highlights · Balayage" },
  { no: "03", title: "Hair Rituals", text: "Keratin, Botox, smoothening and Nanoplastia treatments for healthier-looking hair.", tag: "Keratin · Botox · Smoothening" },
  { no: "04", title: "Skin & Beauty", text: "Facials, clean-ups, waxing, threading, manicure and pedicure care.", tag: "Facial · Waxing · Nails" },
  { no: "05", title: "Bridal Couture", text: "Elegant bridal and occasion makeup with hair styling designed for your moment.", tag: "Bridal · Party · Occasion" },
  { no: "06", title: "Grooming", text: "Thoughtful grooming and beauty services delivered with premium products and care.", tag: "Care · Detail · Confidence" },
];

const gallery = [
  { src: "/gallery/result-01.png", title: "Dimensional Waves" },
  { src: "/gallery/result-02.png", title: "Soft Layered Bob" },
  { src: "/gallery/result-03.png", title: "Glossy Layers" },
  { src: "/gallery/result-04.png", title: "Signature Curls" },
  { src: "/gallery/result-05.png", title: "Silk Straight Finish" },
  { src: "/gallery/result-06.png", title: "Rich Cherry Gloss" },
  { src: "/gallery/result-07.png", title: "Luminous Waves" },
  { src: "/gallery/result-08.png", title: "Face-Framing Layers" },
  { src: "/gallery/result-09.png", title: "Feathered Finish" },
  { src: "/gallery/result-10.png", title: "Modern Layer Cut" },
  { src: "/gallery/result-11.png", title: "Warm Brunette Layers" },
  { src: "/gallery/result-12.png", title: "Event-Ready Styling" },
  { src: "/gallery/result-13.png", title: "Chocolate Highlights" },
  { src: "/gallery/result-14.png", title: "Golden Balayage" },
  { src: "/gallery/result-15.png", title: "Caramel Dimension" },
  { src: "/gallery/result-16-recovered.jpg", title: "Soft Highlight Blend" },
  { src: "/gallery/result-17.png", title: "Bouncy Blowout" },
  { src: "/gallery/result-18.png", title: "Honey Waves" },
  { src: "/gallery/result-19.png", title: "Cherry Red Waves" },
  { src: "/gallery/result-20.png", title: "Caramel Highlight Finish" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="H S Hair Studio and Beauty home">
          <span className="brand-mark">HS</span>
          <span><b>HAIR STUDIO</b><small>&amp; BEAUTY</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#services">Services</a><a href="#transformations">Results</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={whatsapp}>Book now <span>↓</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content reveal">
          <p className="eyebrow"><span /> Premium salon experience · Serampore</p>
          <h1>Your beauty.<br/><em>Elevated.</em></h1>
          <p className="hero-copy">Luxury hair, beauty and bridal artistry—crafted with expertise, warmth and impeccable attention to detail.</p>
          <div className="hero-actions">
            <a className="button gold" href={whatsapp}>Book your appointment <span>↓</span></a>
            <a className="text-link" href="#services">Explore services <span>↓</span></a>
          </div>
        </div>
        <div className="hero-meta">
          <div><small>VISIT US</small><span>1st Floor, 229B, GT Road, Mahesh</span></div>
          <div><small>CALL US</small><a href={`tel:+91${phone}`}>+91 {phone}</a></div>
          <div className="hero-rating"><strong>5.0</strong><span>★★★★★<small>176+ customer ratings</small></span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-visual">
          <img src="/hs-why-choose-us.png" alt="Why choose H S Hair Studio and Beauty" />
          <div className="floating-card"><span>Rated</span><strong>5.0</strong><small>176+ CUSTOMER RATINGS</small></div>
        </div>
        <div className="about-copy">
          <p className="section-kicker">The H S experience</p>
          <h2>Where expertise meets <em>elegance.</em></h2>
          <p className="lead">H S Hair Studio &amp; Beauty is a premium destination in Serampore for modern hair, beauty and bridal services.</p>
          <p>From the first consultation to the final mirror moment, our focus is simple: understand your style, work with care, and create a result that feels unmistakably you.</p>
          <div className="about-stats">
            <div><strong>176+</strong><span>Customer ratings</span></div>
            <div><strong>37+</strong><span>Beauty services</span></div>
            <div><strong>5.0</strong><span>Rated experience</span></div>
          </div>
          <a className="inline-link" href="#contact">Discover our studio <span>→</span></a>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading row">
          <div><p className="section-kicker">Our premium services</p><h2>Designed for your<br/><em>best look.</em></h2></div>
          <p>Curated treatments, professional techniques and premium products—every service begins with a personal consultation.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.no}>
              <span className="service-no">{service.no}</span>
              <div className="service-icon">✦</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <small>{service.tag}</small>
            </article>
          ))}
        </div>
        <div className="center"><a className="button outline" href={whatsapp}>Ask about a service <span>↓</span></a></div>
      </section>

      <section className="why section" id="why">
        <div className="why-copy">
          <p className="section-kicker">Why choose H S</p>
          <h2>Details make the <em>difference.</em></h2>
          <p>We combine thoughtful consultation, trained hands and a calm premium environment so every visit feels considered from start to finish.</p>
          <div className="why-list">
            <div><span>01</span><p><strong>Personal consultation</strong><small>Looks tailored to your face, hair and occasion.</small></p></div>
            <div><span>02</span><p><strong>Premium care</strong><small>Professional products selected for beautiful results.</small></p></div>
            <div><span>03</span><p><strong>Hygiene first</strong><small>A clean, comfortable and carefully maintained studio.</small></p></div>
            <div><span>04</span><p><strong>Experienced artistry</strong><small>Modern techniques with meticulous attention to detail.</small></p></div>
          </div>
        </div>
        <div className="why-visual"><img src="/hs-details-collage.png" alt="Premium H S Hair Studio interior and facilities" /><div className="quote-card">“Walk in with a vision.<br/><em>Leave with confidence.</em>”</div></div>
      </section>

      <section className="transformations section" id="transformations">
        <div className="section-heading centered">
          <h2>Real style. Remarkable <em>transformations.</em></h2>
          <p>Discover the artistry, dimension and finish behind our signature salon transformations.</p>
        </div>
        <div className="transform-grid">
          <figure className="transform-shot"><img src="/hs-transformation-01.png" alt="Premium reception at H S Hair Studio and Beauty" /></figure>
          <figure className="transform-shot"><img src="/hs-transformation-02.png" alt="Private styling spaces at H S Hair Studio and Beauty" /></figure>
        </div>
      </section>

      <section className="gallery-section section" id="gallery">
        <div className="section-heading row"><div><p className="section-kicker">Inside H S</p><h2>Our world of <em>beauty.</em></h2></div><a className="inline-link" href={instagram} target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a></div>
        <div className="gallery-grid">
          {gallery.map((item, i) => <figure key={item.src} className="gallery-item"><img src={item.src} alt={`${item.title} by H S Hair Studio`} loading="lazy"/><figcaption><span>{String(i + 1).padStart(2, "0")}</span>{item.title}</figcaption></figure>)}
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="review-intro"><p className="section-kicker">Customer love</p><h2>Five-star <em>feelings.</em></h2><div className="big-rating"><strong>5.0</strong><span>★★★★★<small>Based on 176+ customer ratings</small></span></div></div>
        <div className="review-cards">
          <article><span className="quote">“</span><div className="stars">★★★★★</div><p>One of the best luxury salons in Serampore.</p><small>CUSTOMER MENTION · INSTAGRAM</small></article>
          <article><span className="quote">✦</span><div className="stars">★★★★★</div><p>176+ customers have rated the H S experience 5 out of 5.</p><small>VERIFIED CUSTOMER RATING</small></article>
          <article><span className="quote">“</span><div className="stars">★★★★★</div><p>A fresh haircut, a new look and time set aside for yourself.</p><small>CUSTOMER MENTION · SERAMPORE</small></article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-panel">
          <p className="section-kicker">Visit our studio</p>
          <h2>Ready for your <em>next look?</em></h2>
          <p>Book your appointment or walk in for a personal consultation. We look forward to welcoming you.</p>
          <div className="contact-details">
            <div><small>ADDRESS</small><p>1st Floor, 229B, GT Road, Mahesh,<br/>Mahesh Colony, Serampore, Hooghly,<br/>West Bengal 712202</p></div>
            <div><small>CONTACT</small><p><a href={`tel:+91${phone}`}>+91 {phone}</a><br/><a href={whatsapp}>WhatsApp booking options</a></p></div>
            <div><small>FOLLOW US</small><p><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a><br/><a href={facebook} target="_blank" rel="noreferrer">Facebook ↗</a></p></div>
            <div><small>OPENING HOURS</small><p>Open daily<br/>Call for today&apos;s timing</p></div>
          </div>
          <div className="contact-actions"><a className="button gold" href={whatsapp}>Book on WhatsApp <span>↓</span></a><a className="button outline-light" href="https://www.google.com/maps/search/?api=1&query=H+S+Hair+Studio+%26+Beauty+229B+GT+Road+Mahesh+Serampore" target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div>
        </div>
        <div className="map-wrap"><iframe title="Map showing H S Hair Studio and Beauty in Serampore" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=H%20S%20Hair%20Studio%20%26%20Beauty%2C%20229B%20GT%20Road%2C%20Mahesh%2C%20Serampore%2C%20West%20Bengal%20712202&output=embed" /></div>
      </section>

      <section className="whatsapp-booking section" id="whatsapp-booking">
        <div className="whatsapp-copy">
          <p className="section-kicker">Book without leaving the website</p>
          <h2>Scan. Message.<br/><em>You&apos;re ready.</em></h2>
          <p>Scan the QR code with your phone camera to open a ready-to-send WhatsApp appointment message. You can also call us directly.</p>
          <div className="contact-actions"><a className="button gold" href={whatsappDirect} target="_blank" rel="noreferrer">Open WhatsApp <span>↗</span></a><a className="button outline-light" href={`tel:+91${phone}`}>Call +91 {phone}</a></div>
        </div>
        <div className="qr-card"><img src="/whatsapp-qr.png" alt="WhatsApp booking QR code for H S Hair Studio and Beauty"/><strong>+91 {phone}</strong><small>SCAN WITH YOUR PHONE CAMERA</small></div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home"><span className="brand-mark">HS</span><span><b>HAIR STUDIO</b><small>&amp; BEAUTY</small></span></a>
        <p>Luxury hair · Beauty · Bridal artistry<br/><a href={`tel:+91${phone}`}>+91 {phone}</a><br/><small>Serampore, West Bengal</small></p>
        <div><a href="#services">Services</a><a href="#gallery">Gallery</a><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={facebook} target="_blank" rel="noreferrer">Facebook ↗</a></div>
        <small>© 2026 H S Hair Studio &amp; Beauty. All rights reserved.</small>
      </footer>
      <a className="whatsapp-float" href={whatsapp} aria-label="View WhatsApp booking options"><span>WA</span><b>Book now</b></a>
    </main>
  );
}
