import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if we've scrolled past the first page (Hero height)
            if (window.scrollY > window.innerHeight - 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar fixed top-0 w-full z-50 ${isScrolled ? 'navbar-glass' : ''}`}>
            {/* Soft Ambient Stars and Meteors */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden text-white/20">
                <div className="soft-star" style={{ top: '25%', left: '15%', animationDelay: '0.2s' }}></div>
                <div className="soft-star" style={{ top: '65%', left: '35%', animationDelay: '2.4s' }}></div>
                <div className="soft-star" style={{ top: '40%', left: '55%', animationDelay: '1.5s' }}></div>
                <div className="soft-star" style={{ top: '75%', left: '75%', animationDelay: '3.1s' }}></div>
                <div className="soft-star" style={{ top: '30%', left: '90%', animationDelay: '0.8s' }}></div>

                <div className="soft-meteor" style={{ top: '20px', animationDelay: '1s', animationDuration: '12s' }}></div>
                <div className="soft-meteor" style={{ top: '50px', animationDelay: '6s', animationDuration: '15s' }}></div>
            </div>

            <div className="flex items-center relative z-10">
                {/* MYSA logo text on the far left */}
                <span className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
                    MYSA
                </span>
            </div>

            <div className="hidden md:flex items-center gap-10 relative z-10">
                {/* Three text links */}
                {['HOW IT WORKS', 'FEATURES', 'PRICING'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide"
                    >
                        {item}
                    </a>
                ))}
                {/* START FREE button */}
                <button className="start-free-btn text-sm font-bold tracking-wide uppercase">
                    START FREE
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
