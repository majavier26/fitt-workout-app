import { Stack, Burger, Group, Box } from '@mantine/core';
import NavbarUserProfile from '../features/users/components/NavbarUserProfile';
import NavbarRouteDisplay from '../features/routes/components/NavbarRouteDisplay';
import { routes } from '../features/routes/assets/config/routes';
import type { NavbarControlProps } from '../assets/types/NavbarProps';

const Navbar = ({
    mobileOpened,
    desktopOpened,
    toggleMobile,
    toggleDesktop
}: NavbarControlProps) => {
  const opened = desktopOpened || mobileOpened;

  return (
    <Stack 
      justify='space-between' 
      h='100%' 
      style={{ overflow: 'hidden' }}>
        <Group px="xs" justify={opened ? 'flex-start' : 'center'}>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        </Group>

        <Stack gap={0} px="xs"> 
          {routes.map((route) => {
            return <NavbarRouteDisplay key={route.title} {...route} isExpanded={opened} />
          })}
        </Stack>

        <Box px='xs'>
          <NavbarUserProfile isExpanded={opened} />
        </Box>
    </Stack>
  )
}

export default Navbar;