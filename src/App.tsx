import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Menu, Calendar, Waves, MapPin, Mail, ArrowRight, Sprout, TreePine, Fish, Bird, Shell } from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const seasonIntroRef = useRef<HTMLDivElement>(null);
  const drySeasonRef = useRef<HTMLDivElement>(null);
  const rainySeasonRef = useRef<HTMLDivElement>(null);
  const secondaryDryRef = useRef<HTMLDivElement>(null);
  const marineRef = useRef<HTMLDivElement>(null);
  const birdsRef = useRef<HTMLDivElement>(null);
  const mammalsRef = useRef<HTMLDivElement>(null);
  const reptilesRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Hero entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ delay: 0.3 });
      
      heroTl.fromTo('.hero-bg', 
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
      )
      .fromTo('.hero-title span',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.04, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo('.hero-subtitle',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo('.hero-cta',
        { y: 16, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo('.nav-item',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.05 },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set('.hero-title, .hero-subtitle, .hero-cta', { opacity: 1, x: 0 });
            gsap.set('.hero-bg', { scale: 1, y: 0 });
          }
        }
      });

      heroScrollTl
        .fromTo('.hero-title', 
          { x: 0, opacity: 1 },
          { x: '-22vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-subtitle',
          { x: 0, opacity: 1 },
          { x: '-14vw', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo('.hero-cta',
          { x: 0, opacity: 1 },
          { x: '-14vw', opacity: 0, ease: 'power2.in' },
          0.74
        )
        .fromTo('.hero-bg',
          { scale: 1, y: 0 },
          { scale: 1.06, y: '-6vh', ease: 'none' },
          0.7
        );

      // Season Intro Section
      const seasonIntroTl = gsap.timeline({
        scrollTrigger: {
          trigger: seasonIntroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      seasonIntroTl
        .fromTo('.season-intro-bg',
          { scale: 1.10, y: '8vh', opacity: 0.6 },
          { scale: 1, y: 0, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.season-intro-title',
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo('.season-intro-body',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.10
        )
        .fromTo('.season-intro-caption',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.14
        )
        .to('.season-intro-title, .season-intro-body',
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.70
        )
        .to('.season-intro-caption',
          { x: '10vw', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .to('.season-intro-bg',
          { scale: 1.05, x: '6vw', ease: 'none' },
          0.70
        );

      // Dry Season Section
      const drySeasonTl = gsap.timeline({
        scrollTrigger: {
          trigger: drySeasonRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      drySeasonTl
        .fromTo('.dry-image',
          { x: '-60vw', scale: 1.08, opacity: 0.7 },
          { x: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.dry-panel',
          { x: '45vw' },
          { x: 0, ease: 'power2.out' },
          0
        )
        .fromTo('.dry-label',
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.08
        )
        .fromTo('.dry-title',
          { x: '18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.06
        )
        .fromTo('.dry-body',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.12
        )
        .fromTo('.dry-card',
          { y: 24, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.16
        )
        .to('.dry-panel-content',
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.70
        )
        .to('.dry-image',
          { x: '-18vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
          0.70
        );

      // Rainy Season Section
      const rainySeasonTl = gsap.timeline({
        scrollTrigger: {
          trigger: rainySeasonRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      rainySeasonTl
        .fromTo('.rainy-image',
          { x: '-60vw', scale: 1.08, opacity: 0.7 },
          { x: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.rainy-panel',
          { x: '45vw' },
          { x: 0, ease: 'power2.out' },
          0
        )
        .fromTo('.rainy-label',
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.08
        )
        .fromTo('.rainy-title',
          { x: '18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.06
        )
        .fromTo('.rainy-body',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.12
        )
        .fromTo('.rainy-card',
          { y: 24, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.16
        )
        .to('.rainy-panel-content',
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.70
        )
        .to('.rainy-image',
          { x: '-18vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
          0.70
        );

      // Secondary Dry Season Section
      const secondaryDryTl = gsap.timeline({
        scrollTrigger: {
          trigger: secondaryDryRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      secondaryDryTl
        .fromTo('.secondary-image',
          { x: '-60vw', scale: 1.08, opacity: 0.7 },
          { x: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.secondary-panel',
          { x: '45vw' },
          { x: 0, ease: 'power2.out' },
          0
        )
        .fromTo('.secondary-label',
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.08
        )
        .fromTo('.secondary-title',
          { x: '18vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.06
        )
        .fromTo('.secondary-body',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.12
        )
        .fromTo('.secondary-card',
          { y: 24, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.16
        )
        .to('.secondary-panel-content',
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.70
        )
        .to('.secondary-image',
          { x: '-18vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
          0.70
        );

      // Marine Section
      const marineTl = gsap.timeline({
        scrollTrigger: {
          trigger: marineRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.6,
        }
      });

      marineTl
        .fromTo('.marine-bg',
          { scale: 1.08, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.marine-title',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.05
        )
        .fromTo('.marine-body',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.10
        )
        .fromTo('.marine-thumb-1',
          { y: '18vh', scale: 0.92, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0.12
        )
        .fromTo('.marine-thumb-2',
          { y: '18vh', scale: 0.92, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0.16
        )
        .fromTo('.marine-thumb-3',
          { y: '18vh', scale: 0.92, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0.20
        )
        .fromTo('.marine-caption',
          { x: '10vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.18
        )
        .to('.marine-thumbs',
          { y: '18vh', opacity: 0, ease: 'power2.in' },
          0.70
        )
        .to('.marine-text',
          { y: '-10vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .to('.marine-bg',
          { scale: 1.05, opacity: 0, ease: 'none' },
          0.70
        );

      // Birds Section
      const birdsTl = gsap.timeline({
        scrollTrigger: {
          trigger: birdsRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      birdsTl
        .fromTo('.birds-image',
          { x: '-60vw', scale: 1.08, opacity: 0.7 },
          { x: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.birds-panel',
          { x: '45vw' },
          { x: 0, ease: 'power2.out' },
          0
        )
        .fromTo('.birds-title',
          { x: '12vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.06
        )
        .fromTo('.birds-intro',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.10
        )
        .fromTo('.birds-list-item',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
          0.14
        )
        .fromTo('.birds-caption',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.20
        )
        .to('.birds-panel-content',
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.70
        )
        .to('.birds-image',
          { x: '-18vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
          0.70
        );

      // Mammals Section
      const mammalsTl = gsap.timeline({
        scrollTrigger: {
          trigger: mammalsRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      mammalsTl
        .fromTo('.mammals-image',
          { x: '-60vw', scale: 1.08, opacity: 0.7 },
          { x: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.mammals-panel',
          { x: '45vw' },
          { x: 0, ease: 'power2.out' },
          0
        )
        .fromTo('.mammals-title',
          { x: '12vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.06
        )
        .fromTo('.mammals-intro',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.10
        )
        .fromTo('.mammals-list-item',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
          0.14
        )
        .fromTo('.mammals-caption',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.20
        )
        .to('.mammals-panel-content',
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.70
        )
        .to('.mammals-image',
          { x: '-18vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
          0.70
        );

      // Reptiles Section
      const reptilesTl = gsap.timeline({
        scrollTrigger: {
          trigger: reptilesRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      reptilesTl
        .fromTo('.reptiles-image',
          { x: '-60vw', scale: 1.08, opacity: 0.7 },
          { x: 0, scale: 1, opacity: 1, ease: 'power2.out' },
          0
        )
        .fromTo('.reptiles-panel',
          { x: '45vw' },
          { x: 0, ease: 'power2.out' },
          0
        )
        .fromTo('.reptiles-title',
          { x: '12vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.06
        )
        .fromTo('.reptiles-intro',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.10
        )
        .fromTo('.reptiles-list-item',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' },
          0.14
        )
        .fromTo('.reptiles-caption',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.20
        )
        .to('.reptiles-panel-content',
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.70
        )
        .to('.reptiles-image',
          { x: '-18vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
          0.70
        );

      // Plan Section (flowing)
      gsap.fromTo('.plan-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: planRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.plan-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.plan-cards',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.plan-form',
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.plan-form',
            start: 'top 80%',
          }
        }
      );

      // Global snap
      const pinned = ScrollTrigger.getAll().filter(st => st.vars.pin).sort((a, b) => a.start - b.start);
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (maxScroll && pinned.length > 0) {
        const pinnedRanges = pinned.map(st => ({
          start: st.start / maxScroll,
          end: (st.end ?? st.start) / maxScroll,
          center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
        }));

        ScrollTrigger.create({
          snap: {
            snapTo: (value: number) => {
              const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
              if (!inPinned) return value;
              
              const target = pinnedRanges.reduce((closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
                pinnedRanges[0]?.center ?? 0
              );
              return target;
            },
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: 'power2.out',
          }
        });
      }

    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Navigation visibility
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 100) {
          navRef.current.classList.add('bg-warm-white/95', 'backdrop-blur-sm', 'shadow-sm');
        } else {
          navRef.current.classList.remove('bg-warm-white/95', 'backdrop-blur-sm', 'shadow-sm');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={mainRef} className="relative bg-warm-white">
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="flex items-center justify-between px-[4vw] py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-gold" />
            <span className="font-display text-lg text-deep-teal">BOCAS GUIDE</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection(drySeasonRef)} className="nav-item font-body text-xs font-semibold tracking-widest uppercase text-deep-teal hover:text-gold transition-colors">
              Calendar
            </button>
            <button onClick={() => scrollToSection(marineRef)} className="nav-item font-body text-xs font-semibold tracking-widest uppercase text-deep-teal hover:text-gold transition-colors">
              Marine
            </button>
            <button onClick={() => scrollToSection(birdsRef)} className="nav-item font-body text-xs font-semibold tracking-widest uppercase text-deep-teal hover:text-gold transition-colors">
              Birds
            </button>
            <button onClick={() => scrollToSection(mammalsRef)} className="nav-item font-body text-xs font-semibold tracking-widest uppercase text-deep-teal hover:text-gold transition-colors">
              Mammals
            </button>
            <button onClick={() => scrollToSection(reptilesRef)} className="nav-item font-body text-xs font-semibold tracking-widest uppercase text-deep-teal hover:text-gold transition-colors">
              Reptiles
            </button>
            <button onClick={() => scrollToSection(planRef)} className="nav-item font-body text-xs font-semibold tracking-widest uppercase text-deep-teal hover:text-gold transition-colors">
              Plan
            </button>
          </div>
          <button className="lg:hidden nav-item">
            <Menu className="w-6 h-6 text-deep-teal" />
          </button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="section-pinned z-10">
        <div className="hero-bg absolute inset-0 will-change-transform">
          <img 
            src="/images/hero_island_aerial.jpg" 
            alt="Bocas del Toro aerial view" 
            className="w-full h-full object-cover image-nature-grade"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A3A]/40 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-[7vw]">
          <h1 className="hero-title font-display text-[clamp(2.5rem,7vw,6rem)] text-warm-white leading-[0.95] max-w-[65vw] mb-6 uppercase tracking-tight">
            <span className="inline-block">The</span>{' '}
            <span className="inline-block">Complete</span>{' '}
            <span className="inline-block">Wildlife</span>{' '}
            <span className="inline-block">Guide</span>{' '}
            <span className="inline-block">to</span>{' '}
            <span className="inline-block">Bocas</span>{' '}
            <span className="inline-block">del</span>{' '}
            <span className="inline-block">Toro</span>
          </h1>
          <p className="hero-subtitle font-body text-[clamp(1rem,1.5vw,1.25rem)] text-warm-white/85 max-w-[38vw] leading-relaxed mb-8">
            A seasonal encyclopedia of Panama's Caribbean archipelago—marine life, birds, mammals, reptiles, and forests.
          </p>
          <button 
            onClick={() => scrollToSection(drySeasonRef)}
            className="hero-cta btn-gold w-fit rounded-sm"
          >
            Explore the Calendar
          </button>
        </div>

        <div className="absolute bottom-[5vh] right-[4vw] z-10 flex items-center gap-2 text-warm-white/70">
          <span className="font-body text-xs font-semibold tracking-widest uppercase">Scroll to begin</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </section>

      {/* Section 2: Season Intro */}
      <section ref={seasonIntroRef} className="section-pinned z-20">
        <div className="season-intro-bg absolute inset-0 will-change-transform">
          <img 
            src="/images/beach_palms_wide.jpg" 
            alt="Tropical beach with palms" 
            className="w-full h-full object-cover image-nature-grade"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3A3A]/30 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-[7vw]">
          <h2 className="season-intro-title font-display text-[clamp(2.5rem,6vw,5rem)] text-warm-white leading-[0.95] max-w-[50vw] mb-6 uppercase">
            Wildlife moves with the seasons.
          </h2>
          <p className="season-intro-body font-body text-[clamp(1rem,1.3vw,1.15rem)] text-warm-white/90 max-w-[36vw] leading-relaxed">
            Bocas del Toro has two dry seasons and a rainy season. Each window brings different species, behaviors, and landscapes—this guide helps you choose when to visit.
          </p>
        </div>

        <div className="season-intro-caption absolute bottom-[6vh] right-[4vw] z-10 max-w-[28vw] text-right">
          <p className="font-body text-warm-white/80 text-sm font-medium leading-relaxed">
            Dry season mornings often bring calm seas and clear visibility—ideal for snorkeling and reef work.
          </p>
        </div>
      </section>

      {/* Section 3: Dry Season */}
      <section ref={drySeasonRef} className="section-pinned z-30">
        <div className="dry-image absolute left-0 top-0 w-[55vw] h-full will-change-transform">
          <img 
            src="/images/dry_season_boat.jpg" 
            alt="Dry season boat" 
            className="w-full h-full object-cover image-nature-grade"
          />
        </div>
        
        <div className="dry-panel absolute right-0 top-0 w-[45vw] h-full bg-warm-white" />
        
        <div className="dry-panel-content absolute right-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[5vw]">
          <span className="dry-label label-season mb-4">Primary Dry Season</span>
          <h2 className="dry-title font-display text-[clamp(2.5rem,4.5vw,4rem)] text-deep-teal leading-[0.95] mb-6 uppercase">
            December – April
          </h2>
          <p className="dry-body font-body text-base text-sage leading-relaxed mb-6 max-w-[30vw]">
            The classic dry season: sunny days, calm waters, and excellent visibility. It's the best time for boat access to remote reefs and offshore encounters.
          </p>
          
          <div className="dry-card card-highlight max-w-[32vw] mb-4">
            <h4 className="label-season mb-4">What to expect</h4>
            <ul className="space-y-2 text-deep-teal text-sm font-body">
              <li className="flex items-start gap-2">
                <Fish className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Clear snorkeling/diving (20+ m visibility)</span>
              </li>
              <li className="flex items-start gap-2">
                <Fish className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Humpback whales (Northern Atlantic) Dec–Feb</span>
              </li>
              <li className="flex items-start gap-2">
                <Bird className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Peak birdwatching with migrants mixing with residents</span>
              </li>
              <li className="flex items-start gap-2">
                <Sprout className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Cacao harvest season begins</span>
              </li>
              <li className="flex items-start gap-2">
                <TreePine className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Banana/plantain peak export season</span>
              </li>
            </ul>
          </div>

          {/* Agriculture Highlight */}
          <div className="agri-card bg-gradient-to-r from-[#D4A03A]/10 to-transparent p-4 max-w-[32vw] border-l-2 border-gold">
            <div className="flex items-center gap-2 mb-2">
              <Sprout className="w-5 h-5 text-gold" />
              <span className="font-display text-sm text-deep-teal uppercase tracking-wide">Agriculture Highlight</span>
            </div>
            <p className="font-body text-sage text-xs leading-relaxed">
              <strong className="text-deep-teal">Cacao & Banana:</strong> Main harvest season for traditional cacao farms. Bocas produces 20+ million kg of plantain annually through the Coobana cooperative.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Rainy Season */}
      <section ref={rainySeasonRef} className="section-pinned z-40">
        <div className="rainy-image absolute left-0 top-0 w-[55vw] h-full will-change-transform">
          <img 
            src="/images/rainy_season_forest.jpg" 
            alt="Rainy season forest" 
            className="w-full h-full object-cover image-nature-grade"
          />
        </div>
        
        <div className="rainy-panel absolute right-0 top-0 w-[45vw] h-full bg-warm-white" />
        
        <div className="rainy-panel-content absolute right-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[5vw]">
          <span className="rainy-label label-season mb-4">Rainy Season</span>
          <h2 className="rainy-title font-display text-[clamp(2.5rem,4.5vw,4rem)] text-deep-teal leading-[0.95] mb-6 uppercase">
            May – August
          </h2>
          <p className="rainy-body font-body text-base text-sage leading-relaxed mb-6 max-w-[30vw]">
            Afternoon rains bring the forest to life. Frogs breed in explosive numbers, turtles begin nesting, and the canopy is at its greenest.
          </p>
          
          <div className="rainy-card card-highlight max-w-[32vw] mb-4">
            <h4 className="label-season mb-4">What to expect</h4>
            <ul className="space-y-2 text-deep-teal text-sm font-body">
              <li className="flex items-start gap-2">
                <Shell className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Leatherback nesting peaks (Apr–Jun)</span>
              </li>
              <li className="flex items-start gap-2">
                <Sprout className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Explosive frog breeding in ponds and streams</span>
              </li>
              <li className="flex items-start gap-2">
                <TreePine className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Lush trails and fewer visitors</span>
              </li>
              <li className="flex items-start gap-2">
                <Sprout className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Cacao fermentation and drying begins</span>
              </li>
              <li className="flex items-start gap-2">
                <Fish className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Plankton blooms attract manta rays</span>
              </li>
            </ul>
          </div>

          {/* Agriculture Highlight */}
          <div className="agri-card bg-gradient-to-r from-[#D4A03A]/10 to-transparent p-4 max-w-[32vw] border-l-2 border-gold">
            <div className="flex items-center gap-2 mb-2">
              <TreePine className="w-5 h-5 text-gold" />
              <span className="font-display text-sm text-deep-teal uppercase tracking-wide">Agriculture Highlight</span>
            </div>
            <p className="font-body text-sage text-xs leading-relaxed">
              <strong className="text-deep-teal">Cacao Processing:</strong> Traditional Ngäbe-Buglé and Afro-Caribbean farms begin hand-fermentation and sun-drying of the main cacao harvest.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Secondary Dry Season */}
      <section ref={secondaryDryRef} className="section-pinned z-50">
        <div className="secondary-image absolute left-0 top-0 w-[55vw] h-full will-change-transform">
          <img 
            src="/images/turtle_nesting_beach.jpg" 
            alt="Turtle nesting" 
            className="w-full h-full object-cover image-nature-grade"
          />
        </div>
        
        <div className="secondary-panel absolute right-0 top-0 w-[45vw] h-full bg-warm-white" />
        
        <div className="secondary-panel-content absolute right-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[5vw]">
          <span className="secondary-label label-season mb-4">Secondary Dry Season</span>
          <h2 className="secondary-title font-display text-[clamp(2.5rem,4.5vw,4rem)] text-deep-teal leading-[0.95] mb-6 uppercase">
            September – November
          </h2>
          <p className="secondary-body font-body text-base text-sage leading-relaxed mb-6 max-w-[30vw]">
            Often the sunniest, calmest months. Sea turtle nesting peaks, raptor migration fills the sky, and normally unreachable dive sites open up.
          </p>
          
          <div className="secondary-card card-highlight max-w-[32vw] mb-4">
            <h4 className="label-season mb-4">What to expect</h4>
            <ul className="space-y-2 text-deep-teal text-sm font-body">
              <li className="flex items-start gap-2">
                <Shell className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Peak turtle nesting (Jul–Oct) + hatchling releases</span>
              </li>
              <li className="flex items-start gap-2">
                <Bird className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Raptor migration (millions of birds)</span>
              </li>
              <li className="flex items-start gap-2">
                <Fish className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Access to advanced sites: Tiger Rock, Polo Channel</span>
              </li>
              <li className="flex items-start gap-2">
                <Sprout className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Cacao processing continues</span>
              </li>
              <li className="flex items-start gap-2">
                <TreePine className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>Continuous banana/plantain production</span>
              </li>
            </ul>
          </div>

          {/* Agriculture Highlight */}
          <div className="agri-card bg-gradient-to-r from-[#D4A03A]/10 to-transparent p-4 max-w-[32vw] border-l-2 border-gold">
            <div className="flex items-center gap-2 mb-2">
              <Sprout className="w-5 h-5 text-gold" />
              <span className="font-display text-sm text-deep-teal uppercase tracking-wide">Agriculture Highlight</span>
            </div>
            <p className="font-body text-sage text-xs leading-relaxed">
              <strong className="text-deep-teal">Year-Round Harvest:</strong> Bocas is one of Panama's top plantain producing provinces with continuous production and the historic Chiquita/United Fruit Company legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Marine Ecosystems */}
      <section ref={marineRef} className="section-pinned z-[60]">
        <div className="marine-bg absolute inset-0 will-change-transform">
          <img 
            src="/images/underwater_reef_wide.jpg" 
            alt="Underwater coral reef" 
            className="w-full h-full object-cover image-nature-grade"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E3A3A]/40 via-transparent to-[#0E3A3A]/50" />
        </div>
        
        <div className="marine-text relative z-10 h-full flex flex-col justify-start pt-[10vh] px-[7vw]">
          <h2 className="marine-title font-display text-[clamp(2.5rem,6vw,5rem)] text-warm-white leading-[0.95] max-w-[50vw] mb-4 uppercase">
            Marine Ecosystems
          </h2>
          <p className="marine-body font-body text-base text-warm-white/90 max-w-[38vw] leading-relaxed">
            Reefs, seagrass beds, and mangroves support over 200 fish species, turtles, rays, and manatees. Seasonal plankton blooms shift the underwater mood—sometimes crystal clear, sometimes alive with particles and filter feeders.
          </p>
        </div>

        <div className="marine-thumbs absolute bottom-[8vh] left-[7vw] right-[7vw] flex gap-[2vw]">
          <div className="marine-thumb-1 w-[16vw] h-[18vh] will-change-transform thumbnail-float">
            <img 
              src="/images/marine_thumb_seahorse.jpg" 
              alt="Seahorse" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
          <div className="marine-thumb-2 w-[16vw] h-[18vh] will-change-transform thumbnail-float-delay-1">
            <img 
              src="/images/marine_thumb_coral.jpg" 
              alt="Coral" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
          <div className="marine-thumb-3 w-[16vw] h-[18vh] will-change-transform thumbnail-float-delay-2">
            <img 
              src="/images/marine_thumb_ray.jpg" 
              alt="Eagle ray" 
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>

        <div className="marine-caption absolute bottom-[10vh] right-[4vw] z-10 max-w-[28vw] text-right">
          <p className="font-body text-warm-white/80 text-sm font-medium leading-relaxed">
            Coral spawning, seahorses on seagrass, and nurse sharks under ledges are highlights for patient observers.
          </p>
        </div>
      </section>

      {/* Section 7: Birds */}
      <section ref={birdsRef} className="section-pinned z-[70]">
        <div className="birds-image absolute left-0 top-0 w-[55vw] h-full will-change-transform">
          <img 
            src="/images/bird_toucan.jpg" 
            alt="Keel-billed toucan" 
            className="w-full h-full object-cover image-nature-grade"
          />
        </div>
        
        <div className="birds-panel absolute right-0 top-0 w-[45vw] h-full bg-warm-white" />
        
        <div className="birds-panel-content absolute right-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[5vw]">
          <h2 className="birds-title font-display text-[clamp(2.5rem,4.5vw,4rem)] text-deep-teal leading-[0.95] mb-4 uppercase">
            Birds
          </h2>
          <p className="birds-intro font-body text-base text-sage leading-relaxed mb-4 max-w-[32vw]">
            More than 700 species have been recorded here. From toucans in the canopy to tropicbirds on offshore cliffs, the avifauna changes with elevation and season.
          </p>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-4 max-w-[34vw]">
            <div className="birds-list-item species-tag">Keel-billed Toucan</div>
            <div className="birds-list-item species-tag">Brown Pelican</div>
            <div className="birds-list-item species-tag">Montezuma Oropendola</div>
            <div className="birds-list-item species-tag">Roseate Spoonbill</div>
            <div className="birds-list-item species-tag">Snowy Cotinga</div>
            <div className="birds-list-item species-tag">Northern Jacana</div>
            <div className="birds-list-item species-tag">Red-lored Amazon</div>
            <div className="birds-list-item species-tag">Collared Plover</div>
            <div className="birds-list-item species-tag">Golden-collared Manakin</div>
            <div className="birds-list-item species-tag">Whimbrel</div>
            <div className="birds-list-item species-tag">Three-wattled Bellbird</div>
            <div className="birds-list-item species-tag">Magnificent Frigatebird</div>
            <div className="birds-list-item species-tag">Prothonotary Warbler</div>
            <div className="birds-list-item species-tag">Blackburnian Warbler</div>
            <div className="birds-list-item species-tag">Broad-winged Hawk</div>
            <div className="birds-list-item species-tag">Turkey Vulture</div>
            <div className="birds-list-item species-tag">Red-billed Tropicbird</div>
            <div className="birds-list-item species-tag">Brown Booby</div>
            <div className="birds-list-item species-tag">Yellow-crowned Night Heron</div>
            <div className="birds-list-item species-tag">Green Ibis</div>
          </div>
          
          <p className="birds-caption font-body text-sage text-sm italic max-w-[32vw]">
            September–November brings one of the world's largest raptor migrations through the Talamanca corridor.
          </p>
        </div>
      </section>

      {/* Section 8: Mammals */}
      <section ref={mammalsRef} className="section-pinned z-[80]">
        <div className="mammals-image absolute left-0 top-0 w-[55vw] h-full will-change-transform">
          <img 
            src="/images/mammal_sloth.jpg" 
            alt="Three-toed sloth" 
            className="w-full h-full object-cover image-nature-grade"
          />
        </div>
        
        <div className="mammals-panel absolute right-0 top-0 w-[45vw] h-full bg-warm-white" />
        
        <div className="mammals-panel-content absolute right-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[5vw]">
          <h2 className="mammals-title font-display text-[clamp(2.5rem,4.5vw,4rem)] text-deep-teal leading-[0.95] mb-4 uppercase">
            Mammals
          </h2>
          <p className="mammals-intro font-body text-base text-sage leading-relaxed mb-4 max-w-[32vw]">
            From canopy sloths to river manatees, mammals here are often shy—but with patience, encounters are unforgettable.
          </p>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-4 max-w-[34vw]">
            <div className="mammals-list-item species-tag">Hoffmann's Two-toed Sloth</div>
            <div className="mammals-list-item species-tag">White-nosed Coati</div>
            <div className="mammals-list-item species-tag">Brown-throated Three-toed Sloth</div>
            <div className="mammals-list-item species-tag">Kinkajou</div>
            <div className="mammals-list-item species-tag">Mantled Howler Monkey</div>
            <div className="mammals-list-item species-tag">Tayra</div>
            <div className="mammals-list-item species-tag">White-faced Capuchin</div>
            <div className="mammals-list-item species-tag">West Indian Manatee</div>
            <div className="mammals-list-item species-tag">Panamanian Night Monkey</div>
            <div className="mammals-list-item species-tag">Nine-banded Armadillo</div>
            <div className="mammals-list-item species-tag">Geoffroy's Spider Monkey</div>
            <div className="mammals-list-item species-tag">Central American Agouti</div>
            <div className="mammals-list-item species-tag">Lowland Paca</div>
            <div className="mammals-list-item species-tag">Rothschild's Porcupine</div>
            <div className="mammals-list-item species-tag">Silky Anteater</div>
            <div className="mammals-list-item species-tag">Northern Tamandua</div>
            <div className="mammals-list-item species-tag">Jaguarundi</div>
            <div className="mammals-list-item species-tag">Bottlenose Dolphin</div>
          </div>
          
          <p className="mammals-caption font-body text-sage text-sm italic max-w-[32vw]">
            The Pygmy Three-toed Sloth is critically endangered and found only on Isla Escudo de Veraguas.
          </p>
        </div>
      </section>

      {/* Section 9: Reptiles & Amphibians */}
      <section ref={reptilesRef} className="section-pinned z-[90]">
        <div className="reptiles-image absolute left-0 top-0 w-[55vw] h-full will-change-transform">
          <img 
            src="/images/frog_red_eyed.jpg" 
            alt="Red-eyed tree frog" 
            className="w-full h-full object-cover image-nature-grade"
          />
        </div>
        
        <div className="reptiles-panel absolute right-0 top-0 w-[45vw] h-full bg-warm-white" />
        
        <div className="reptiles-panel-content absolute right-0 top-0 w-[45vw] h-full flex flex-col justify-center px-[5vw]">
          <h2 className="reptiles-title font-display text-[clamp(2rem,4vw,3.5rem)] text-deep-teal leading-[0.95] mb-4 uppercase">
            Reptiles, Amphibians & Flora
          </h2>
          <p className="reptiles-intro font-body text-base text-sage leading-relaxed mb-4 max-w-[32vw]">
            Wet seasons turn the forest into a living lab: poison dart frogs, glass frogs, and blooming canopy trees. Even the trails become a field guide.
          </p>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-4 max-w-[34vw]">
            <div className="reptiles-list-item species-tag">Strawberry Poison Frog</div>
            <div className="reptiles-list-item species-tag">Kapok/Ceiba</div>
            <div className="reptiles-list-item species-tag">Red-eyed Tree Frog</div>
            <div className="reptiles-list-item species-tag">Beach Almond</div>
            <div className="reptiles-list-item species-tag">Glass Frogs</div>
            <div className="reptiles-list-item species-tag">Bromeliads</div>
            <div className="reptiles-list-item species-tag">Boa Constrictor</div>
            <div className="reptiles-list-item species-tag">Heliconias</div>
            <div className="reptiles-list-item species-tag">Basilisk Lizard</div>
            <div className="reptiles-list-item species-tag">Cacao (shade-grown)</div>
            <div className="reptiles-list-item species-tag">Green Iguana</div>
            <div className="reptiles-list-item species-tag">Sea Grape</div>
            <div className="reptiles-list-item species-tag">Green Parrot Snake</div>
            <div className="reptiles-list-item species-tag">Orchids (100+ species)</div>
            <div className="reptiles-list-item species-tag">Black Ctenosaur</div>
            <div className="reptiles-list-item species-tag">Philodendrons</div>
            <div className="reptiles-list-item species-tag">Harlequin Tree Frog</div>
            <div className="reptiles-list-item species-tag">Spanish Cedar</div>
          </div>
          
          <p className="reptiles-caption font-body text-sage text-sm italic max-w-[32vw]">
            Bromeliad 'tanks' hold water and become nurseries for frog larvae and insects.
          </p>
        </div>
      </section>

      {/* Section 10: Plan Your Visit */}
      <section ref={planRef} className="relative z-[100] bg-deep-teal min-h-screen py-[10vh]">
        <div className="px-[7vw]">
          <div className="plan-title mb-12">
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-warm-white leading-[0.95] mb-4 uppercase">
              Plan your visit.
            </h2>
            <p className="font-body text-base text-warm-white/80 max-w-[48vw] leading-relaxed">
              Book certified guides, respect nesting turtles, and choose reef-safe sunscreen. The best trips are slow, curious, and kind.
            </p>
          </div>

          <div className="plan-cards grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="plan-card bg-warm-white p-6">
              <MapPin className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-display text-xl text-deep-teal uppercase tracking-wide mb-2">Guided Tours</h3>
              <p className="font-body text-sage text-sm leading-relaxed">
                Night turtle walks, snorkeling, and birding with local experts.
              </p>
            </div>
            <div className="plan-card bg-warm-white p-6">
              <Calendar className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-display text-xl text-deep-teal uppercase tracking-wide mb-2">Best Times</h3>
              <p className="font-body text-sage text-sm leading-relaxed">
                Sep–Nov for calm seas; Dec–Apr for clear visibility; May–Aug for lush forest.
              </p>
            </div>
            <div className="plan-card bg-warm-white p-6">
              <Waves className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-display text-xl text-deep-teal uppercase tracking-wide mb-2">Travel Light</h3>
              <p className="font-body text-sage text-sm leading-relaxed">
                Bring quick-dry layers, waterproof bags, and a macro lens for small creatures.
              </p>
            </div>
          </div>

          <div className="plan-form bg-warm-white p-8 max-w-[520px] ml-auto mr-[7vw]">
            <h3 className="font-display text-2xl text-deep-teal uppercase tracking-wide mb-6">
              Get the seasonal checklist
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block font-body text-xs font-semibold tracking-widest uppercase text-sage mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-[#E5E5E5] text-deep-teal text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold tracking-widest uppercase text-sage mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-[#E5E5E5] text-deep-teal text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold tracking-widest uppercase text-sage mb-2">Preferred Season</label>
                <select className="w-full px-4 py-3 border border-[#E5E5E5] text-deep-teal text-sm font-body focus:outline-none focus:border-gold transition-colors bg-white">
                  <option>Select a season</option>
                  <option>Primary Dry (Dec–Apr)</option>
                  <option>Rainy (May–Aug)</option>
                  <option>Secondary Dry (Sep–Nov)</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-xs font-semibold tracking-widest uppercase text-sage mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 border border-[#E5E5E5] text-deep-teal text-sm font-body focus:outline-none focus:border-gold transition-colors resize-none"
                  rows={3}
                  placeholder="Tell us about your interests..."
                />
              </div>
              <button type="submit" className="btn-gold w-full rounded-sm flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Send Request
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-white/20 px-[7vw]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-gold" />
              <span className="font-display text-lg text-warm-white">BOCAS GUIDE</span>
            </div>
            <p className="font-body text-warm-white/60 text-sm">
              © Bocas del Toro Wildlife Guide. Built for explorers.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-warm-white/60 text-sm hover:text-gold transition-colors">Conservation</a>
              <a href="#" className="font-body text-warm-white/60 text-sm hover:text-gold transition-colors">Guidelines</a>
              <a href="#" className="font-body text-warm-white/60 text-sm hover:text-gold transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
