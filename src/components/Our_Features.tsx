import { useRef, useState } from 'react';

const features = [
    {
        id: 0,
        title: 'Expense Tracking',
        description: 'Easily monitor and manage all your expenses in one place.',
        icon: (active: boolean) => (
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33301 31.417V26.917C3.33301 23.167 4.83301 21.667 8.58301 21.667H13.083C16.833 21.667 18.333 23.167 18.333 26.917V31.417C18.333 35.167 16.833 36.667 13.083 36.667H8.58301" stroke={active ? '#041117' : '#364247'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36.6667 25C36.6667 31.45 31.45 36.6667 25 36.6667L26.75 33.75" stroke={active ? '#041117' : '#364247'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.33301 14.9997C3.33301 8.54967 8.54967 3.33301 14.9997 3.33301L13.2497 6.24967" stroke={active ? '#041117' : '#364247'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M29.167 18.333C33.3091 18.333 36.667 14.9751 36.667 10.833C36.667 6.69087 33.3091 3.33301 29.167 3.33301C25.0249 3.33301 21.667 6.69087 21.667 10.833C21.667 14.9751 25.0249 18.333 29.167 18.333Z" stroke={active ? '#041117' : '#364247'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: 1,
        title: 'Payment Processing',
        description: 'Simplify your bill payments with a secure and efficient system.',
        icon: (active: boolean) => (
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6992 2.91602H26.2998C29.7538 2.91603 31.7178 3.48534 32.8711 4.70508C34.0385 5.93991 34.583 8.05559 34.583 11.7334V30.5C34.583 32.2289 34.227 33.2744 33.8369 33.9043C33.4544 34.5219 33.004 34.7965 32.6924 34.9248C32.3905 35.0444 31.8936 35.1544 31.2188 34.9785C30.5359 34.8004 29.6026 34.3114 28.4727 33.1113H28.4717C27.9777 32.5792 27.3142 32.2056 26.5312 32.2266L26.3945 32.2344C25.6281 32.2855 24.9298 32.6923 24.4492 33.333V33.334L22.7656 35.584L22.7637 35.5859C22.0369 36.5642 21.0084 37.0829 20 37.083C18.9915 37.083 17.9622 36.5644 17.2354 35.5859L17.2334 35.584L15.5498 33.334V33.333L15.3623 33.1064C14.9042 32.6029 14.3007 32.2797 13.6221 32.2344H13.6084L13.5938 32.2334C13.0989 32.217 12.6248 32.3514 12.2051 32.5986L11.7725 32.2119L10.6494 33.4443L10.9277 33.7021C10.0706 34.4796 9.3473 34.833 8.78809 34.9785C8.11003 35.1549 7.60801 35.0442 7.30664 34.9248L7.30176 34.9229L7.18164 34.8711C6.88699 34.7326 6.49893 34.4608 6.16211 33.917C5.7724 33.2878 5.41606 32.2382 5.41602 30.5V11.7334C5.41602 8.05559 5.96055 5.93991 7.12793 4.70508C8.2812 3.48526 10.2452 2.91607 13.6992 2.91602Z" fill={active ? '#041117' : '#292D32'} stroke={active ? '#041117' : '#041117'} strokeWidth="1.66667"/>
                <path d="M26.6663 12.917H13.333C12.6497 12.917 12.083 12.3503 12.083 11.667C12.083 10.9837 12.6497 10.417 13.333 10.417H26.6663C27.3497 10.417 27.9163 10.9837 27.9163 11.667C27.9163 12.3503 27.3497 12.917 26.6663 12.917Z" fill={active ? '#041117' : '#292D32'}/>
                <path d="M25 19.583H15C14.3167 19.583 13.75 19.0163 13.75 18.333C13.75 17.6497 14.3167 17.083 15 17.083H25C25.6833 17.083 26.25 17.6497 26.25 18.333C26.25 19.0163 25.6833 19.583 25 19.583Z" fill={active ? '#041117' : '#292D32'}/>
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Platform Integrations',
        description: 'Connect and sync seamlessly with your favorite tools and platforms.',
        icon: (active: boolean) => (
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8701 9.64062C13.7353 6.63614 18.3561 5.43913 22.3037 6.66211H22.3057C25.8763 7.76088 28.4415 10.7094 29.3867 14.9307L29.5029 15.4463L30.0176 15.5625C33.1216 16.259 35.6179 18.6081 36.6367 21.9072V21.9082C37.7307 25.4982 36.739 29.1347 34.085 31.4551L34.0752 31.4639C32.3599 33.0105 30.1252 33.8827 27.8008 33.8828H9.28906C4.92616 33.5612 2.98344 30.2494 2.9834 27.2324C2.9834 24.5256 4.55277 21.5998 7.91211 20.793L8.73438 20.5947L8.52441 19.7754C7.52017 15.8523 8.37551 12.2425 10.8682 9.64258L10.8701 9.64062Z" fill={active ? '#041117' : '#292D32'} stroke={active ? '#041117' : '#576165'} strokeWidth="1.66667"/>
                <path d="M29.2041 15.416C29.4189 15.4106 29.617 15.6013 29.6172 15.8164V15.8369C29.6227 16.062 29.4388 16.2499 29.2168 16.25H29.1982C28.3148 16.2693 27.4094 16.4799 26.5938 16.8877L26.5674 16.9014C26.4895 16.9438 26.4426 16.9502 26.417 16.9502C26.2556 16.9502 26.1223 16.8701 26.0508 16.7217L26.041 16.7031L26.0137 16.6318C25.9671 16.4597 26.042 16.2482 26.2451 16.1426C27.1672 15.6826 28.192 15.4318 29.1953 15.417L29.2041 15.416Z" fill={active ? '#041117' : '#292D32'} stroke={active ? '#041117' : '#576165'} strokeWidth="1.66667"/>
            </svg>
        ),
    },
];

const Our_Features = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeCard, setActiveCard] = useState(1);

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
    };

    return (
        <section className="py-20 ">
            {/* Заголовок */}
            <div className="flex flex-col justify-center items-center gap-3 mb-14">
                <p className="font-['Roboto'] font-semibold text-base text-[#57A464]">Our Features</p>
                <h2 className="font-['Playfair_Display'] font-bold text-[#F2FCF3] text-4xl text-center">Experience our premium features.</h2>
            </div>

            {/* Карточки */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-10 lg:justify-center overflow-x-auto lg:overflow-x-visible scrollbar-hide pb-2 lg:pb-0 snap-x snap-mandatory lg:snap-none"
            >
                {features.map((feature) => {
                    const active = activeCard === feature.id;
                    return (
                        <div
                            key={feature.id}
                            onClick={() => setActiveCard(feature.id)}
                            className={`
                                w-[85vw] sm:w-[65vw] lg:w-[320px] flex-shrink-0 rounded-3xl
                                flex flex-col justify-center items-center px-10 py-16 gap-6
                                snap-center cursor-pointer select-none
                                transition-all duration-500 ease-in-out
                                ${active
                                    ? 'bg-[#0d1f1a] border border-[#1e3d30]'
                                    : 'bg-transparent border border-white/10 hover:border-white/20'
                                }
                            `}
                        >
                            {/* Иконка */}
                            <div
                                className={`
                                    w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0
                                    transition-all duration-500 ease-in-out
                                    ${active ? 'bg-[#81E48A]' : 'bg-transparent'}
                                `}
                            >
                                {feature.icon(active)}
                            </div>

                            {/* Текст */}
                            <div className="flex flex-col items-center gap-3 text-center">
                                <h3 className={`
                                    font-['Playfair_Display'] font-semibold text-2xl whitespace-nowrap
                                    transition-colors duration-500
                                    ${active ? 'text-[#81E48A]' : 'text-[#E6E7E7]'}
                                `}>
                                    {feature.title}
                                </h3>
                                <p className={`
                                    font-['Roboto'] font-medium text-base leading-7
                                    transition-colors duration-500
                                    ${active ? 'text-[#81E48A]/70' : 'text-[#BEC1C2]'}
                                `}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Индикатор прокрутки — только мобайл */}
            <div className="lg:hidden mt-6 mx-auto w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#81E48A] rounded-full transition-all duration-150"
                    style={{ width: '33%', transform: `translateX(${scrollProgress * 200}%)` }}
                />
            </div>
        </section>
    );
};

export default Our_Features;
