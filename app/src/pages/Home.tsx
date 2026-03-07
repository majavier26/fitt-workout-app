import { Box, SimpleGrid, Grid, Stack, Title } from "@mantine/core";
import useFetchUser from "../features/users/hooks/useFetchUser";
import ToplineCard from "../components/ui/ToplineCard";
import ComponentCard from "../components/ui/ComponentCard";
import { homeToplineCards, homeComponentCards } from "../assets/config/home";

const Home = () => {
    // Get the user
    const user = useFetchUser();

    return (
        <Box p='md'>
            <Grid>
                <Grid.Col span={{base: 12, sm: 6, lg: 8}}>
                    <Stack>
                        <Title order={1}>{`${user.name}'s Fitness Journey`}</Title>
                        <SimpleGrid cols={{ base: 1, lg: 3 }} >
                            {homeToplineCards.map((props) => {
                                return <ToplineCard key={props.title} {...props} />
                            })}
                        </SimpleGrid>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6, lg: 4}}>
                    <Stack>
                        {homeComponentCards.map((props) => {
                            return <ComponentCard key={props.title} {...props} />
                        })}
                    </Stack>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default Home
