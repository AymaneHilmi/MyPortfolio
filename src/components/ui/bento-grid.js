import { cn } from "../../lib/utils";

export const BentoGrid = ({
    className,
    children,
}) => {
    return (
        (<div
            className={cn(
                "grid lg:auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto lg:h-auto",
                className
            )}>
            {children}
        </div>)
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    onClick = { onClick }
}) => {
    return (
        (<div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-[#dbdbdb] border border-transparent justify-between flex flex-col space-y-4 h-full lg:h-auto",
                className
            )}
            onClick={onClick}>
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div
                    className="font-sans font-bold text-neutral-600 mb-2 mt-2">
                    {title}
                </div>
                <div
                    className="font-sans font-normal text-neutral-600 text-xs ">
                    {description}
                </div>
            </div>
        </div>)
    );
};
