import React from "react";
import FadeIn from "../components/FadeIn";

// Replace/extend with your real reads
const books = [
    {
        id: 1,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        cover: "https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg",
        category: "Finance",
    },

];

function BookCell({ title, author, cover, category }) {
    return (
        <article className="flex flex-col items-center text-center gap-3 sm:gap-4 py-8 px-4  bg-transparent">
            {/* Cover (centered, small) */}
            <div className="h-40 w-28 sm:h-44 sm:w-32 md:h-48 md:w-36 bg-ultralightGray dark:bg-darkContainer overflow-hidden">
                {cover ? (
                    <img
                        src={cover}
                        alt={`${title} cover`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        draggable={false}
                    />
                ) : (
                    <div className="h-full w-full grid place-items-center text-[10px] tracking-[0.2em] uppercase text-lightPrimary dark:text-darkPrimary">
                        No cover
                    </div>
                )}
            </div>

            {/* Meta */}
            <div className="max-w-[16ch] sm:max-w-[22ch]">
                <h3 className="text-[15px] sm:text-base md:text-lg font-semibold text-lightPrimary dark:text-bgLight leading-snug">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-lightSecondary dark:text-darkSecondary">
                    By {author}
                </p>
                {category && (
                    <p className="mt-1 text-xs text-lightSecondary dark:text-darkSecondary">{category}</p>
                )}
            </div>
        </article>
    );
}

export default function ReadsScreen() {
    return (
        <div className="mx-auto max-w-6xl px-6 mt-32">
            <FadeIn>
                {/* Grid */}
                <section className="">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                        {books.map((b) => (
                            <li key={b.id}>
                                <BookCell {...b} />
                            </li>
                        ))}
                    </ul>
                </section>
            </FadeIn>
        </div>
    );
}