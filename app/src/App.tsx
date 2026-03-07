import { useDisclosure } from '@mantine/hooks';
import { AppShell, Card } from '@mantine/core';
import Navbar from './components/Navbar';
import AppRoutes from './features/routes/components/AppRoutes';
import { routes } from './features/routes/assets/config/routes';


function App() {
  // State handler for navbar
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  console.log('mobile:', mobileOpened, 'desktop:', desktopOpened);

  return (
    <AppShell
      padding={0}
      layout='alt'
      withBorder={false}
      header={{ height: 20 }}
      navbar={{
        width: desktopOpened ? 200 : 60,
        breakpoint: 'sm',
        collapsed: {
          mobile: !mobileOpened,
        }
      }}
    >
      <AppShell.Header/>
      <AppShell.Navbar p='sm'>
        <Navbar
          mobileOpened={mobileOpened}
          desktopOpened={desktopOpened}
          toggleMobile={toggleMobile}
          toggleDesktop={toggleDesktop}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <Card withBorder bg='#FFFFFF' p='md' h='100%'>
          <AppRoutes routes={routes} />
        </Card>
      </AppShell.Main>
    </AppShell>
  )
}

export default App