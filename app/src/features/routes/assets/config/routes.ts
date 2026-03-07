// Page components
import Home from "../../../../pages/Home";
import Exercises from "../../../../pages/Exercises";

// Helper types for the routes
export type RouteType = {
    href: `/${string}`;
    title: string;
    icon: string;
    page: React.FC;
    menuItems?: RouteType[];
}

export const routes: RouteType[] = [
    {
        href: '/',
        title: 'Home',
        icon: 'material-symbols:home-outline-rounded',
        page: Home
    }, 
    {
        href: '/exercises',
        title: 'Exercises',
        icon: 'solar:dumbbell-large-minimalistic-linear',
        page: Exercises
    }
];