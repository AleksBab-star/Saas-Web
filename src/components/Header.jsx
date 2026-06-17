import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="py-5">
            {/* Десктоп / мобайл верхняя строка */}
            <div className="flex items-center justify-between">
                {/* Логотип */}
                <div className="flex items-center gap-2.5">
                    <img className="w-6 h-6 md:w-6 md:h-6 w-9 h-9" src="/images/Logo.svg" alt="Logo"/>
                    <h1 className="font-['Inter'] font-semibold text-white text-[32px] md:text-[26px]">Stain</h1>
                </div>

                {/* Навигация — только десктоп */}
                <nav className="hidden md:flex items-center gap-8 font-['Roboto'] font-medium text-[#576165] text-base">
                    <a href="#" className="text-[#81E48A] hover:text-white transition">Home</a>
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">Integration</a>
                    <a href="#" className="hover:text-white transition">Pricing</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                    <a href="#" className="hover:text-white transition">Blog</a>
                </nav>

                {/* Кнопки — только десктоп */}
                <div className="hidden md:flex items-center gap-5 font-['Roboto'] font-semibold text-base">
                    <button className="text-white hover:opacity-80 transition">Sign In</button>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#81E48A] rounded-lg hover:bg-[#6FD97A] transition">
                        <span className="text-[#041117]">Start Free Trial</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0244 4.94141L17.0827 9.99974L12.0244 15.0581" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.91699 10H16.942" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                {/* Бургер — только мобайл */}
                <button
                    className="md:hidden flex items-center justify-center w-11 h-11 bg-[#81E48A] rounded-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4L16 16M16 4L4 16" stroke="#041117" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5H17M3 10H17M3 15H17" stroke="#041117" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                    )}
                </button>
            </div>

            {/* Мобильное меню */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col items-center gap-5 font-['Roboto'] font-medium text-[#576165] text-xl pb-6 border-t border-white/10 pt-6">
                    <a href="#" className="text-[#81E48A]">Home</a>
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">Integration</a>
                    <a href="#" className="hover:text-white transition">Pricing</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                    <a href="#" className="hover:text-white transition">Blog</a>
                    <div className="flex flex-col items-center gap-3 pt-3 font-semibold w-full">
                        <button className="w-full py-3.5 text-white text-xl border border-white/20 rounded-lg hover:opacity-80 transition">Sign In</button>
                        <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#81E48A] rounded-lg hover:bg-[#6FD97A] transition">
                            <span className="text-[#041117] text-xl">Start Free Trial</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0244 4.94141L17.0827 9.99974L12.0244 15.0581" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.91699 10H16.942" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
