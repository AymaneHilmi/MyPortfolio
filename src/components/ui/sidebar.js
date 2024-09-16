import { cn } from "../../lib/utils";
import { Link } from 'react-router-dom';
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

export const SidebarProvider = ({
    children,
    open: openProp,
    setOpen: setOpenProp,
    animate = true
}) => {
    const [openState, setOpenState] = useState(false);

    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

    return (
        (<SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
            {children}
        </SidebarContext.Provider>)
    );
};

export const Sidebar = ({
    children,
    open,
    setOpen,
    animate
}) => {
    return (
        (<SidebarProvider open={open} setOpen={setOpen} animate={animate}>
            {children}
        </SidebarProvider>)
    );
};

export const SidebarBody = (props) => {
    return (<>
        <DesktopSidebar {...props} />
        <MobileSidebar {...(props)} />
    </>);
};

export const DesktopSidebar = ({
    className,
    children,
    ...props
}) => {
    const { open, setOpen, animate } = useSidebar();
    return (<>
        <motion.div
            className={cn(
                "h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
                className
            )}
            animate={{
                width: animate ? (open ? "300px" : "60px") : "300px",
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            {...props}>
            {children}
        </motion.div>
    </>);
};

export const MobileSidebar = ({
    className,
    children,
    ...props
}) => {
    const { open, setOpen } = useSidebar();
    return (<>
        <div
            className={cn(
                "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
            )}
            {...props}>
            <div className="flex justify-end z-20 w-full">
                <IconMenu2
                    className="text-neutral-800 dark:text-neutral-200"
                    onClick={() => setOpen(!open)} />
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className={cn(
                            "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                            className
                        )}>
                        <div
                            className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                            onClick={() => setOpen(!open)}>
                            <IconX />
                        </div>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </>);
};

export const SidebarLink = ({
    link,
    className,
    ...props
}) => {
    const { open, animate } = useSidebar();
    return (
        (<Link
            href={link.href}
            className={cn("flex items-center justify-start gap-2  group/sidebar py-2", className)}
            {...props}>
            {link.icon}
            <motion.span
                animate={{
                    display: animate ? (open ? "inline-block" : "none") : "inline-block",
                    opacity: animate ? (open ? 1 : 0) : 1,
                }}
                className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0">
                {link.label}
            </motion.span>
        </Link>)
    );
};
