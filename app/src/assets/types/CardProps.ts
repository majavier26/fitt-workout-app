// Props for topline cards
export type ToplineCardProps = {
    title: string;
    value: string | number;
    description: string;
}

// Props for component cards
export type ComponentCardProps = {
    title: string;
    children: React.ReactNode;
    grow?: boolean;
}