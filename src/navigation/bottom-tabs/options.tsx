import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

import { ExploreHeaderLeft } from '@/navigation/bottom-tabs/components/ExploreHeaderLeft';
import { TabScreenOptions } from '@/navigation/bottom-tabs/types';

export const tabScreenOptions: TabScreenOptions = ({ route }) => {
    const routeName = route.name;

    return {
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size, focused }) => {
            let iconName: ComponentProps<typeof Ionicons>['name'] = 'alert';

            switch (routeName) {
                case 'Menu': {
                    iconName = focused ? 'menu' : 'menu-outline';
                    break;
                }
                case 'Pizza_menu': {
                    iconName = focused ? 'albums' : 'albums-outline';
                    break;
                }
                case 'Settings': {
                    //iconName = focused ? 'person-circle' : 'person-circle-outline';
                    iconName = focused ? 'settings' : 'settings-outline'
                    break;
                }
                case 'Search': {
                    iconName = focused ? 'search' : 'search-outline'
                    break;
                }
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },
    };
};

export const exploreScreenOptions: TabScreenOptions = {
    headerLeft: ExploreHeaderLeft,
    headerTitle: '',
};