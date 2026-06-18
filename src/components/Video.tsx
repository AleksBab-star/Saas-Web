import { useEffect, useRef } from 'react';

const AnimatedCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let t = 0;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const layers = [
            { amp: 0.06,  freq: 1.6, speed: 0.0025, alpha: 0.20, color: '#7BE385', yOffset: 0.38 },
            { amp: 0.05,  freq: 2.1, speed: 0.0035, alpha: 0.13, color: '#4ade80', yOffset: 0.52 },
            { amp: 0.045, freq: 1.3, speed: 0.002,  alpha: 0.11, color: '#81E48A', yOffset: 0.66 },
            { amp: 0.055, freq: 2.6, speed: 0.004,  alpha: 0.09, color: '#2dd4bf', yOffset: 0.57 },
            { amp: 0.035, freq: 1.0, speed: 0.0018, alpha: 0.16, color: '#34d399', yOffset: 0.44 },
        ];

        const draw = () => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            // Background
            const bg = ctx.createLinearGradient(0, 0, width, height);
            bg.addColorStop(0, '#040e0e');
            bg.addColorStop(1, '#071a14');
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, width, height);

            // Wave layers
            layers.forEach((l) => {
                const phase = t * l.speed * 60;

                // Filled wave
                ctx.beginPath();
                ctx.moveTo(0, height);
                for (let x = 0; x <= width; x += 4) {
                    const y =
                        height * l.yOffset +
                        Math.sin((x / width) * Math.PI * 2 * l.freq + phase) * height * l.amp +
                        Math.sin((x / width) * Math.PI * 2 * l.freq * 0.5 + phase * 0.7) * height * l.amp * 0.4;
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(width, height);
                ctx.closePath();

                const alphaHex = Math.round(l.alpha * 255).toString(16).padStart(2, '0');
                const grad = ctx.createLinearGradient(0, height * (l.yOffset - l.amp * 3), 0, height);
                grad.addColorStop(0, l.color + alphaHex);
                grad.addColorStop(1, l.color + '00');
                ctx.fillStyle = grad;
                ctx.fill();

                // Glowing stroke on wave crest
                ctx.beginPath();
                for (let x = 0; x <= width; x += 4) {
                    const y =
                        height * l.yOffset +
                        Math.sin((x / width) * Math.PI * 2 * l.freq + phase) * height * l.amp +
                        Math.sin((x / width) * Math.PI * 2 * l.freq * 0.5 + phase * 0.7) * height * l.amp * 0.4;
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                const strokeAlpha = Math.round(Math.min(l.alpha * 2, 0.5) * 255).toString(16).padStart(2, '0');
                ctx.strokeStyle = l.color + strokeAlpha;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            });

            // Floating particles
            for (let i = 0; i < 45; i++) {
                const px = ((Math.sin(i * 127.1) * 0.5 + 0.5) * width + t * (i % 2 === 0 ? 0.08 : -0.06)) % width;
                const py = (Math.sin(i * 311.7 + t * 0.002 * ((i % 5) + 1)) * 0.5 + 0.5) * height;
                const r = 0.8 + (i % 3) * 0.7;
                const a = 0.1 + (Math.sin(i + t * 0.01) * 0.5 + 0.5) * 0.2;
                ctx.beginPath();
                ctx.arc((px + width) % width, py, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(123,227,133,${a})`;
                ctx.fill();
            }

            t += 1;
            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const Video = () => (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 'clamp(320px, 50vw, 560px)' }}>

        {/* Canvas — full background */}
        <AnimatedCanvas />

        {/* Тёмный оверлей */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Контент */}
        <div className="relative z-10 h-full min-h-[320px] flex flex-col items-center justify-center text-center px-6 sm:px-10 gap-4 py-14 sm:py-16 lg:py-20">
            <p className="font-['Roboto'] font-medium text-xs sm:text-sm text-[#7BE385] tracking-wide">
                Strategic Solutions
            </p>
            <h2 className="font-['Playfair_Display'] font-bold text-[26px] sm:text-[38px] lg:text-[52px] leading-[1.12] text-white max-w-[320px] sm:max-w-[520px] lg:max-w-[700px]">
                Identify the Best Plan for Your Needs
            </h2>
            <p className="font-['Roboto'] text-sm sm:text-base text-white/60 max-w-[280px] sm:max-w-[400px] lg:max-w-[480px] leading-relaxed">
                Choosing the right plan ensures you meet your objectives while maximizing efficiency and growth.
            </p>
            <button className="
                mt-1
                px-6 sm:px-8 py-3 sm:py-3.5
                bg-[#81E48A] text-[#041117]
                font-['Roboto'] font-semibold text-sm sm:text-base
                rounded-xl
                transition-all duration-300
                hover:bg-[#6FD97A] hover:scale-[1.04] hover:shadow-xl hover:shadow-green-900/40
                active:scale-[0.98]
            ">
                Find Your Plan
            </button>
        </div>

    </section>
);

export default Video;
