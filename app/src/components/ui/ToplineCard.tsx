import { Box, Stack, Text, Title } from '@mantine/core';

// Props for topline cards
export type ToplineCardProps = {
    title: string;
    value: string | number;
    description: string;
}

const ToplineCard = ({
    title,
    value,
    description
}: ToplineCardProps) => {
  return (
    <Box>
        <Stack>
            <Text>{title}</Text>
            <Title order={2}>{value}</Title>
            <Text size='xs'>{description}</Text>
        </Stack>
    </Box>
  )
}

export default ToplineCard
