const cards = [
    {
        title: 'Add Team Members',
        description: 'Sign up, get started, and enjoy seamless collaboration for as long as you need.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1113 1.62109C13.7908 1.62117 15.9727 3.80297 15.9727 6.48242C15.9726 9.16181 13.7907 11.3437 11.1113 11.3438C8.43188 11.3438 6.25008 9.16185 6.25 6.48242C6.25 3.80292 8.43183 1.62109 11.1113 1.62109ZM11.1113 2.08398C8.68897 2.08398 6.71289 4.06007 6.71289 6.48242C6.71297 8.90471 8.68902 10.8809 11.1113 10.8809C13.5336 10.8808 15.5097 8.90466 15.5098 6.48242C15.5098 4.06012 13.5336 2.08406 11.1113 2.08398Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
                <path d="M11.1113 13.6582C12.0064 13.6582 12.8807 13.7738 13.7266 14.0117C13.8501 14.0451 13.9216 14.1682 13.8867 14.2949C13.8535 14.4152 13.7318 14.4871 13.6055 14.4531C12.8031 14.2278 11.9646 14.1211 11.1113 14.1211C6.95941 14.1211 3.38877 16.8284 3.38867 20.3711C3.38867 20.495 3.28117 20.6025 3.15723 20.6025C3.03333 20.6025 2.92578 20.495 2.92578 20.3711C2.92588 16.7501 6.51407 13.6582 11.1113 13.6582Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
                <path d="M16.667 12.7305C17.7953 12.7306 18.8625 13.2118 19.5879 14.0361C20.2383 14.7625 20.6016 15.6901 20.6016 16.666C20.6015 16.9777 20.5604 17.2879 20.4795 17.5791C20.3924 17.9679 20.2368 18.3532 20.0254 18.6865C19.333 19.8697 18.0432 20.6005 16.667 20.6006C15.6912 20.6006 14.7646 20.2373 14.043 19.582L13.8252 19.3799C13.6245 19.1761 13.4451 18.9429 13.2979 18.6914C12.8842 17.9143 12.7315 17.2971 12.7314 16.666C12.7314 15.6946 13.0802 14.7822 13.7119 14.0635L13.8418 13.9229C14.5872 13.1526 15.5877 12.7305 16.667 12.7305Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
                <path d="M15.2871 16.418H18.0557C18.1796 16.418 18.287 16.5255 18.2871 16.6494C18.2871 16.7734 18.1796 16.8809 18.0557 16.8809H15.2871C15.1632 16.8808 15.0557 16.7733 15.0557 16.6494C15.0557 16.5256 15.1632 16.418 15.2871 16.418Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
                <path d="M16.667 15.0645C16.7909 15.0645 16.8984 15.172 16.8984 15.2959V18.0645C16.8984 18.1936 16.795 18.2959 16.667 18.2959C16.5431 18.2958 16.4355 18.1884 16.4355 18.0645V15.2959C16.4356 15.172 16.5431 15.0645 16.667 15.0645Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
            </svg>
        ),
    },
    {
        title: 'Instant Analytics',
        description: 'Join now to access powerful real-time insights tailored to your needs.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1113 1.62109C16.3462 1.62131 20.6016 5.87738 20.6016 11.1123C20.6013 16.347 16.3461 20.6023 11.1113 20.6025C5.87641 20.6025 1.62033 16.3472 1.62012 11.1123C1.62012 9.02762 2.28214 7.05084 3.53613 5.39062C3.60918 5.29305 3.75363 5.27145 3.85938 5.35156C3.96554 5.43222 3.98172 5.57777 3.9082 5.6748C2.71764 7.24602 2.08301 9.13183 2.08301 11.1123C2.08322 16.09 6.13355 20.1396 11.1113 20.1396C16.0889 20.1394 20.1385 16.0899 20.1387 11.1123C20.1387 6.13453 16.0891 2.0842 11.1113 2.08398C10.9874 2.08398 10.8799 1.97648 10.8799 1.85254C10.8799 1.72864 10.9874 1.62109 11.1113 1.62109Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
                <path d="M11.1113 4.39844C14.8093 4.39844 17.8241 7.41338 17.8242 11.1113C17.8242 14.8093 14.8093 17.8242 11.1113 17.8242C7.41338 17.8241 4.39844 14.8093 4.39844 11.1113C4.39852 10.9875 4.50603 10.8799 4.62988 10.8799C4.75378 10.8799 4.86124 10.9874 4.86133 11.1113C4.86133 14.5614 7.66126 17.3612 11.1113 17.3613C14.5615 17.3613 17.3613 14.5615 17.3613 11.1113C17.3612 7.66126 14.5614 4.86133 11.1113 4.86133C10.9874 4.86124 10.8799 4.75378 10.8799 4.62988C10.8799 4.50603 10.9875 4.39852 11.1113 4.39844Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
                <path d="M11.1113 7.17578C13.2816 7.17578 15.0469 8.94109 15.0469 11.1113C15.0467 13.2814 13.2815 15.0459 11.1113 15.0459C10.9874 15.0458 10.8799 14.9384 10.8799 14.8145C10.8801 14.6907 10.9875 14.5831 11.1113 14.583C13.0243 14.583 14.5838 13.0243 14.584 11.1113C14.584 9.19823 13.0244 7.63867 11.1113 7.63867C10.9874 7.63861 10.8799 7.53113 10.8799 7.40723C10.8799 7.28337 10.9875 7.17584 11.1113 7.17578Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
            </svg>
        ),
    },
    {
        title: 'Custom Experience',
        description: 'Sign up and explore a customizable platform designed to fit your preferences.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1113 1.68555C11.2977 1.68559 11.5815 1.7258 11.8955 1.91602C12.2087 2.10574 12.5814 2.46239 12.9189 3.1416L14.5518 6.4082C14.6618 6.62034 14.8551 6.80745 15.0352 6.94043C15.1921 7.05626 15.3938 7.1708 15.6025 7.22461L18.6465 7.73535C19.3735 7.85637 19.8145 8.10433 20.084 8.34473C20.3547 8.58626 20.4758 8.84264 20.5293 9.0166C20.5849 9.19757 20.6331 9.47972 20.5537 9.83398C20.4746 10.1868 20.262 10.6436 19.7461 11.1641L17.4492 13.4697C17.2623 13.657 17.1434 13.9199 17.0771 14.1523C17.0106 14.3861 16.9749 14.669 17.0283 14.9209L17.6875 17.7715C17.8852 18.6316 17.822 19.2045 17.6924 19.5771C17.5634 19.9478 17.3555 20.1554 17.2051 20.2666C17.0344 20.3883 16.7584 20.5283 16.3516 20.5283C15.9624 20.5283 15.4129 20.4036 14.6787 19.9717L11.9121 18.334C11.5939 18.181 11.3357 18.1436 11.1123 18.1436C10.8898 18.1436 10.6303 18.181 10.4092 18.2861L7.54199 19.9717C6.77952 20.4243 6.2148 20.5372 5.82129 20.5254C5.43278 20.5136 5.17174 20.3796 5.01465 20.2666C4.86384 20.1543 4.65594 19.9459 4.52637 19.5762C4.39611 19.2044 4.33229 18.6328 4.53418 17.7734L5.19141 14.9287C5.2521 14.6712 5.21487 14.3841 5.14844 14.1543C5.08072 13.9201 4.95791 13.6562 4.77148 13.4697L2.47559 11.1729C1.95447 10.6517 1.74 10.1953 1.66113 9.84375C1.58196 9.49067 1.63249 9.21044 1.69043 9.0332C1.74898 8.85417 1.87321 8.59561 2.14453 8.35352C2.41461 8.11254 2.85422 7.86498 3.57617 7.74316L6.5293 7.25391C6.7696 7.21288 7.0082 7.08168 7.1875 6.94824C7.36436 6.8166 7.55652 6.62825 7.66309 6.41113L9.30273 3.14355C9.64108 2.46269 10.0131 2.10577 10.3262 1.91602C10.6403 1.7257 10.9249 1.68555 11.1113 1.68555Z" fill="#292D32" stroke="#041117" strokeWidth="0.925926"/>
            </svg>
        ),
    },
];

const Startup_upgrade = () => {
    return (
        <section className="bg-[#F7F7F7] w-full">
            <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-[140px] py-16 lg:py-20">

                {/* Верхний блок: текст + картинка */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-10">

                    {/* Мобайл: текст сверху */}
                    <div className="flex flex-col gap-5 lg:hidden">
                        <p className="font-['Roboto'] font-medium text-sm text-[#576165]">Growth Solutions</p>
                        <h1 className="font-['Playfair_Display'] font-semibold text-[36px] leading-[1.15] text-[#041117]">Take your startup to the next level.</h1>
                        <p className="font-['Roboto'] font-normal text-base text-[#576165] leading-relaxed">Stain offers innovative tools to accelerate your startup's growth, optimize workflows, and achieve success faster.</p>
                        <button className="flex items-center gap-2 px-6 py-3.5 bg-[#81E48A] rounded-lg hover:bg-[#6FD97A] transition w-fit">
                            <span className="text-[#041117] font-['Roboto'] font-semibold text-base">Explore Growth Tools</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0244 4.94141L17.0827 9.99974L12.0244 15.0581" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.91699 10H16.942" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* Картинка с формой плюса */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="relative w-[320px] h-[320px] sm:w-[385px] sm:h-[385px]">
                            {/* 
                                Форма: сетка 3x3, угловые ячейки вырезаны скруглёнными вырезами (concave).
                                Размер ячейки ~1/3 от общего (≈128px при 385px).
                                Радиус скругления вырезов ~40px.
                            */}
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{
                                    clipPath: `path('
                                        M 128 0
                                        L 257 0
                                        L 257 40
                                        Q 257 0 297 0
                                        L 385 0
                                        L 385 88
                                        Q 385 128 345 128
                                        L 385 128
                                        L 385 257
                                        L 345 257
                                        Q 385 257 385 297
                                        L 385 385
                                        L 297 385
                                        Q 257 385 257 345
                                        L 257 385
                                        L 128 385
                                        L 128 345
                                        Q 128 385 88 385
                                        L 0 385
                                        L 0 297
                                        Q 0 257 40 257
                                        L 0 257
                                        L 0 128
                                        L 40 128
                                        Q 0 128 0 88
                                        L 0 0
                                        L 88 0
                                        Q 128 0 128 40
                                        Z
                                    ')`
                                }}
                            >
                                <img
                                    src="/images/BlackWuman.png"
                                    alt="Woman"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Карточка Total Balance поверх */}
                            <div className="absolute bottom-[-30px] right-[-10px] sm:right-[-20px]">
                                <img
                                    src="/images/Total_Balance.png"
                                    alt="Total Balance"
                                    className="w-[200px] sm:w-[230px] drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Десктоп: текст справа */}
                    <div className="hidden lg:flex flex-col gap-5 lg:w-1/2">
                        <p className="font-['Roboto'] font-medium text-sm text-[#576165]">Growth Solutions</p>
                        <h1 className="font-['Playfair_Display'] font-semibold text-[52px] leading-[1.1] text-[#041117]">Take your startup to the next level.</h1>
                        <p className="font-['Roboto'] font-normal text-base text-[#576165] leading-relaxed max-w-[460px]">Stain offers innovative tools to accelerate your startup's growth, optimize workflows, and achieve success faster.</p>
                        <button className="flex items-center gap-2 px-6 py-3.5 bg-[#81E48A] rounded-lg hover:bg-[#6FD97A] transition w-fit">
                            <span className="text-[#041117] font-['Roboto'] font-semibold text-base">Explore Growth Tools</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0244 4.94141L17.0827 9.99974L12.0244 15.0581" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.91699 10H16.942" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Нижние карточки */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-14 lg:mt-16 pt-10">
                    {cards.map((card, i) => (
                        <div key={i} className="flex flex-col gap-4 flex-1">
                            <div className="w-10 h-10 rounded-full border border-[#041117]/15 flex items-center justify-center bg-white">
                                {card.icon}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-['Roboto'] font-semibold text-[#041117] text-lg">{card.title}</h3>
                                <p className="font-['Roboto'] font-normal text-[#576165] text-base leading-relaxed">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Startup_upgrade;
