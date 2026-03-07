import { Menu, Avatar, Group, Text } from "@mantine/core";
import { Icon } from '@iconify/react';
import useFetchUser from "../hooks/useFetchUser";

// Helper type for navbar user profile
type NavbarUserProfileProps = {
    isExpanded: boolean;
}

const NavbarUserProfile = ({
    isExpanded: opened
}: NavbarUserProfileProps) => {
    // Get the user
    const user = useFetchUser();

    return (
        <Menu shadow='md' width={200}>
            <Menu.Target>
                {opened 
                    ? (
                        <Group>
                            <Avatar 
                                radius='xl' 
                                name={user.name} 
                                color='initials'
                            />
                            <Text>{user.name}</Text>
                        </Group>
                    )
                    : (
                        <Avatar 
                            radius='xl' 
                            name={user.name} 
                            color='initials'
                            style={{ flexShrink: 0 }}
                        />
                    )
                }
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item leftSection={<Icon icon='material-symbols:logout-rounded' />}>
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default NavbarUserProfile
