import { useState } from 'react';

const navGroups = [
    {
        label: 'Solutions',
        links: ['e Commerce Distributors', 'Brand Commerce', 'Omnichannel Retailers', 'Cross-Borders e Commerce'],
    },
    {
        label: 'Company',
        links: ['About Us', 'Journey', 'Pricing', 'Blog'],
    },
    {
        label: 'Resources',
        links: ['Help Center', 'Partner Program', 'What is SaaS?', 'SaaS Comparison'],
    },
];

// Кнопка с выпадающим списком (мобильный аккордеон)
const DropdownGroup = ({ group }: { group: typeof navGroups[0] }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/[0.06]">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between py-3.5 font-['Roboto'] font-semibold text-sm text-[#7BE385]"
            >
                {group.label}
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24" fill="none"
                >
                    <path d="M6 9L12 15L18 9" stroke="#7BE385" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-64 pb-3' : 'max-h-0'}`}>
                <ul className="flex flex-col gap-2.5">
                    {group.links.map((link) => (
                        <li key={link}>
                            <a href="#" className="font-['Roboto'] text-sm text-[#9aa4a6] hover:text-white transition-colors">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Footer = () => (
    <footer className="bg-[#060f0f] border-t border-white/[0.06]">
        <div className="site-container py-12 lg:py-16">

            {/* ── Основная строка ── */}
            <div className="flex flex-col lg:flex-row lg:gap-16 gap-10">

                {/* Логотип + описание */}
                <div className="flex flex-col gap-4 lg:max-w-[260px] flex-shrink-0">
                    <div className="flex items-center gap-2.5">
                        <img src="/images/Logo.svg" alt="Logo" className="w-9 h-9" />
                        <span className="font-['Inter'] font-semibold text-white text-[28px]">Stain</span>
                    </div>
                    <p className="font-['Roboto'] font-bold text-base text-[#F1FCF2] leading-snug">
                        Empower Your Business for Success
                    </p>
                    <p className="font-['Roboto'] text-sm text-[#6b7577]">
                        Streamline, enhance, achieve, and succeed.
                    </p>
                </div>

                {/* ── DESKTOP: три колонки ссылок ── */}
                <div className="hidden lg:grid grid-cols-3 gap-10 flex-1">
                    {navGroups.map((group) => (
                        <div key={group.label} className="flex flex-col gap-4">
                            <p className="font-['Roboto'] font-semibold text-sm text-[#7BE385]">
                                {group.label}
                            </p>
                            <ul className="flex flex-col gap-3">
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="font-['Roboto'] text-sm text-[#9aa4a6] hover:text-white transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── MOBILE: три кнопки-аккордеона ── */}
                <div className="lg:hidden flex flex-col">
                    {navGroups.map((group) => (
                        <DropdownGroup key={group.label} group={group} />
                    ))}
                </div>

            </div>

            {/* ── Нижняя строка ── */}
            <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="font-['Roboto'] text-sm text-[#5a6466]">
                    Copyright © 2023 Stain. All Rights Reserved
                </p>

                {/* Соц. иконки */}
                <div className="flex items-center gap-4">
                    {/* X (Twitter) */}
                    <a href="#" aria-label="X" className="text-[#5a6466] hover:text-white transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.142 2.25h6.865l4.265 5.64L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
                        </svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" aria-label="Facebook" className="text-[#5a6466] hover:text-white transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"/>
                        </svg>
                    </a>
                    {/* Reddit */}
                    <a href="#" aria-label="Reddit" className="text-[#5a6466] hover:text-white transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </footer>
);

export default Footer;
