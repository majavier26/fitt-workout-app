import { SimpleGrid, Stack, Text} from "@mantine/core";
import ToplineCard from "../components/ui/ToplineCard";
import { homeToplineCards } from "../assets/config/home";

const Home = () => {
  return (
    <>
        <SimpleGrid
            cols={{
                base: 1,
                lg: 3
            }}
        >
            {homeToplineCards.map((props) => {
                return <ToplineCard {...props} />
            })}
        </SimpleGrid>
    </>
  )
}

export default Home
