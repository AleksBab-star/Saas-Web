import { useState } from 'react';

const clients = [
    {
        id: 0,
        name: 'Jessica Tran',
        role: 'Product Manager, ReachGrow Agency',
        avatar: '/images/clients/Image (1).png',
        avatarBg: '#81E48A',
        text: "This platform completely streamlined our workflows. It's user-friendly, saves us time, and keeps the entire team perfectly aligned every step. We can now focus on what truly matters and grow faster.",
        featured: false,
    },
    {
        id: 1,
        name: 'Daniel Rodriguez',
        role: 'CEO, GrowthSync',
        since: 'Since 2005',
        avatar: '/images/clients/Image (7).png',
        avatarBg: '#81E48A',
        text: '',
        featured: true,
    },
    {
        id: 2,
        name: 'Laura Simmons',
        role: 'Operations Lead, InsightHub',
        avatar: '/images/clients/Image (3).png',
        avatarBg: '#f5c6c6',
        text: "We've experienced a 40% increase in efficiency since adopting this tool. It's reliable, flexible, and absolutely essential for our operations. Our productivity has soared, and deadlines are consistently met with ease.",
        featured: false,
    },
    {
        id: 3,
        name: 'Liam Chen',
        role: 'Founder , PeopleConnect',
        avatar: '/images/clients/Image (4).png',
        avatarBg: '#f5f0a0',
        text: "The customization options are unmatched. It's like having a tailored solution that adapts seamlessly to every challenge our business faces. We've been able to create our own workflows with precision.",
        featured: false,
    },
    {
        id: 4,
        name: 'Emma Davis',
        role: 'Data Analyst, AgileCore Technologies',
        avatar: '/images/clients/Image (5).png',
        avatarBg: '#c6e8f5',
        text: 'Analytics provided by this platform have been a total game-changer. It helps us make smarter, data-driven decisions daily. We now track key metrics more efficiently and improve strategies quickly.',
        featured: false,
    },
    {
        id: 5,
        name: 'Sarah Lee',
        role: 'CEO , BuildSmart Co',
        avatar: '/images/clients/Image (1).png',
        avatarBg: '#e8c6f5',
        text: "This tool is a must-have for every growing company. It's scalable, intuitive, and supports our rapid growth efforts seamlessly. We've been able to expand effortlessly while staying fully organized.",
        featured: false,
    },
];

const Card = ({ client }: { client: typeof clients[0] }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col items-center text-center rounded-3xl border border-white/[0.07] px-6 py-10 cursor-default transition-all duration-300"
            style={{ background: hovered ? '#0E1B20' : 'transparent', borderColor: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)' }}
        >
            <div
                className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mb-5"
                style={{ background: client.avatarBg }}
            >
                <img src={client.avatar} alt={client.name} className="w-full h-full object-cover object-top" />
            </div>

            <p className={`font-['Roboto'] font-bold text-lg leading-snug mb-1 transition-colors duration-300 ${hovered ? 'text-[#7BE385]' : 'text-[#F1FCF2]'}`}>
                {client.name}
            </p>
            <p className="font-['Roboto'] text-sm text-[#5a6466] mb-1">{client.role}</p>

            {client.text && (
                <>
                    <div className="w-8 h-px bg-white/[0.08] my-4 flex-shrink-0" />
                    <p className="font-['Roboto'] text-[15px] text-[#8d9496] leading-relaxed">{client.text}</p>
                </>
            )}
        </div>
    );
};

const FeaturedCard = ({ client }: { client: typeof clients[0] }) => (
    <div
        className="flex flex-col items-center text-center rounded-3xl border border-white/[0.12] px-6 py-10 transition-colors duration-300"
        style={{ background: '#0E1B20' }}
    >
        <div
            className="w-44 h-44 rounded-full overflow-hidden flex-shrink-0 mb-6"
            style={{ background: client.avatarBg }}
        >
            <img src={client.avatar} alt={client.name} className="w-full h-full object-cover object-top" />
        </div>

        <p className="font-['Playfair_Display'] font-bold text-2xl text-[#7BE385] mb-2">{client.name}</p>
        <p className="font-['Roboto'] font-semibold text-base text-[#c8d0d2] mb-1">{client.role}</p>
        {client.since && (
            <p className="font-['Roboto'] font-semibold text-base text-[#c8d0d2]">{client.since}</p>
        )}
    </div>
);

const Clients = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + clients.length) % clients.length);
    const next = () => setCurrent((c) => (c + 1) % clients.length);

    return (
        <section className="py-16 lg:py-24" style={{ background: '#060f0f' }}>
            <div className="site-container">

                {/* Заголовок */}
                <div className="flex flex-col items-center text-center gap-3 mb-12 lg:mb-16">
                    <p className="font-['Roboto'] font-medium text-sm text-[#7BE385]">True Stories</p>
                    <h2 className="font-['Playfair_Display'] font-bold text-[30px] sm:text-[38px] lg:text-[48px] leading-[1.15] text-[#F1FCF2] max-w-[640px]">
                        Authentic Experiences from Our Esteemed Clients
                    </h2>
                </div>

                {/* ── DESKTOP: 3×2 grid, фиксированная высота строк ── */}
                <div className="hidden lg:grid grid-cols-3 gap-4" style={{ gridAutoRows: '420px' }}>
                    {/* Верхний ряд: Jessica | Daniel (featured) | Laura */}
                    <Card client={clients[0]} />
                    <FeaturedCard client={clients[1]} />
                    <Card client={clients[2]} />
                    {/* Нижний ряд: Liam | Emma | Sarah */}
                    <Card client={clients[3]} />
                    <Card client={clients[4]} />
                    <Card client={clients[5]} />
                </div>

                {/* ── MOBILE: слайдер ── */}
                <div className="lg:hidden">

                    {/* Карточка слайдера */}
                    <div
                        className="border border-white/[0.07] rounded-2xl px-7 py-10 flex flex-col items-center text-center min-h-[420px]"
                        style={{ background: '#0b1a16' }}
                    >
                        <div
                            className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mb-4"
                            style={{ background: clients[current].avatarBg }}
                        >
                            <img
                                src={clients[current].avatar}
                                alt={clients[current].name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        <p className="font-['Roboto'] font-bold text-lg text-[#F1FCF2] mt-1">
                            {clients[current].name}
                        </p>
                        <p className="font-['Roboto'] font-semibold text-sm text-[#8d9294] mt-0.5">
                            {clients[current].role}
                        </p>
                        {clients[current].since && (
                            <p className="font-['Roboto'] text-sm text-[#5a6466] mt-0.5">
                                {clients[current].since}
                            </p>
                        )}

                        {clients[current].text && (
                            <>
                                <div className="w-8 h-px bg-white/[0.08] my-4" />
                                <p className="font-['Roboto'] text-base text-[#8d9496] leading-relaxed">
                                    {clients[current].text}
                                </p>
                            </>
                        )}
                    </div>

                    {/* Кнопки */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Previous"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-[#7BE385] flex items-center justify-center hover:bg-[#6FD97A] transition-colors"
                            aria-label="Next"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 5L12.5 10L7.5 15" stroke="#041117" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2 mt-5">
                        {clients.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`transition-all duration-300 rounded-full ${
                                    i === current ? 'w-6 h-2 bg-[#7BE385]' : 'w-2 h-2 bg-white/20'
                                }`}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Clients;
