import { createTheme } from '@mantine/core';
import { generateColors } from '@mantine/colors-generator';

// Mantine color for the brand
const brandColor = '#f78209';

// Theme for the app
export const theme = createTheme({
    white: '#fffcf7',
    black: '#100800',
    colors: {
        'orange': generateColors(brandColor)
    },
    primaryColor: 'orange',
    primaryShade: { light: 6, dark: 7 },
    fontFamily: 'Inter, sans-serif',
    defaultRadius: 'lg',
})