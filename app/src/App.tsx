import { useDisclosure } from '@mantine/hooks';
import { AppShell, Group, Burger, Text } from '@mantine/core';

function App() {
  // State handler for navbar
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  console.log('mobile:', mobileOpened, 'desktop:', desktopOpened);

  return (
    <AppShell
      padding='md'
      header={{ height: 60 }}
      navbar={{
        width: desktopOpened ? 240 : 50,
        breakpoint: 'sm',
        collapsed: {
          mobile: !mobileOpened,
        }
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          Fitt
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='sm'>
        Routes
      </AppShell.Navbar>
      <AppShell.Main>
        <Text>Tite.</Text>
      </AppShell.Main>
    </AppShell>
  )
}

export default App