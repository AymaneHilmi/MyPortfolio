import React, { useMemo, useState } from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import ConnectedLabContent from "@/components/ConnectedLabContent";

export default function ConnectedLabsScreen() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const passwordFromEnv = useMemo(() => import.meta.env.VITE_CONNECTED_LABS_PASSWORD || "", []);

    const handlePasswordSubmit = (event) => {
        event?.preventDefault?.();

        if (passwordInput.trim() === passwordFromEnv) {
            setIsAuthorized(true);
            setPasswordError("");
            setPasswordInput("");
        } else {
            setPasswordError("Incorrect password. Please try again.");
        }
    };

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

    return <ConnectedLabContent />;
}
