import type { ToplineCardProps, ComponentCardProps } from '../../../../assets/types/CardProps';

// Topline cards
export const homeToplineCards: ToplineCardProps[] = [
    {
        title: 'Number of sessions',
        value: 0,
        description: 'this week'
    },
    {
        title: 'Total number of sessions',
        value: 234,
        description: 'since Dec. 16, 2021'
    },
    {
        title: 'Body weight',
        value: '78.5 kg',
        description: 'as of yesterday'
    },
];

export const homeComponentCards: ComponentCardProps[] = [
    {
        title: 'Workout consistency',
        children: 'Tite'
    }, 
    {
        title: 'Weekly volume',
        children: 'Tite'
    }
]