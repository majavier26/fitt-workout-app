import { Card, Stack, Text, Title } from '@mantine/core';
import type { ToplineCardProps } from '../../assets/types/CardProps';

const ToplineCard = ({
    title,
    value,
    description
}: ToplineCardProps) => {
  return (
    <Card withBorder>
        <Stack>
            <Text>{title}</Text>
            <Title order={2}>{value}</Title>
            <Text size='xs'>{description}</Text>
        </Stack>
    </Card>
  )
}

export default ToplineCard
