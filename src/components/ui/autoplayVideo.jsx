import { useEffect, useRef, useState } from "react";

export default function AutoPlayVideo({
    src,
    sources = [],
    poster = "",
    loop = true,
    threshold = 0.6,
    className = "",
}) {
    const ref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Handle autoplay when visible
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && e.intersectionRatio >= threshold) {
                        el.play().then(() => setIsPlaying(true)).catch(() => { });
                    } else {
                        el.pause();
                        setIsPlaying(false);
                    }
                });
            },
            { threshold: [threshold] }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [threshold]);

    // Toggle play/pause on click
    const togglePlay = () => {
        const el = ref.current;
        if (!el) return;

        if (el.paused) {
            el.play().then(() => setIsPlaying(true)).catch(() => { });
        } else {
            el.pause();
            setIsPlaying(false);
        }
    };

    return (
        <video
            ref={ref}
            poster={poster}
            muted
            playsInline
            preload="metadata"
            loop={loop}
            onClick={togglePlay}
            data-cursor-icon={isPlaying ? "stop" : "start"}
            className={`h-full w-full rounded-lg object-cover ${className}`}
        >
            {sources.length > 0 ? (
                sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)
            ) : (
                <source src={src} type="video/mp4" />
            )}
        </video>
    );
}