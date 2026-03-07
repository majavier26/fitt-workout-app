import { Card, Stack, Title } from '@mantine/core';
import type { ComponentCardProps } from '../../assets/types/CardProps';

const ComponentCard = ({
    title,
    children,
    grow=true
}: ComponentCardProps) => {
  return (
    <Card withBorder style={grow ? {flex:1} : {}}>
        <Stack>
            <Title order={4}>{title}</Title>
            {children}
        </Stack>
    </Card>
  )
}

export default ComponentCard