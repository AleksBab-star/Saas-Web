import { useState } from 'react';

const IconHeart = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.96 1.89941C13.094 1.89957 14.833 3.64882 14.833 5.79297C14.833 7.98251 13.8676 9.82578 12.5781 11.2373C11.2856 12.6521 9.68495 13.6128 8.46484 14.0312L8.45996 14.0332C8.34028 14.0762 8.18117 14.0996 8 14.0996C7.81857 14.0996 7.65885 14.0763 7.53906 14.0332L7.53418 14.0312L7.30176 13.9463C6.11593 13.4908 4.63282 12.5626 3.4209 11.2354C2.13125 9.82288 1.16602 7.9791 1.16602 5.79297C1.16607 3.6424 2.90554 1.89941 5.04004 1.89941C6.07809 1.89951 7.04582 2.30452 7.7627 3.02734L8 3.2666L8.23633 3.02734C8.95331 2.30434 9.9217 1.89941 10.96 1.89941Z" fill="#041117" stroke="#041117" strokeWidth="0.666667"/>
    </svg>
);

const IconAnalytics = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.48535 1.86816C8.88997 1.56813 9.49001 1.47672 10.4609 1.69922L10.9004 1.81348C12.444 2.26162 13.7383 3.55603 14.1865 5.09961C14.5459 6.32883 14.4748 7.05191 14.1338 7.50684L14.1328 7.50781C13.9239 7.78704 13.6213 7.9534 13.2725 8.0498C12.9211 8.14685 12.5431 8.16699 12.2129 8.16699H10C9.23289 8.16699 8.71159 7.95187 8.37598 7.57617C8.03408 7.19333 7.83301 6.58664 7.83301 5.7002V3.78711C7.83301 3.4568 7.85371 3.07837 7.9502 2.72656C8.04583 2.37806 8.21033 2.07667 8.48535 1.86816Z" fill="#041117" stroke="#041117" strokeWidth="0.666667"/>
        <path d="M6.13672 2.50684C6.22994 2.48865 6.31719 2.54537 6.33984 2.63477C6.35158 2.70424 6.32203 2.76934 6.26855 2.80664L6.20703 2.83398C3.20349 3.45287 1.20406 6.25731 1.5498 9.29785L1.59082 9.59375C1.98743 12.0417 3.97186 14.0256 6.41992 14.4219C9.58844 14.9296 12.5504 12.8896 13.1797 9.77246L13.1807 9.77051C13.1938 9.70334 13.2466 9.6528 13.3096 9.63965H13.376C13.465 9.65703 13.5237 9.74529 13.5068 9.83301C12.9057 12.7883 10.3242 14.833 7.37988 14.833C7.04325 14.833 6.70163 14.8077 6.36133 14.751C3.77428 14.3327 1.66605 12.2307 1.24902 9.64648C0.710681 6.31509 2.85562 3.17797 6.13574 2.50586L6.13672 2.50684Z" fill="#041117" stroke="#041117" strokeWidth="0.666667"/>
    </svg>
);

const IconStar = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1.21387C8.13417 1.2139 8.33846 1.24303 8.56445 1.37988C8.78993 1.51648 9.05779 1.77369 9.30078 2.2627L10.4746 4.61035C10.5568 4.76696 10.6956 4.90133 10.8252 4.99707C10.9543 5.09238 11.125 5.1879 11.2979 5.2168L13.4248 5.56934C13.9484 5.65712 14.2659 5.8357 14.46 6.00879C14.6549 6.18269 14.7427 6.36694 14.7812 6.49219C14.8213 6.62247 14.856 6.82589 14.7988 7.08105C14.7489 7.30351 14.6252 7.58358 14.3457 7.90137L12.5645 9.69824C12.4295 9.83316 12.3427 10.0228 12.2949 10.1904C12.247 10.3587 12.2223 10.5619 12.2607 10.7432L12.7354 12.7959C12.8778 13.4153 12.8317 13.8283 12.7383 14.0967C12.6456 14.3627 12.4969 14.5116 12.3887 14.5918C12.2659 14.6796 12.0671 14.7812 11.7734 14.7812C11.4932 14.7812 11.0971 14.6909 10.5684 14.3799L8.57617 13.2012L8.4375 13.1357C8.29523 13.0837 8.13887 13.0645 8.00098 13.0645C7.86377 13.0645 7.70664 13.0836 7.56445 13.1367L7.43066 13.2002L5.43066 14.3809C4.88128 14.7062 4.47478 14.7868 4.19141 14.7783C3.91126 14.7699 3.72346 14.6732 3.61035 14.5918C3.50116 14.5108 3.35186 14.3611 3.25879 14.0957C3.16497 13.828 3.1192 13.4158 3.26465 12.7969L3.73828 10.749C3.78063 10.5634 3.75485 10.3568 3.70703 10.1914C3.65827 10.0228 3.56978 9.83247 3.43555 9.69824L1.78223 8.04492C1.40703 7.6697 1.25306 7.34102 1.19629 7.08789C1.13934 6.8339 1.17513 6.63251 1.2168 6.50488C1.25892 6.37603 1.34871 6.18991 1.54395 6.01562C1.73845 5.84208 2.05515 5.66385 2.5752 5.57617L4.70117 5.22266C4.87419 5.19382 5.04571 5.099 5.1748 5.00293C5.30337 4.9072 5.44334 4.76958 5.51953 4.61133L6.69727 2.26367C6.94117 1.77379 7.20912 1.51651 7.43457 1.37988C7.66077 1.24285 7.8658 1.21387 8 1.21387Z" fill="#041117" stroke="#041117" strokeWidth="0.666667"/>
    </svg>
);

const IconClock = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#BEC1C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977" stroke="#BEC1C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const IconBook = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.7397V4.6697C22 3.4697 21.02 2.5797 19.83 2.6797H19.77C17.67 2.8597 14.48 3.9297 12.7 5.0497L12.53 5.1597C12.24 5.3397 11.76 5.3397 11.47 5.1597L11.22 5.0097C9.44 3.8997 6.26 2.8397 4.16 2.6697C2.97 2.5697 2 3.4697 2 4.6597V16.7397C2 17.6997 2.78 18.5997 3.74 18.7197L4.03 18.7597C6.2 19.0497 9.55 20.1497 11.47 21.1997L11.51 21.2197C11.78 21.3697 12.21 21.3697 12.47 21.2197C14.39 20.1597 17.75 19.0497 19.93 18.7597L20.26 18.7197C21.22 18.5997 22 17.6997 22 16.7397Z" stroke="#BEC1C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5.49023V20.4902" stroke="#BEC1C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.75 8.49023H5.5" stroke="#BEC1C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 11.4902H5.5" stroke="#BEC1C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const blogs = [
    {
        id: 0,
        image: '/images/blogs/pexels-mart-production-7550581 (1).png',
        tag: 'Designs',
        tagIcon: <IconHeart />,
        title: '3 experiments to improve your mobile funnel',
        excerpt: '3 experiments to improve your mobile funnel — insights from real-world testing.',
        date: 'April 21, 2023',
        readTime: '1 min to read',
    },
    {
        id: 1,
        image: '/images/blogs/pexels-mart-production-7550581.png',
        tag: 'Analytics',
        tagIcon: <IconAnalytics />,
        title: 'The Power of Real-Time Analytics',
        excerpt: 'How live data can drive smarter business decisions.',
        date: 'April 21, 2023',
        readTime: '1 min to read',
    },
    {
        id: 2,
        image: '/images/blogs/pexels-mart-production-7550581 (2).png',
        tag: 'Customization',
        tagIcon: <IconStar />,
        title: 'Customizing Your User Experience',
        excerpt: 'Create a platform that adapts to your specific needs.',
        date: 'April 21, 2023',
        readTime: '1 min to read',
    },
];

const BlogCard = ({ blog }: { blog: typeof blogs[0] }) => (
    <div className="flex flex-col bg-[#0b1a16] border border-white/[0.07] rounded-2xl overflow-hidden cursor-pointer group hover:border-white/[0.15] transition-all duration-300">
        {/* Картинка */}
        <div className="w-full h-52 overflow-hidden flex-shrink-0">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>

        {/* Контент */}
        <div className="flex flex-col gap-3 p-5 flex-1">
            {/* Тег */}
            <span className="inline-flex items-center gap-1.5 self-start bg-[#81E48A] text-[#041117] font-['Roboto'] font-semibold text-sm px-3 py-1 rounded-full">
                {blog.tagIcon}
                {blog.tag}
            </span>

            {/* Заголовок */}
            <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#F1FCF2] leading-snug group-hover:text-[#7BE385] transition-colors duration-300">
                {blog.title}
            </h3>

            {/* Описание */}
            <p className="font-['Roboto'] text-base text-[#8d9496] leading-relaxed flex-1">
                {blog.excerpt}
            </p>

            {/* Дата + время чтения */}
            <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/[0.06]">
                <span className="flex items-center gap-2 font-['Roboto'] text-base text-[#6b7577]">
                    <IconClock />
                    {blog.date}
                </span>
                <span className="flex items-center gap-2 font-['Roboto'] text-base text-[#6b7577]">
                    <IconBook />
                    {blog.readTime}
                </span>
            </div>
        </div>
    </div>
);

const Blogs = () => {
    const [page, setPage] = useState(0);
    const totalPages = blogs.length; // 1 card per page on mobile

    return (
        <section className="py-16 lg:py-24 bg-[#060f0f]">
            <div className="site-container">

                {/* Заголовок */}
                <div className="flex flex-col gap-2 mb-10 lg:mb-12">
                    <p className="font-['Roboto'] font-medium text-base text-[#7BE385]">Our Blogs</p>
                    <h2 className="font-['Playfair_Display'] font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-[#F1FCF2]">
                        Explore Our Latest Resources
                    </h2>
                </div>

                {/* ── DESKTOP: 3 колонки ── */}
                <div className="hidden lg:grid grid-cols-3 gap-5">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* ── MOBILE: 1 карточка + навигация ── */}
                <div className="lg:hidden flex flex-col gap-6">
                    <BlogCard blog={blogs[page]} />

                    {/* Кнопки */}
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
                            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Previous"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button
                            onClick={() => setPage((p) => (p + 1) % totalPages)}
                            className="w-12 h-12 rounded-full bg-[#7BE385] flex items-center justify-center hover:bg-[#6FD97A] transition-colors"
                            aria-label="Next"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 5L12.5 10L7.5 15" stroke="#041117" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2">
                        {blogs.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`transition-all duration-300 rounded-full ${
                                    i === page ? 'w-6 h-2 bg-[#7BE385]' : 'w-2 h-2 bg-white/20'
                                }`}
                                aria-label={`Blog ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Blogs;
