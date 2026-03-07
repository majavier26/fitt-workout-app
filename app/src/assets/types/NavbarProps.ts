// Props for navbar state
export type NavbarStateProps = {
    mobileOpened: boolean;
    desktopOpened: boolean;
}

// Props for the navbar control functions
export type NavbarControlProps = NavbarStateProps & {
    toggleMobile: () => void;
    toggleDesktop: () => void;
}