import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import AymaneLab from "@/assets/AymaneLab.jpeg";
import AymanePhilipp from "@/assets/AymanePhilipp.jpeg";
import MacLab from "@/assets/MacLab.jpeg";
import MacGift from "@/assets/MacGift.jpeg";
import AymaneFlo from "@/assets/AymaneFlo.jpeg";
import LimsTeam from "@/assets/LimsTeam.jpg";

/**
 * Masonry stable Safari (sans columns/break-inside)
 * Fix du "petit espace gris" :
 * - on mesure l'item (scrollHeight) au lieu de l'image (getBoundingClientRect)
 * - Math.round au lieu de Math.ceil
 * - items-start + align-top sur img
 */

function useIsomorphicLayoutEffect(cb, deps) {
    const useEff = typeof window === "undefined" ? useEffect : useLayoutEffect;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useEff(cb, deps);
}

function useMasonry(gridRef, deps = []) {
    useIsomorphicLayoutEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const toNum = (v) => {
            const n = parseFloat(v);
            return Number.isFinite(n) ? n : 0;
        };

        const resizeItem = (item) => {
            const styles = getComputedStyle(grid);
            const rowHeight = toNum(styles.getPropertyValue("grid-auto-rows"));
            const gap =
                toNum(styles.getPropertyValue("gap")) ||
                toNum(styles.getPropertyValue("grid-row-gap"));

            // Mesure fiable (contenu réel de l'item)
            // scrollHeight évite les petits pixels "fantômes" WebKit
            const height = item.scrollHeight;

            // round réduit les sur-allocations => plus de bande grise en bas
            const span = Math.max(1, Math.round((height + gap) / (rowHeight + gap)));
            item.style.gridRowEnd = `span ${span}`;
        };

        const layout = () => {
            const items = grid.querySelectorAll("[data-masonry-item]");
            items.forEach(resizeItem);
        };

        // Throttle via RAF
        let raf = 0;
        const schedule = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(layout);
        };

        // 1) initial
        schedule();

        // 2) images load (lazy incl.)
        const imgs = Array.from(grid.querySelectorAll("img"));
        const onImg = () => schedule();
        imgs.forEach((img) => {
            if (img.complete) return;
            img.addEventListener("load", onImg, { once: true });
            img.addEventListener("error", onImg, { once: true });
        });

        // 3) window resize
        window.addEventListener("resize", schedule);

        // 4) ResizeObserver
        let ro;
        if ("ResizeObserver" in window) {
            ro = new ResizeObserver(schedule);
            ro.observe(grid);
            grid.querySelectorAll("[data-masonry-item]").forEach((el) => ro.observe(el));
        }

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", schedule);
            imgs.forEach((img) => {
                img.removeEventListener("load", onImg);
                img.removeEventListener("error", onImg);
            });
            if (ro) ro.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

export default function Masonry() {
    const gridRef = useRef(null);

    const images = useMemo(
        () => [
            { src: AymaneLab, alt: "Aymane Lab", fade: false },
            { src: AymanePhilipp, alt: "Aymane Philipp", fade: false },
            { src: MacLab, alt: "Mac Lab", fade: false },
            { src: MacGift, alt: "Mac Gift", fade: true },
            { src: AymaneFlo, alt: "Aymane Flo", fade: true },
            { src: LimsTeam, alt: "Lims Team", fade: true },
        ],
        []
    );

    useMasonry(gridRef, [images.length]);

    return (
        <div className="mx-auto max-w-6xl mt-12">
            <div
                ref={gridRef}
                className={[
                    "grid gap-4 items-start", // important
                    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                    "[grid-auto-rows:1px]",
                ].join(" ")}
            >
                {images.map((img, i) => (
                    <figure
                        data-masonry-item
                        className={`relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm ${img.fade
                            ? "[mask-image:linear-gradient(to_bottom,black_75%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
                            : ""
                            }`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="block w-full h-auto align-top"
                        />
                    </figure>
                ))}
            </div>
        </div>
    );
}