'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const NavbarContainer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollProgress = currentScrollY / heroHeight;
        
        // Determine if we're past the hero section (more conservative threshold)
        setIsPastHero(scrollProgress > 0.2);
        
        // Show/hide logic: only hide when significantly past hero and scrolling down fast
        if (currentScrollY < 50) {
          setIsVisible(true);
        } else if (scrollProgress > 0.95) {
          // Only hide when completely past hero and scrolling down
          setIsVisible(currentScrollY < lastScrollY || (currentScrollY - lastScrollY) < 5);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    // Initial call
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Navbar isPastHero={isPastHero} navLinks={navLinks} />
    </div>
  );
};

export default NavbarContainer;