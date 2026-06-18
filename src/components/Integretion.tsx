const Integretion = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#d4f5d4] py-20 lg:py-28">

            {/* ── Декоративный фон ── */}

            {/* Большой полукруг снизу-слева */}
            <div
                className="absolute -bottom-24 -left-24 w-72 h-72 lg:w-96 lg:h-96 rounded-full opacity-50"
                style={{ background: 'radial-gradient(circle at 60% 60%, #6fcf6f 0%, #a8e4a8 50%, transparent 80%)' }}
            />
            {/* Большой полукруг снизу-справа */}
            <div
                className="absolute -bottom-24 -right-24 w-72 h-72 lg:w-96 lg:h-96 rounded-full opacity-50"
                style={{ background: 'radial-gradient(circle at 40% 60%, #6fcf6f 0%, #a8e4a8 50%, transparent 80%)' }}
            />

            {/* Ромб слева */}
            <div
                className="absolute left-8 top-1/2 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-28 opacity-30"
                style={{
                    background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
            />
            {/* Ромб справа */}
            <div
                className="absolute right-8 top-1/2 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-28 opacity-30"
                style={{
                    background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
            />

            {/* Скруглённый квадрат — левее центра, повёрнут */}
            <div
                className="hidden lg:block absolute left-[6%] top-[15%] w-24 h-24 rounded-2xl opacity-25"
                style={{
                    background: 'linear-gradient(145deg, #388e3c, #a5d6a7)',
                    transform: 'rotate(18deg)',
                }}
            />
            {/* Скруглённый квадрат — правее центра */}
            <div
                className="hidden lg:block absolute right-[6%] top-[15%] w-24 h-24 rounded-2xl opacity-25"
                style={{
                    background: 'linear-gradient(145deg, #388e3c, #a5d6a7)',
                    transform: 'rotate(-18deg)',
                }}
            />

            {/* Тонкое кольцо слева */}
            <div
                className="hidden lg:block absolute left-[12%] bottom-[10%] w-16 h-16 rounded-full opacity-40"
                style={{ border: '3px solid #4caf50' }}
            />
            {/* Тонкое кольцо справа */}
            <div
                className="hidden lg:block absolute right-[12%] bottom-[10%] w-16 h-16 rounded-full opacity-40"
                style={{ border: '3px solid #4caf50' }}
            />

            {/* Маленький треугольник — верх слева */}
            <div
                className="hidden lg:block absolute left-[22%] top-[10%] w-10 h-10 opacity-30"
                style={{
                    background: '#43a047',
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                }}
            />
            {/* Маленький треугольник — верх справа */}
            <div
                className="hidden lg:block absolute right-[22%] top-[10%] w-10 h-10 opacity-30"
                style={{
                    background: '#43a047',
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                    transform: 'rotate(180deg)',
                }}
            />

            {/* Контент */}
            <div className="relative z-10 flex flex-col items-center text-center gap-5 px-6 sm:px-10">

                <p className="font-['Roboto'] font-medium text-sm text-[#2d6a2d] tracking-wide">
                    Integrations
                </p>

                <h2 className="font-['Playfair_Display'] font-bold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] text-[#0d1f0d] max-w-[560px] lg:max-w-[680px]">
                    Seamless Integrations for Effortless Workflow
                </h2>

                <p className="font-['Roboto'] font-normal text-sm sm:text-base text-[#3a5c3a] max-w-[380px] sm:max-w-[480px] leading-relaxed">
                    Connect with your favorite tools to optimize efficiency and streamline your processes.
                </p>

                {/* Кнопка с hover-эффектом */}
                <button className="
                    group mt-2
                    flex items-center gap-2.5
                    px-6 sm:px-8 py-3 sm:py-3.5
                    bg-white text-[#0d1f0d]
                    font-['Roboto'] font-semibold text-sm sm:text-base
                    rounded-xl
                    shadow-md
                    transition-all duration-300
                    hover:bg-[#0d1f0d] hover:text-white hover:shadow-lg hover:scale-[1.03]
                    active:scale-[0.98]
                ">
                    Start Integrating Now
                    {/* Стрелка при hover двигается вправо */}
                    <svg
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        width="18" height="18" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="transition-colors duration-300 group-hover:stroke-white"
                            d="M11.6667 15.8337L17.5 10.0003L11.6667 4.16699M17.5 10.0003L2.5 10.0003"
                            stroke="#0d1f0d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        />
                    </svg>
                </button>

            </div>

        </section>
    );
};

export default Integretion;
