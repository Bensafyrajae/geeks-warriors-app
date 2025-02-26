import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cloud, Shield, Zap, Globe, DollarSign, BarChart, Server, Users, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#F5F5F5]">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-secondary">WhyAWS</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm text-primary">
                    <Shield className="mr-2 h-4 w-4" />
                    Trusted by 1000+ companies worldwide
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter text-secondary sm:text-6xl xl:text-7xl/none">
                    Cloud Solutions That Scale With You
                  </h1>
                  <p className="max-w-[600px] text-secondary text-lg md:text-xl">
                    Transform your business with AWS. Get unmatched reliability, security, and performance with the
                    world's most comprehensive cloud platform.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-12 items-center justify-center rounded-full border-2 border-secondary bg-white px-8 text-base font-medium text-secondary shadow-sm transition-all hover:bg-secondary hover:text-white focus-visible:outline-none"
                  >
                    Learn More
                  </Link>
                </div>
                <div className="flex items-center space-x-4 text-secondary">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-secondary" />
                    ))}
                  </div>
                  <div className="text-sm">
                    Join <span className="font-semibold">10,000+</span> developers & companies
                  </div>
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-20 blur-3xl" />
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Cloud Dashboard"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm text-primary">
                  <Zap className="mr-2 h-4 w-4" />
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl">Why Choose AWS?</h2>
                <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AWS offers a comprehensive set of services and solutions to help organizations move faster, lower IT
                  costs, and scale.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Server,
                  title: "Global Infrastructure",
                  description: "Deploy across AWS's global infrastructure for low-latency access worldwide.",
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Benefit from comprehensive security capabilities and compliance certifications.",
                },
                {
                  icon: Zap,
                  title: "High Performance",
                  description: "Access fast, flexible computing resources designed for any workload.",
                },
                {
                  icon: DollarSign,
                  title: "Cost-Effective",
                  description: "Pay only for what you use with no upfront costs or commitments.",
                },
                {
                  icon: BarChart,
                  title: "Scalability",
                  description: "Scale applications up or down based on demand automatically.",
                },
                {
                  icon: Globe,
                  title: "Innovation",
                  description: "Access latest technologies like AI, ML, IoT, and serverless computing.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{feature.title}</h3>
                    <p className="text-secondary/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32 bg-[#F5F5F5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm text-primary">
                  <Users className="mr-2 h-4 w-4" />
                  Customer Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl">
                  Trusted by Businesses Worldwide
                </h2>
                <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers are saying about their experience with AWS.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "AWS has transformed our business. We've reduced infrastructure costs by 40% while improving performance.",
                  author: "Sarah Johnson",
                  role: "CTO, TechCorp",
                },
                {
                  quote:
                    "The scalability of AWS allowed us to handle a 300% increase in traffic during our product launch.",
                  author: "Michael Chen",
                  role: "Founder, StartupX",
                },
                {
                  quote:
                    "AWS's global infrastructure has enabled us to expand into new markets quickly and efficiently.",
                  author: "Emily Rodriguez",
                  role: "VP of Engineering, GlobalCo",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-secondary/80">{testimonial.quote}</p>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-secondary/10 p-1">
                        <Users className="h-8 w-8 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary">{testimonial.author}</p>
                        <p className="text-xs text-secondary/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-26%20%C3%A0%2017.10.47_218ca49f.jpg-tCUswCLTHYD70nomTvBI3dPtuTVaay.jpeg')] opacity-10 blur-3xl" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Start Your AWS Journey Today
                </h2>
                <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed">
                  Join thousands of businesses that trust AWS for their cloud infrastructure needs.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-base font-medium text-white shadow-sm transition-all hover:bg-white hover:text-secondary focus-visible:outline-none"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-white">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm text-primary">
                <Cloud className="mr-2 h-4 w-4" />
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-secondary md:text-4xl/tight">
                Ready to transform your business with AWS?
              </h2>
              <p className="max-w-[600px] text-secondary/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our cloud experts are here to help you find the right AWS solutions for your business needs.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-lg">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none text-secondary">
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" className="border-secondary/20" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none text-secondary">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" className="border-secondary/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none text-secondary">
                    Email
                  </label>
                  <Input id="email" placeholder="Enter your email" type="email" className="border-secondary/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium leading-none text-secondary">
                    Company
                  </label>
                  <Input id="company" placeholder="Enter your company name" className="border-secondary/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-secondary/20 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    placeholder="Tell us about your project and needs"
                  />
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Submit</Button>
              <p className="text-xs text-secondary/70 text-center">
                By submitting this form, you agree to our{" "}
                <Link href="#" className="text-primary hover:underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-secondary text-white">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="flex items-center gap-2">
              <Cloud className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">WhyAWS</span>
            </div>
            <p className="text-sm text-white/80">
              Helping businesses leverage the power of Amazon Web Services to transform their operations and drive
              growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:flex-1">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-primary">Products</h4>
              <ul className="space-y-2 text-sm">
                {["EC2", "S3", "Lambda", "RDS"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-primary">Resources</h4>
              <ul className="space-y-2 text-sm">
                {["Documentation", "Blog", "Case Studies", "Webinars"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-primary">Company</h4>
              <ul className="space-y-2 text-sm">
                {["About", "Careers", "Contact", "Privacy"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/80 hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 md:flex-row">
            <p className="text-xs text-white/60">© {new Date().getFullYear()} WhyAWS. All rights reserved.</p>
            <div className="flex gap-4">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <Link key={item} href="#" className="text-xs text-white/60 hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

