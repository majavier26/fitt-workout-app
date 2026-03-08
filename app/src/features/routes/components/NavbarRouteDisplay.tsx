import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnstyledButton, Paper, Text, useMantineTheme } from '@mantine/core';
import { Icon } from '@iconify/react';
import { FONT_WEIGHT } from '../../../assets/config/constants';
import type { RouteType } from '../assets/config/routes';
import styles from '../assets/styles/NavbarRouteDisplay.module.css';

// Helper type for navbar route display
type NavbarRouteDisplayProps = RouteType & {
  isExpanded: boolean;
}

const NavbarRouteDisplay = (props: NavbarRouteDisplayProps) => {
  // Initialize the hover state
  const [isHovering, setIsHovering] = useState(false);
  // Initialize mantine theme
  const theme = useMantineTheme();
  // Initialize the navigate hook
  const navigate = useNavigate();

  return (
    <UnstyledButton
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      onClick={() => navigate(props.href)}
      className={styles.button}
    >
        <Paper 
          p="xs" 
          bg={isHovering ? 'orange.4' : 'transparent'}
          radius="md"
          className={styles.paper}
          style={{ width: props.isExpanded ? '100%' : '40px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '200px' }}>
            <Icon 
              icon={props.icon} 
              color={isHovering ? 'white' : theme.colors.orange[4]} 
              height={20}
              width={20}
              className={styles.icon}
            />
            <Text 
              c={isHovering ? 'white' : 'black'}
              fw={FONT_WEIGHT.Medium}
              className={styles.text}
            >
              {props.title}
            </Text>
          </div>
        </Paper>
    </UnstyledButton>
  )
}

export default NavbarRouteDisplay;