"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

type NavigationContextType = {
    activeSection: string;
    setActiveSection: (section: string) => void;
};

const NavigationContext =
    createContext<NavigationContextType | null>(null);

export function NavigationEventsProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll<HTMLElement>(
                "[data-nav-section]"
            )
        );

        if (!sections.length) return;

        // Set initial active section from URL
        const initialHash = window.location.hash.replace("#", "");

        if (initialHash) {
            setActiveSection(initialHash);
        }

        const updateActiveSection = () => {
            const viewportMiddle = window.innerHeight * 0.35;

            let closestSection: HTMLElement | null = null;
            let closestDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                // Ignore sections completely outside viewport
                if (
                    rect.bottom < 0 ||
                    rect.top > window.innerHeight
                ) {
                    return;
                }

                const distance = Math.abs(
                    rect.top - viewportMiddle
                );

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            });

            if (closestSection?.id) {
                setActiveSection(closestSection.id);
            }
        };

        // Handle scrolling
        window.addEventListener(
            "scroll",
            updateActiveSection,
            { passive: true }
        );

        // Handle anchor changes / browser back & forward
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");

            if (hash) {
                setActiveSection(hash);
            }
        };

        window.addEventListener(
            "hashchange",
            handleHashChange
        );

        updateActiveSection();

        return () => {
            window.removeEventListener(
                "scroll",
                updateActiveSection
            );

            window.removeEventListener(
                "hashchange",
                handleHashChange
            );
        };
    }, []);
    useEffect(() => {
        if (window.scrollY === 0) {
            window.history.replaceState(null, "", window.location.pathname);
            return;
        }
        if (!activeSection) return;
        const currentHash =
            window.location.hash.replace("#", "");
        if (currentHash !== activeSection) {
            window.history.replaceState(
                null,
                "",
                `#${activeSection}`
            );
        }

    }, [activeSection]);
    return (
        <NavigationContext.Provider
            value={{
                activeSection,
                setActiveSection,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigationEvents() {
    const context = useContext(NavigationContext);

    if (!context) {
        throw new Error(
            "useNavigationEvents must be used inside NavigationEventsProvider"
        );
    }

    return context;
}