const Hero = () => {
    return (
        <section className="flex items-center justify-between gap-10 py-16">

            {/* Левая часть */}
            <div className="flex flex-col gap-8 max-w-[520px] w-full">

                {/* Заголовок + описание */}
                <div className="flex flex-col gap-5">
                    <h1 className="font-['Playfair_Display'] text-[64px] font-bold leading-[1.1] text-white">
                        Design unique <span className="text-[#7BE385] font-extrabold">ideas</span>, elevate results.
                    </h1>
                    <p className="font-['Roboto'] font-normal text-[#B1B6B8] text-base leading-relaxed">
                        Transform your workflow with unique designs that boost creativity, improve efficiency, and drive results.
                    </p>
                </div>

                {/* Кнопки */}
                <div className="flex items-center gap-4">
                    <button className="px-7 py-3.5 bg-white text-[#041117] font-['Roboto'] font-semibold text-base rounded-lg hover:bg-gray-100 transition">
                        Book a Demo
                    </button>
                    <button className="flex items-center gap-2.5 px-7 py-3.5 bg-[#81E48A] text-[#041117] font-['Roboto'] font-semibold text-base rounded-lg hover:bg-[#6FD97A] transition">
                        Start Free Trial
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 15.8337L17.5 10.0003L11.6667 4.16699M17.5 10.0003L2.5 10.0003" stroke="#0B160A" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                {/* Полупрозрачная секция Trusted By */}
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl px-8 py-6 flex flex-col gap-5">
                    <p className="font-['Roboto'] text-[#81E48A] text-sm font-medium tracking-wide">Trusted By</p>

                    <div className="flex items-center gap-5">
                        <h2 className="font-['Playfair_Display'] text-white text-2xl font-bold whitespace-nowrap">
                            Thrive with 3,500+ businesses
                        </h2>
                        <svg width="78" height="12" viewBox="0 0 78 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                            <path d="M-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM66.4401 5.77344C66.4401 8.71896 68.8279 11.1068 71.7734 11.1068C74.719 11.1068 77.1068 8.71896 77.1068 5.77344C77.1068 2.82792 74.719 0.440104 71.7734 0.440104C68.8279 0.440104 66.4401 2.82792 66.4401 5.77344ZM5.77344 6.77344H71.7734V4.77344H5.77344V6.77344Z" fill="#7BE385"/>
                            <path d="M-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM66.4401 5.77344C66.4401 8.71896 68.8279 11.1068 71.7734 11.1068C74.719 11.1068 77.1068 8.71896 77.1068 5.77344C77.1068 2.82792 74.719 0.440104 71.7734 0.440104C68.8279 0.440104 66.4401 2.82792 66.4401 5.77344ZM5.77344 6.77344H71.7734V4.77344H5.77344V6.77344Z" fill="url(#paint0_radial)" fillOpacity="0.2"/>
                            <defs>
                                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(38.7734 6.27344) scale(33 0.5)">
                                    <stop stopColor="white"/>
                                    <stop offset="1" stopColor="white" stopOpacity="0.4"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Логотипы компаний */}
                    <div className="flex items-center gap-8 text-white font-['Roboto'] font-semibold text-base">
                        <div className="flex items-center gap-2.5">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                                <path d="M13 5l-4 7h4l-2 7 6-8h-4l2-6z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Boltshift</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3L21 8.5V15.5L12 21L3 15.5V8.5L12 3Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                                <path d="M12 3v18M3 8.5l9 6 9-6" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                            </svg>
                            <span>GlobalBank</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7l10-4 10 4-10 4L2 7z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                                <path d="M2 7v6l10 4 10-4V7" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                            </svg>
                            <span>Lightbox</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Правая часть — dashboard */}
            <div className="hidden lg:block flex-shrink-0 -ml-[100px] w-[70%]">
                <img src="/images/dashboard.png" alt="Dashboard preview" className="w-full h-auto rounded-2xl"/>
            </div>

        </section>
    );
};

export default Hero;
