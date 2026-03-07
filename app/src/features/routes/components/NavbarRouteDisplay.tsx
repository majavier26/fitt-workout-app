import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnstyledButton, Paper, Text, Group, useMantineTheme } from '@mantine/core';
import { Icon } from '@iconify/react';
import { FONT_WEIGHT } from '../../../assets/config/constants';
import type { RouteType } from '../assets/config/routes';
import transition from '../../../assets/styles/transition.module.css';
import textStyles from '../../../assets/styles/text.module.css';


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
    >
        <Paper 
          p='xs' 
          bg={isHovering ? 'orange.4' : 'transparent'}
          radius='md'
          className={transition.all}
        >
          <Group 
            wrap='nowrap'
            gap={props.isExpanded ? 'md' : 0}
          >
            <Icon 
              icon={props.icon} 
              color={isHovering ? 'white' : theme.colors.orange[4]} 
              height={20}
              style={{ flexShrink: 0 }}               // To not resize the element 
            />
            <Text 
              c={isHovering ? 'white' : 'black'}
              fw={FONT_WEIGHT.Medium}
              className={`${textStyles.textBase} ${props.isExpanded ? textStyles.textShown : textStyles.textHidden}`}
            >
              {props.title}
            </Text>
          </Group>
        </Paper>
    </UnstyledButton>
  )
}

export default NavbarRouteDisplay
