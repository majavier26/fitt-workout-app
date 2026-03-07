import { Box, Title, TextInput, Stack, SimpleGrid } from '@mantine/core';
import useFetchUser from '../features/users/hooks/useFetchUser';
import ComponentCard from "../components/ui/ComponentCard";

const Exercises = () => {
    // Get the user
    const user = useFetchUser();

    return (
        <Box p='md'>
            <Stack h='100%'>
                <Title>{user.name}'s Exercises</Title>
                <TextInput placeholder='Look for an exercise...'/>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4, lg: 5 }} >
                    {(new Array(5)).fill(null).map((_, i) => (
                        <ComponentCard title={`Exercise ${i + 1}`} key={`exercise-${i +1 }`}>
                            tite
                        </ComponentCard>
                    ))}
                </SimpleGrid>
            </Stack>
        </Box>
    )
}

export default Exercises;
