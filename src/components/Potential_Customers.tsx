import { useState } from 'react';

const features = [
    {
        id: 0,
        title: 'Organize Your Leads',
        description: 'Streamline your sales process.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2879 1.85156H15.5286C13.5101 1.85156 12.4453 2.91638 12.4453 4.9349V6.69416C12.4453 8.71267 13.5101 9.77749 15.5286 9.77749H17.2879C19.3064 9.77749 20.3712 8.71267 20.3712 6.69416V4.9349C20.3712 2.91638 19.3064 1.85156 17.2879 1.85156Z" fill="#041117"/>
                <path d="M6.70341 12.4355H4.94416C2.91638 12.4355 1.85156 13.5004 1.85156 15.5189V17.2781C1.85156 19.3059 2.91638 20.3707 4.9349 20.3707H6.69416C8.71267 20.3707 9.77749 19.3059 9.77749 17.2874V15.5281C9.78675 13.5004 8.72193 12.4355 6.70341 12.4355Z" fill="#041117"/>
                <path d="M5.82378 9.79601C8.01758 9.79601 9.79601 8.01758 9.79601 5.82378C9.79601 3.62999 8.01758 1.85156 5.82378 1.85156C3.62999 1.85156 1.85156 3.62999 1.85156 5.82378C1.85156 8.01758 3.62999 9.79601 5.82378 9.79601Z" fill="#041117"/>
                <path d="M16.398 20.3702C18.5918 20.3702 20.3702 18.5918 20.3702 16.398C20.3702 14.2042 18.5918 12.4258 16.398 12.4258C14.2042 12.4258 12.4258 14.2042 12.4258 16.398C12.4258 18.5918 14.2042 20.3702 16.398 20.3702Z" fill="#041117"/>
            </svg>
        ),
    },
    {
        id: 1,
        title: 'Sales Tracking',
        description: 'Track leads for better follow-ups.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33301 1.62109H13.8887C16.3494 1.62109 17.9957 2.14901 19.0352 3.18848C20.0743 4.22794 20.6015 5.87363 20.6016 8.33398V13.8896C20.6016 16.3504 20.0746 17.9967 19.0352 19.0361C17.9957 20.0756 16.3494 20.6025 13.8887 20.6025H8.33301C5.87266 20.6025 4.22697 20.0753 3.1875 19.0361C2.14804 17.9967 1.62012 16.3504 1.62012 13.8896V8.33398C1.62014 5.87332 2.14806 4.22792 3.1875 3.18848C4.22694 2.14903 5.87234 1.62111 8.33301 1.62109Z" fill="#041117" stroke="#041117" strokeWidth="0.925926"/>
                <path d="M14.3516 4.86133C15.5031 4.86133 16.4353 5.7928 16.4355 6.94434V15.2783C16.4354 16.4299 15.5032 17.3613 14.3516 17.3613C13.2001 17.3611 12.2687 16.4298 12.2686 15.2783V6.94434C12.2688 5.79293 13.2002 4.86154 14.3516 4.86133Z" fill="#041117" stroke="#041117" strokeWidth="0.925926"/>
                <path d="M7.87012 9.95312C9.0217 9.95312 9.95389 10.8846 9.9541 12.0361V15.2773C9.95406 16.429 9.02181 17.3604 7.87012 17.3604C6.7186 17.3601 5.78715 16.4289 5.78711 15.2773V12.0361C5.78732 10.8847 6.71871 9.95334 7.87012 9.95312Z" fill="#041117" stroke="#041117" strokeWidth="0.925926"/>
            </svg>
        ),
    },
];

// Cross / plus shaped image — built from scratch with precise SVG arc clipPath
const CrossImageFrame = () => (
    <div className="relative w-full max-w-[460px] mx-auto lg:mx-0" style={{ aspectRatio: '1/1' }}>
        <svg
            className="w-full h-full"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                {/*
                    300×300 grid split 3×3, each cell = 100×100.
                    Cross = all cells EXCEPT the 4 corners.
                    Each corner cutout is a concave quarter-circle arc of radius 100.

                    Arc direction: sweep-flag=1 curves AWAY from corner (concave inward).

                    Tracing clockwise:
                    Start at top-left of top arm (100, 0)
                      → right across top arm top edge  → (200, 0)
                      → down to where top-right corner begins → (200, 100)
                      → ARC sweeping toward centre: from (200,100) to (300,100), r=100, sweep=1
                         [this arc curves inward, center of circle at (200,100) is the grid junction]
                         Actually: arc from (200,100) to (300,100) with r=100 sweep=1 → concave corner ✓
                      → down right arm → (300, 200)
                      → ARC from (300,200) to (200,200), r=100, sweep=1 → bottom-right concave corner
                      → down bottom arm → (200, 300)
                      → left across bottom → (100, 300)
                      → ARC from (100,300) to (0,300) → NO, go up:
                         actually (100,300) up to (100,200)
                      → ARC from (100,200) to (0,200), r=100, sweep=1 → bottom-left concave corner
                      → left then up → (0, 100)
                      → ARC from (0,100) to (100,100), r=100, sweep=1 → top-left concave corner
                      → back up to (100,0) → close
                */}
                <clipPath id="plusClip">
                    {/*
                        300×300, cells 100×100.
                        sweep-flag=0 = counter-clockwise = arc curves TOWARD the corner = concave ✓

                        Top-right corner junction: (200,100)
                          arc from (200,100) to (300,100): sweep=0 → bulges up-right = concave inward ✓

                        Bottom-right corner junction: (200,200)
                          arc from (300,200) to (200,200): sweep=0 → bulges down-right = concave inward ✓

                        Bottom-left corner junction: (100,200)
                          arc from (100,200) to (0,200): sweep=0 → bulges down-left = concave inward ✓

                        Top-left corner junction: (100,100)
                          arc from (0,100) to (100,100): sweep=0 → bulges up-left = concave inward ✓
                    */}
                    <path d="
                        M 100,0
                        L 200,0
                        L 200,100
                        A 100,100 0 0,0 300,100
                        L 300,200
                        A 100,100 0 0,0 200,200
                        L 200,300
                        L 100,300
                        L 100,200
                        A 100,100 0 0,0 0,200
                        L 0,100
                        A 100,100 0 0,0 100,100
                        Z
                    "/>
                </clipPath>
            </defs>

            {/* Photo clipped to plus shape */}
            <image
                href="/images/White_old_man.png"
                x="0" y="0"
                width="300" height="300"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#plusClip)"
            />
        </svg>

        {/* Total customers card — overlaps bottom-right */}
        <div className="absolute w-[52%]" style={{ zIndex: 10, bottom: '0%', right: '-5%' }}>
            <img
                src="/images/Total_customers.png"
                alt="Total customers"
                className="w-full h-auto drop-shadow-2xl"
            />
        </div>
    </div>
);

const Potential_Customers = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="py-16 lg:py-24">
            <div className="site-container">
                <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">

                    {/* LEFT — текст + карточки */}
                    <div className="flex flex-col gap-8 lg:w-1/2">

                        {/* Заголовок */}
                        <div className="flex flex-col gap-4">
                            <p className="font-['Roboto'] font-medium text-sm text-[#59A565]">Lead Organization</p>
                            <h2 className="font-['Playfair_Display'] font-semibold text-[40px] sm:text-[48px] lg:text-[52px] leading-[1.1] text-[#F1FCF2]">
                                Track All Your<br />Potential Customers
                            </h2>
                            <p className="font-['Roboto'] font-normal text-base text-[#B1B6B8] leading-relaxed max-w-[460px]">
                                Efficiently organize and track your leads, ensuring better follow-ups and higher conversion rates.
                            </p>
                        </div>

                        {/* Карточки */}
                        <div className="flex flex-col gap-6">
                            {features.map((feature) => {
                                const isHovered = hovered === feature.id;
                                return (
                                    <div
                                        key={feature.id}
                                        onMouseEnter={() => setHovered(feature.id)}
                                        onMouseLeave={() => setHovered(null)}
                                        className={`
                                            flex items-center gap-5 px-5 py-5 rounded-2xl cursor-pointer
                                            transition-all duration-300 ease-in-out
                                            border border-transparent
                                            ${isHovered
                                                ? 'bg-[#0d1f1a] !border-[#2a5e3a] shadow-lg shadow-green-900/20'
                                                : 'lg:bg-white/[0.03] lg:border-white/[0.08]'
                                            }
                                        `}
                                    >
                                        {/* Icon — зелёный фон всегда */}
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#81E48A] transition-all duration-300">
                                            {feature.icon}
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <p className="font-['Roboto'] font-semibold text-lg text-[#7BE385]">
                                                {feature.title}
                                            </p>
                                            <p className="font-['Roboto'] font-normal text-sm text-[#8d9294] mt-1">
                                                {feature.description}
                                            </p>
                                        </div>

                                        {/* Arrow — появляется при hover */}
                                        <div
                                            className={`
                                                flex-shrink-0 transition-all duration-300
                                                ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                                            `}
                                        >
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.2393 7.90625L27.3326 15.9996L19.2393 24.0929" stroke="#F2FCF3" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4.66699 16H27.107" stroke="#F2FCF3" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT — крестообразная картинка */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end overflow-visible">
                        <CrossImageFrame />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Potential_Customers;
