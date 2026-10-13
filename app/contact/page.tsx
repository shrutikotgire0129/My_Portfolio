import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contacts = [
  {
    label: "Email",
    value: "shrutihiramankotgire5@gmail.com",
    href: "mailto:shrutihiramankotgire5@gmail.com",
    external: false,
  },
  {
    label: "Phone",
    value: "+91-7499174465",
    href: "tel:+917499174465",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shrutikotgire129",
    href: "https://www.linkedin.com/in/shrutikotgire129/",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/shrutikotgire0129",
    href: "https://github.com/shrutikotgire0129",
    external: true,
  },
  {
    label: "X",
    value: "x.com/ShrutiKotgire5",
    href: "https://x.com/ShrutiKotgire5",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="about-page contact-page">
        <div className="about-container">
          <p>GET IN TOUCH</p>

          <h1 className="about-title">
            Let&apos;s connect<span>.</span>
          </h1>

          <p className="about-description">
            I&apos;m open to software engineering opportunities, collaborations,
            and conversations about building meaningful products. Feel free to
            reach out through any of the channels below.
          </p>

          <div className="contact-availability">
            <span className="availability-dot" />
            Open to software engineering opportunities
          </div>

          <div className="contact-list">
            {contacts.map((contact) => (
              <div className="contact-row" key={contact.label}>
                <span className="contact-label">{contact.label}</span>

                <a
                  className="contact-value"
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                >
                  <span>{contact.value}</span>
                  <span className="contact-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
