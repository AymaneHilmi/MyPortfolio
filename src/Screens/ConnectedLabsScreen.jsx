import React, { useEffect, useState, useMemo, useRef } from "react";
import FadeIn from "@/components/FadeIn";
import LIMSmobility from "@/assets/LIMSmobility.png";
import {
    MousePointerClick, ArrowDown, CheckCircle2, User, RefreshCw, Mail, XCircle, X, Check, Smartphone, Database, FileText,
    FlaskConical, Camera, Monitor, ClipboardCheck, QrCode, FolderUp, FilePlus2,
    PackageCheck,
    BriefcaseBusiness,
    ChevronLeft, ChevronRight
} from "lucide-react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { NumberTicker } from "@/components/ui/NumberTicker";
import SaintGobainMap from "@/components/ui/SaintGobainMap";
import { AnimatedBeamDemo } from "@/components/ui/animatedbeam";
import { motion } from "framer-motion";
import SharepointAcrhitecture from "@/assets/ConnectedlabSharepointArchitecture.png";
import { ArcherContainer, ArcherElement } from "react-archer";
import userExample from "@/assets/userExample.png";
import ExtendedLifecycleExample from "@/assets/ExtendedLifecycleExample.png";
import RequesterInterface from "@/assets/RequesterInterface.png";
import TechnicianInterface from "@/assets/TechnicianInterface.png";
import ReadOnlyConnection from "@/assets/ReadOnlyConnection.png";
import UserflowSGRG from "@/assets/UserflowSGRG.png";
import UserflowSGRP from "@/assets/UserflowSGRP.png";
import HomeInterface from "@/assets/HomeInterface.png";
import PhotoAttachment1 from "@/assets/PhotoAttachment1.png";
import PhotoAttachment2 from "@/assets/PhotoAttachment2.png";
import PhotoAttachment3 from "@/assets/PhotoAttachment3.png";
import PhotoAttachment4 from "@/assets/PhotoAttachment4.png";
import OfferForm1 from "@/assets/OfferForm1.png";
import OfferForm2 from "@/assets/OfferForm2.png";
import OfferForm3 from "@/assets/OfferForm3.png";
import OfferForm4 from "@/assets/OfferForm4.png";
import AcceptInterface1 from "@/assets/AcceptInterface1.png";
import AcceptInterface2 from "@/assets/AcceptInterface2.png";
import AcceptInterface3 from "@/assets/AcceptInterface3.png";
import MessageInteraction1 from "@/assets/MessageInteraction1.png";
import MessageInteraction2 from "@/assets/MessageInteraction2.png";
import MessageInteraction3 from "@/assets/MessageInteraction3.png";
import AuthorizationInterface1 from "@/assets/AuthorizationInterface1.png";
import AuthorizationInterface2 from "@/assets/AuthorizationInterface2.png";
import AuthorizationInterface3 from "@/assets/AuthorizationInterface3.png";

import WriteEnabledConnection from "@/assets/WriteEnabledConnection.png";
import FinalArchitecture from "@/assets/FinalArchitecture.png";
import AdminInterface from "@/assets/AdminInterface.png";
import { File, Folder, Tree } from "@/components/ui/file-tree"
import ScrollProgress from "../components/ui/ScrollProgress";
import { AnimatedBeamMultipleOutputDemo } from "../components/ui/animatedbeam";
import Iphone from "../components/ui/iphone";
import { IPhoneMockup } from "react-device-mockup";
import Masonry from "../components/ui/mansory";

export default function ConnectedLabsScreen() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [pageContent, setPageContent] = useState("");
    const passwordFromEnv = useMemo(() => import.meta.env.VITE_CONNECTED_LABS_PASSWORD || "", []);

    const handlePasswordSubmit = (event) => {
        event?.preventDefault?.();

        if (passwordInput.trim() === passwordFromEnv) {
            setIsAuthorized(true);
            setPasswordError("");
            setPasswordInput("");
            setPageContent(import.meta.env.VITE_CONNECTED_LABS_CONTENT || "");
        } else {
            setPasswordError("Incorrect password. Please try again.");
        }
    };

    // Sticky Back button state and refs
    const [showBackButton, setShowBackButton] = useState(false);
    const lastScrollPositionRef = useRef(null);
    const backButtonTimeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (backButtonTimeoutRef.current) {
                clearTimeout(backButtonTimeoutRef.current);
            }
        };
    }, []);

    if (!isAuthorized) {
        return (
            <div className="h-screen flex items-center justify-center bg-lightBG dark:bg-darkBG px-6">
                <div className="w-full max-w-md space-y-3">
                    <PlaceholdersAndVanishInput
                        placeholders={["Password"]}
                        type="password"
                        context="text"
                        maxLength={64}
                        onChange={(e) => {
                            setPasswordInput(e.target.value);
                            setPasswordError("");
                        }}
                        onSubmit={(e) => {
                            handlePasswordSubmit(e);
                        }}
                    />
                    <p
                        className={`text-sm font-sfmedium text-center min-h-[1.25rem] ${passwordError ? "text-red-500" : "text-transparent"}`}
                    >
                        {passwordError || "placeholder"}
                    </p>
                </div>
            </div>
        );
    }


    return (
        <div className="lg:mx-auto max-w-5xl px-6 text-sm lg:text-base font-sfregular overflow-hidden md:overflow-visible">
            <ScrollProgress />
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        </div >
    );
};

const PhoneCarousel = ({ children }) => {
    const slides = React.Children.toArray(children);
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    return (
        <div className="w-full">
            {/* Mobile carousel */}
            <div className="relative md:hidden">
                <div className="w-full overflow-visible">
                    <div
                        className="flex items-center gap-4 transition-transform duration-300 ease-out"
                        style={{
                            // 220px slide width + 16px gap, center active slide
                            transform: `translateX(calc(50% - ${index} * (220px + 16px) - 110px))`,
                        }}
                    >
                        {slides.map((slide, i) => {
                            const dist = Math.abs(i - index);
                            const isActive = i === index;

                            return (
                                <div
                                    key={i}
                                    className="shrink-0"
                                    style={{
                                        width: 220,
                                        transform: `scale(${isActive ? 1 : dist === 1 ? 0.92 : 0.86})`,
                                        opacity: isActive ? 1 : dist === 1 ? 0.55 : 0.25,
                                        transition: "transform 300ms ease-out, opacity 300ms ease-out",
                                    }}
                                >
                                    {slide}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Arrows */}
                <div className="mt-4 flex items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous"
                        className="h-9 w-9 rounded-full border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer grid place-items-center"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="text-[10px] uppercase tracking-[0.25em] text-lightSecondary dark:text-darkSecondary font-sfregular">
                        {index + 1} / {slides.length}
                    </div>

                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next"
                        className="h-9 w-9 rounded-full border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer grid place-items-center"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Desktop row */}
            <div className="hidden md:flex justify-between">
                {slides}
            </div>
        </div>
    );
};


const Step = ({ color = "blue", title, desc, icon: Icon }) => {
    const isOrange = color === "orange";

    return (
        <div className="flex flex-col items-center text-center gap-3 h-full">
            {/* Icon */}
            <div
                className={[
                    "h-16 w-16 rounded-full grid place-items-center shadow-sm shrink-0",
                    isOrange
                        ? "bg-orange-400"
                        : "bg-gradient-to-tr from-sky-400 to-blue-600",
                ].join(" ")}
            >
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>

            {/* Text block (fixed heights to align across steps) */}
            <div className="flex flex-col items-center w-full">
                <p className="font-sfbold text-sm md:text-base text-lightPrimary dark:text-darkPrimary min-h-[40px] md:min-h-[44px] leading-snug flex items-center justify-center">
                    {title}
                </p>
                <p className="text-xs text-lightSecondary dark:text-darkSecondary mt-2 max-w-[220px] min-h-[48px] md:min-h-[56px] leading-snug">
                    {desc}
                </p>
            </div>
        </div>
    );
};

function PhotoAttachmentWorkflow() {
    const previousSteps = [
        {
            color: "orange",
            title: "1 - Request creation",
            desc: "The requester creates a new analysis request (DAT).",
            icon: FilePlus2,
        },
        {
            color: "blue",
            title: "2 - Sample reception",
            desc: "The lab receives the sample and validates the request.",
            icon: PackageCheck,
        },
        {
            color: "blue",
            title: "3 - Experiment",
            desc: "The technician performs the experiment.",
            icon: FlaskConical,
        },
        {
            color: "blue",
            title: "4 - Photo + description",
            desc: "A photo is taken and described for visual tracking.",
            icon: Camera,
        },
        {
            color: "blue",
            title: "5 - Go back to the office",
            desc: "The technician must leave the lab to access a computer.",
            icon: BriefcaseBusiness,
        },
        {
            color: "blue",
            title: "6 - Upload to local file server",
            desc: "The photo is manually transferred and stored locally.",
            icon: FolderUp,
        },
        {
            color: "blue",
            title: "7 - Send an email",
            desc: "The photo/report is sent by email to the requester/client.",
            icon: Mail,
        },
        {
            color: "blue",
            title: "8 - Results entry",
            desc: "Results are then entered into the LIMS (Sample Manager).",
            icon: Database,
        },
    ];

    const newSteps = [
        {
            color: "orange",
            title: "1 - Request creation",
            desc: "The requester creates a new analysis request (DAT).",
            icon: FilePlus2,
        },
        {
            color: "blue",
            title: "2 - Sample reception",
            desc: "The lab receives the sample and validates the request.",
            icon: PackageCheck,
        },
        {
            color: "blue",
            title: "3 - Experiment",
            desc: "The technician performs the experiment.",
            icon: FlaskConical,
        },
        {
            color: "blue",
            title: "4 - Scan QR code",
            desc: "Scan the QR code to instantly access the sample context.",
            icon: QrCode,
        },
        {
            color: "blue",
            title: "5 - Take photo",
            desc: "The photo is captured and automatically linked to the sample.",
            icon: Camera,
        },
        {
            color: "blue",
            title: "8 - Results entry",
            desc: "Results are then entered into the LIMS (Sample Manager).",
            icon: Database,
        },
    ];

    return (
        <FadeIn className="my-6 md:ml-8">
            <div className="w-full flex flex-col items-center">
                {/* PREVIOUS PROCESS */}
                <p className="text-[11px] uppercase tracking-[0.25em] text-lightSecondary dark:text-darkSecondary font-sfregular mb-6">
                    Previous process
                </p>

                <div className="w-full">
                    {/* Mobile: stack / Desktop: row */}
                    <div className="flex md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
                        {previousSteps.map((s, i) => (
                            <React.Fragment key={s.title}>
                                <div className="md:flex-1">
                                    <Step {...s} />
                                </div>

                                {[1, 6].includes(i) && (
                                    <div className="w-px mx-4 self-stretch bg-lightSecondary dark:bg-darkSecondary hidden md:block" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="flex flex-row items-center justify-center gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-orange-400" />
                            <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Requester / engineer
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600" />
                            <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Laboratory technician
                            </span>
                        </div>
                    </div>

                    <p className="text-justify py-8">
                        The idea of this new process is to leverage mobile technology to streamline photo attachment directly from the laboratory environment.
                        By scanning a QR code associated with the sample, technicians can quickly access the relevant context and upload photos directly from their mobile device.
                        This eliminates the need to leave the lab, significantly reducing time and effort while improving data accuracy and traceability within Sample Manager.
                    </p>

                    {/* NEW PROCESS */}
                    <p className="text-[11px] text-center uppercase tracking-[0.25em] text-lightSecondary dark:text-darkSecondary font-sfregular mb-6">
                        New process
                    </p>


                    <div className="w-full max-w-5xl">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-0 mx-auto mt-8">
                            {newSteps.map((s, i) => (
                                <React.Fragment key={s.title}>

                                    <div className="md:flex-1">
                                        <Step {...s} />
                                    </div>
                                    {[1, 4].includes(i) && (
                                        <div className="w-px mx-4 self-stretch bg-lightSecondary dark:bg-darkSecondary" />
                                    )}

                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>






                {/* LEGEND */}
                <div className="flex flex-row items-center gap-6 mt-8">
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-orange-400" />
                        <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                            Requester / engineer
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600" />
                        <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                            Laboratory technician
                        </span>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}
