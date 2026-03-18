import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Globe,
  HeadphonesIcon,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Palette,
  Phone,
  Search,
  Shield,
  Smartphone,
  Star,
  Target,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "./hooks/useQueries";

// ── Scroll animation hook ──
function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── NAVBAR ──
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#industries", label: "Industries" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-warm border-b border-border"
          : "bg-white/98 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2.5"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm font-jakarta">
                TT
              </span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-warm-brown text-base block leading-none font-playfair">
                TickleTime
              </span>
              <span className="text-brand-orange text-[10px] font-semibold uppercase tracking-widest font-jakarta">
                Business Growth
              </span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-warm-brown-mid hover:text-brand-orange transition-colors"
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden xl:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors shadow-sm"
            data-ocid="nav.primary_button"
          >
            Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            className="xl:hidden p-2 rounded-md text-warm-brown"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-white border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm font-medium text-warm-brown hover:text-brand-orange"
              onClick={() => setOpen(false)}
              data-ocid="nav.link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 block text-center px-5 py-2.5 rounded-lg bg-brand-orange text-white font-semibold text-sm"
            data-ocid="nav.primary_button"
          >
            Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}

// ── SECTION 1: HERO ──
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.98 0.018 82) 0%, oklch(1 0 0) 55%, oklch(0.97 0.015 78) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-24 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "oklch(0.65 0.185 50)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "oklch(0.75 0.1 75)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium mb-6"
              style={{
                background: "oklch(0.96 0.025 75)",
                borderColor: "oklch(0.88 0.04 65)",
                color: "oklch(0.55 0.1 55)",
              }}
            >
              <Star
                className="w-4 h-4 text-brand-orange fill-current"
                style={{ color: "oklch(0.65 0.185 50)" }}
              />
              <span>50+ Businesses Served Across India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-tight mb-6 text-warm-brown font-playfair">
              We Help Local{" "}
              <span className="text-brand-orange italic">Businesses</span>
              <br />
              Get More Customers
            </h1>

            <p className="text-base text-warm-brown-mid mb-10 max-w-lg leading-relaxed font-jakarta">
              Through Websites, Google Visibility &amp; Social Media Marketing.
              Professional. Affordable. Fast delivery in 3–5 days.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-orange text-white font-semibold hover:bg-brand-orange-light transition-colors shadow-warm"
                data-ocid="hero.primary_button"
              >
                Explore Services
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/919657527561?text=${encodeURIComponent("Hi! I'd like to book a call with TickleTime Business Growth.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-brand-orange text-brand-orange font-semibold hover:bg-orange-50 transition-colors"
                data-ocid="hero.secondary_button"
              >
                <MessageCircle className="w-5 h-5" />
                Book a Call
              </a>
            </div>

            <div className="flex flex-wrap gap-10">
              {[
                { num: "50+", label: "Clients Served" },
                { num: "3-5", label: "Days Delivery" },
                { num: "100%", label: "Mobile Friendly" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold text-brand-orange font-jakarta">
                    {s.num}
                  </div>
                  <div className="text-sm text-warm-brown-mid">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div
              className="absolute -inset-4 rounded-3xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.92 0.04 65), oklch(0.97 0.015 80))",
              }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/hero-team.dim_1400x700.jpg"
                alt="TickleTime Business Growth team"
                className="w-full h-[460px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.22 0.04 55 / 0.2), transparent)",
                }}
              />
            </div>
            {/* Float badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-card flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-warm-brown text-sm font-jakarta">
                  Passionate Team
                </div>
                <div className="text-muted-foreground text-xs">
                  Ready to Grow Your Business
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 2: ABOUT US ──
function AboutSection() {
  const ref = useScrollFade();
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      desc: "We genuinely care about every local business we work with.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      desc: "Every project is designed to generate real leads and customers.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed",
      desc: "We deliver your website in 3–5 days, not weeks.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparency",
      desc: "No hidden charges. Honest pricing and clear communication always.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.95 0.025 78), oklch(0.99 0.008 85))",
              }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/assets/generated/about-team.dim_900x600.jpg"
                alt="TickleTime team"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 shadow-card border border-border">
              <div className="text-3xl font-extrabold text-brand-orange font-jakarta">
                2019
              </div>
              <div className="text-sm text-warm-brown-mid">
                Founded with purpose
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={ref} className="section-fade-in">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-jakarta">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-warm-brown mt-2 mb-5 font-playfair">
              Founded with a Passion for Local Businesses
            </h2>
            <p className="text-warm-brown-mid leading-relaxed mb-4">
              TickleTime Business Growth was founded with one mission: to help
              local Indian businesses thrive in the digital age. We saw
              hardworking shopkeepers, salon owners, and restaurant founders
              struggling to get online — and decided to bridge that gap.
            </p>
            <p className="text-warm-brown-mid leading-relaxed mb-8">
              Our mission is simple — deliver professional, affordable, and fast
              digital solutions that create real results. From your first
              website to your Google profile, we've got you covered.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="p-4 rounded-xl border border-border hover:shadow-warm transition-shadow"
                  style={{ background: "oklch(0.99 0.008 80)" }}
                  data-ocid={`about.item.${i + 1}`}
                >
                  <div className="text-brand-orange mb-2">{v.icon}</div>
                  <h4 className="font-bold text-warm-brown text-sm mb-1 font-jakarta">
                    {v.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3: SERVICES ──
const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Website Development",
    subtitle: "Lead Generating Websites",
    image: "/assets/generated/service-web-dev.dim_700x480.jpg",
    features: [
      "Business website design (4–8 pages)",
      "WhatsApp chat integration",
      "Contact enquiry form & photo gallery",
      "Domain connection support",
      "Fast delivery in 3–5 days",
      "Lead-focused mobile-friendly layout",
    ],
    popular: false,
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Google Visibility Setup",
    subtitle: "Local Discovery",
    image: "/assets/generated/service-google.dim_700x480.jpg",
    features: [
      "Google Business Profile creation",
      "Category & keyword optimization",
      "Professional business description",
      "Photos upload guidance",
      "Map listing accuracy support",
      "Website submission for indexing",
    ],
    popular: false,
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Social Media Creatives",
    subtitle: "Marketing Posters & Design",
    image: "/assets/generated/service-social-media.dim_700x480.jpg",
    features: [
      "Promotional & offer posters",
      "Festival & campaign creatives",
      "Branding consistency designs",
      "Reel cover graphics",
      "Caption suggestions included",
    ],
    popular: false,
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Website Maintenance",
    subtitle: "Ongoing Support",
    image: "/assets/generated/service-maintenance.dim_700x480.jpg",
    features: [
      "Content & image updates",
      "Minor layout improvements",
      "Performance monitoring",
      "Technical support included",
    ],
    popular: false,
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Digital Starter Package",
    subtitle: "Complete Online Presence Bundle",
    image: "/assets/generated/service-package.dim_700x480.jpg",
    features: [
      "Professional website (4–8 pages)",
      "Google visibility complete setup",
      "10 social media creatives",
      "1 month website support",
      "WhatsApp integration included",
    ],
    popular: true,
  },
];

function ServicesSection() {
  const ref = useScrollFade();
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="section-fade-in text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-jakarta">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-brown mt-2 font-playfair">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto font-jakarta">
            Everything your business needs to dominate online — from websites to
            Google to social media.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  svc,
  index,
}: { svc: (typeof services)[0]; index: number }) {
  const ref = useScrollFade();
  return (
    <div
      ref={ref}
      className={`section-fade-in bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col ${
        svc.popular ? "ring-2 ring-brand-orange" : ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-ocid={`services.item.${index + 1}`}
    >
      {svc.popular && (
        <div className="bg-brand-orange text-white text-center text-xs font-bold py-1.5 uppercase tracking-widest font-jakarta">
          ⭐ Most Popular
        </div>
      )}
      <div className="relative h-44 overflow-hidden">
        <img
          src={svc.image}
          alt={svc.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.22 0.04 55 / 0.5), transparent)",
          }}
        />
        <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-brand-orange text-white">
          {svc.icon}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-warm-brown text-lg font-playfair">
          {svc.title}
        </h3>
        <p className="text-brand-orange text-xs font-semibold mb-3 font-jakarta">
          {svc.subtitle}
        </p>
        <ul className="space-y-1.5 flex-1">
          {svc.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-1 text-brand-orange font-semibold text-sm hover:gap-2 transition-all font-jakarta"
          data-ocid={`services.item.${index + 1}`}
        >
          Get Started <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// ── SECTION 4: PRICING ──
const pricingPlans = [
  {
    name: "Basic Website",
    price: "₹4,999",
    label: "One-time payment",
    popular: false,
    features: [
      "4-page professional website",
      "WhatsApp integration",
      "Mobile-friendly design",
      "Enquiry contact form",
      "Domain connection support",
      "Fast 3–5 day delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth Package",
    price: "₹9,999",
    label: "One-time payment",
    popular: false,
    features: [
      "6-page professional website",
      "Google Business Profile setup",
      "5 social media creatives",
      "WhatsApp & enquiry form",
      "Mobile-friendly design",
      "Priority delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "Starter Bundle",
    price: "₹11,999",
    label: "One-time payment",
    popular: true,
    features: [
      "8-page professional website",
      "Google Business Profile setup",
      "10 social media creatives",
      "1 month website support",
      "WhatsApp & enquiry form",
      "Priority 3-day delivery",
    ],
    cta: "Best Value — Start Now",
  },
];

function PricingSection() {
  const ref = useScrollFade();
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="section-fade-in text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-jakarta">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-brown mt-2 font-playfair">
            Simple, Affordable Packages
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto font-jakarta">
            No hidden charges. One-time payment. Choose the package that fits
            your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  index,
}: { plan: (typeof pricingPlans)[0]; index: number }) {
  const ref = useScrollFade();
  return (
    <div
      ref={ref}
      className={`section-fade-in relative rounded-2xl p-8 flex flex-col ${
        plan.popular
          ? "bg-warm-brown text-white ring-2 ring-brand-orange shadow-card-hover"
          : "bg-white border border-border shadow-card"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      data-ocid={`pricing.item.${index + 1}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-widest font-jakarta shadow-warm">
          🔥 Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3
          className={`font-bold text-xl mb-1 font-playfair ${plan.popular ? "text-white" : "text-warm-brown"}`}
        >
          {plan.name}
        </h3>
        <p
          className={`text-xs font-semibold uppercase tracking-wide font-jakarta ${
            plan.popular ? "text-orange-200" : "text-brand-orange"
          }`}
        >
          {plan.label}
        </p>
        <div
          className={`text-4xl font-extrabold mt-4 font-jakarta ${
            plan.popular ? "text-brand-orange" : "text-warm-brown"
          }`}
        >
          {plan.price}
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <CheckCircle2
              className={`w-4 h-4 shrink-0 mt-0.5 ${
                plan.popular ? "text-brand-orange" : "text-brand-orange"
              }`}
            />
            <span
              className={
                plan.popular ? "text-white/85" : "text-muted-foreground"
              }
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors font-jakarta ${
          plan.popular
            ? "bg-brand-orange text-white hover:bg-brand-orange-light"
            : "bg-cream border border-brand-orange text-brand-orange hover:bg-orange-50"
        }`}
        data-ocid={`pricing.item.${index + 1}`}
      >
        {plan.cta}
      </a>
    </div>
  );
}

// ── SECTION 5: INDUSTRIES ──
const industries = [
  { emoji: "🍽️", name: "Restaurants & Cafes" },
  { emoji: "💆", name: "Beauty Salons & Spas" },
  { emoji: "🏥", name: "Medical Clinics & Doctors" },
  { emoji: "💪", name: "Gyms & Fitness Centers" },
  { emoji: "👗", name: "Retail & Clothing Stores" },
  { emoji: "🏠", name: "Real Estate Agents" },
  { emoji: "📚", name: "Coaching & Tuition Centers" },
  { emoji: "🍱", name: "Catering Services" },
  { emoji: "📸", name: "Photography Studios" },
  { emoji: "🎉", name: "Event Planners" },
  { emoji: "🛋️", name: "Interior Designers" },
  { emoji: "⚖️", name: "CA & Legal Firms" },
  { emoji: "🔧", name: "Auto Garages" },
  { emoji: "✈️", name: "Travel Agencies" },
  { emoji: "💍", name: "Jewellery Shops" },
  { emoji: "🎂", name: "Bakeries & Sweet Shops" },
];

function IndustriesSection() {
  const titleRef = useScrollFade();
  return (
    <section id="industries" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="section-fade-in text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-jakarta">
            Who We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-brown mt-2 font-playfair">
            We Build Websites For All These Businesses
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto font-jakarta">
            No matter what business you run, we have the expertise to grow your
            online presence.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
          <img
            src="/assets/generated/portfolio-showcase.dim_1100x600.jpg"
            alt="Diverse Indian businesses showcase"
            className="w-full h-64 sm:h-80 object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <IndustryTile key={ind.name} ind={ind} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryTile({
  ind,
  index,
}: { ind: (typeof industries)[0]; index: number }) {
  const ref = useScrollFade();
  return (
    <div
      ref={ref}
      className="section-fade-in bg-white border border-border rounded-xl p-4 text-center cursor-default hover:shadow-warm hover:border-brand-orange transition-all duration-200"
      style={{ transitionDelay: `${(index % 8) * 55}ms` }}
      data-ocid={`industries.item.${index + 1}`}
    >
      <div className="text-3xl mb-2">{ind.emoji}</div>
      <div className="text-sm font-semibold text-warm-brown leading-tight font-jakarta">
        {ind.name}
      </div>
    </div>
  );
}

// ── SECTION 6: WHY CHOOSE US ──
const stats = [
  { icon: <Users className="w-8 h-8" />, num: "50+", label: "Clients Served" },
  { icon: <Clock className="w-8 h-8" />, num: "3-5", label: "Days Delivery" },
  {
    icon: <Smartphone className="w-8 h-8" />,
    num: "100%",
    label: "Mobile-Friendly",
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    num: "24/7",
    label: "WhatsApp Support",
  },
];

const reasons = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Turnaround",
    desc: "We deliver your professional website in just 3–5 business days — no long waits, no delays.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Local Business Experts",
    desc: "We understand Indian local businesses and what it takes to get customers in your city.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Affordable Packages",
    desc: "Get world-class digital presence without breaking the bank. Packages for every budget.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "End-to-End Support",
    desc: "From website to Google setup to social media — we handle everything so you can focus on your business.",
  },
];

function WhyChooseUs() {
  const ref = useScrollFade();
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="section-fade-in text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-jakarta">
            Our Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-brown mt-2 font-playfair">
            Why Choose TickleTime?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto font-jakarta">
            We combine speed, expertise, and affordability to deliver real
            results for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} index={i} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} r={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ s, index }: { s: (typeof stats)[0]; index: number }) {
  const ref = useScrollFade();
  return (
    <div
      ref={ref}
      className="section-fade-in text-center p-6 rounded-2xl border border-border hover:shadow-warm transition-shadow"
      style={{
        background: "oklch(0.99 0.01 80)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="text-brand-orange flex justify-center mb-3">{s.icon}</div>
      <div className="text-4xl font-extrabold text-brand-orange font-jakarta">
        {s.num}
      </div>
      <div className="text-warm-brown-mid text-sm mt-1 font-jakarta">
        {s.label}
      </div>
    </div>
  );
}

function ReasonCard({ r, index }: { r: (typeof reasons)[0]; index: number }) {
  const ref = useScrollFade();
  return (
    <div
      ref={ref}
      className="section-fade-in p-6 rounded-2xl border border-border hover:shadow-warm hover:border-brand-orange transition-all"
      style={{
        background: "oklch(0.99 0.01 80)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="text-brand-orange mb-3">{r.icon}</div>
      <div className="w-8 h-1 bg-brand-orange rounded-full mb-3" />
      <h3 className="font-bold text-warm-brown mb-2 font-playfair">
        {r.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-jakarta">
        {r.desc}
      </p>
    </div>
  );
}

// ── SECTION 8: CONTACT ──
const businessTypes = [
  "Restaurant/Cafe",
  "Beauty Salon/Spa",
  "Medical Clinic",
  "Gym/Fitness Center",
  "Retail Store",
  "Real Estate",
  "Coaching/Tuition Center",
  "Photography Studio",
  "Event Planning",
  "Interior Design",
  "CA/Legal Firm",
  "Auto Garage",
  "Travel Agency",
  "Bakery/Sweet Shop",
  "Other",
];

function ContactSection() {
  const ref = useScrollFade();
  const { mutate, isPending, isSuccess } = useSubmitContact();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.businessType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Build WhatsApp message with form data
    const lines = [
      "Hi TickleTime! I'd like to enquire about your services.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
    ];
    if (form.email) lines.push(`Email: ${form.email}`);
    lines.push(`Business Type: ${form.businessType}`);
    if (form.message) lines.push(`Message: ${form.message}`);

    const whatsappMessage = lines.join("\n");
    const whatsappUrl = `https://wa.me/919657527561?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp immediately after validation
    window.open(whatsappUrl, "_blank");

    // Also store in backend
    mutate(form, {
      onSuccess: () => {
        toast.success("Enquiry sent via WhatsApp! We'll respond shortly.");
        setForm({
          name: "",
          phone: "",
          email: "",
          businessType: "",
          message: "",
        });
      },
      onError: () => toast.error("Something went wrong. Please try again."),
    });
  }

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="section-fade-in text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest font-jakarta">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-warm-brown mt-2 font-playfair">
            Ready to Grow Your Business?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto font-jakarta">
            Fill in your details and we'll connect with you on WhatsApp
            instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="font-bold text-warm-brown text-xl mb-2 font-playfair">
              Send via WhatsApp
            </h3>
            <p className="text-sm text-muted-foreground mb-6 font-jakarta">
              Fill in your details and we'll open WhatsApp with your enquiry
              pre-filled.
            </p>
            {isSuccess ? (
              <div
                className="flex flex-col items-center justify-center py-12 text-center"
                data-ocid="contact.success_state"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-xl font-bold text-warm-brown mb-2 font-playfair">
                  Enquiry Sent!
                </h4>
                <p className="text-muted-foreground font-jakarta">
                  Your message was sent to WhatsApp. We'll respond within a few
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="contact.modal"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-warm-brown mb-1 font-jakarta"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="contact-name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Your name"
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-warm-brown mb-1 font-jakarta"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="contact-phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="+91 XXXXX XXXXX"
                      required
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-warm-brown mb-1 font-jakarta"
                  >
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-business"
                    className="block text-sm font-medium text-warm-brown mb-1 font-jakarta"
                  >
                    Business Type *
                  </label>
                  <Select
                    value={form.businessType}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, businessType: v }))
                    }
                  >
                    <SelectTrigger
                      id="contact-business"
                      data-ocid="contact.select"
                    >
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((bt) => (
                        <SelectItem key={bt} value={bt}>
                          {bt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-warm-brown mb-1 font-jakarta"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us about your business and what you're looking for..."
                    rows={4}
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl font-jakarta flex items-center justify-center gap-2"
                  data-ocid="contact.submit_button"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isPending ? "Sending..." : "Send via WhatsApp"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: "oklch(0.22 0.04 55)" }}
            >
              <h3 className="font-bold text-xl mb-6 font-playfair">
                Contact Details
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm font-jakarta">
                      Phone
                    </div>
                    <a
                      href="tel:+919657527561"
                      className="text-white font-semibold hover:text-brand-orange transition-colors font-jakarta"
                    >
                      +91 96575 27561
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm font-jakarta">
                      Email
                    </div>
                    <a
                      href="mailto:mamta.rangi@tickletime.in"
                      className="text-white font-semibold hover:text-brand-orange transition-colors break-all font-jakarta"
                    >
                      mamta.rangi@tickletime.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm font-jakarta">
                      Location
                    </div>
                    <div className="text-white font-semibold font-jakarta">
                      India
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/919657527561?text=${encodeURIComponent("Hi! I'm interested in your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-colors font-jakarta"
                data-ocid="contact.primary_button"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Quick-reach card */}
            <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-brand-orange">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((k) => (
                  <Star
                    key={k}
                    className="w-4 h-4 fill-current"
                    style={{ color: "oklch(0.65 0.185 50)" }}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic leading-relaxed font-jakarta">
                &ldquo;TickleTime built our restaurant website in just 4 days.
                We started getting online orders within the first week! Highly
                recommend.&rdquo;
              </p>
              <div className="mt-3 font-semibold text-warm-brown text-sm font-jakarta">
                — Priya Sharma, Spice Garden Restaurant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ──
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ background: "oklch(0.18 0.035 55)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center">
                <span className="text-white font-bold text-sm font-jakarta">
                  TT
                </span>
              </div>
              <div>
                <span className="font-bold text-white text-base block leading-none font-playfair">
                  TickleTime
                </span>
                <span className="text-brand-orange text-[10px] font-semibold uppercase tracking-widest font-jakarta">
                  Business Growth
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-jakarta">
              We help local businesses get more customers through websites,
              Google visibility &amp; social media marketing.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm font-jakarta">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ["#home", "Home"],
                ["#about", "About"],
                ["#services", "Services"],
                ["#pricing", "Pricing"],
                ["#industries", "Industries"],
                ["#why-us", "Why Us"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-brand-orange transition-colors text-sm font-jakarta"
                    data-ocid="nav.link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm font-jakarta">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href="tel:+919657527561"
                  className="hover:text-brand-orange transition-colors font-jakarta"
                >
                  +91 96575 27561
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <a
                  href="mailto:mamta.rangi@tickletime.in"
                  className="hover:text-brand-orange transition-colors break-all font-jakarta"
                >
                  mamta.rangi@tickletime.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="font-jakarta">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-sm">
          <span className="font-jakarta">
            © {year} TickleTime Business Growth. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

// ── FLOATING WHATSAPP ──
function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/919657527561?text=${encodeURIComponent("Hi TickleTime! I'd like to know more about your services.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
      aria-label="Chat on WhatsApp"
      data-ocid="contact.primary_button"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-white"
        role="img"
        aria-label="WhatsApp"
      >
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.85L0 24l6.335-1.51A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.37l-.36-.214-3.728.978.994-3.632-.234-.373A9.772 9.772 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    </a>
  );
}

// ── APP ──
export default function App() {
  return (
    <div className="font-jakarta min-h-screen">
      <Toaster richColors />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <IndustriesSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
