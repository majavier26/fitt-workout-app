import { Stack, Burger, Text, Group } from '@mantine/core';
import NavbarUserProfile from '../features/users/components/NavbarUserProfile';
import NavbarRouteDisplay from '../features/routes/components/NavbarRouteDisplay';
import { routes } from '../features/routes/assets/config/routes';
import type { NavbarControlProps } from '../assets/types/NavbarProps';
import { FONT_WEIGHT } from '../assets/config/constants';

const Navbar = ({
    mobileOpened,
    desktopOpened,
    toggleMobile,
    toggleDesktop
}: NavbarControlProps) => {
  // Coalesce the open state
  const opened = desktopOpened || mobileOpened;

  return (
    <Stack justify='space-between' h='100%' >
        <Group px="xs" justify={opened ? 'flex-start' : 'center'}>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
            {/* <Text fw={FONT_WEIGHT.Bold} size='lg'>F</Text> */}
        </Group>
        <Stack gap={0}>
          {routes.map((route) => {
            return <NavbarRouteDisplay key={route.title} {...route} isExpanded={opened} />
          })}
        </Stack>
        <NavbarUserProfile isExpanded={opened} />
    </Stack>
  )
}

export default Navbar
