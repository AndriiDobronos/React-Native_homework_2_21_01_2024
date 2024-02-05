import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';

import {
    exploreScreenOptions,
    tabScreenOptions,
} from '@/navigation/bottom-tabs/options';
import { TabParamList, TabsGroupProps } from '@/navigation/bottom-tabs/types';
import { ProductsScreen } from '@/screens/Products';
import { MenuScreen } from '@/screens/Menu';
import { SearchScreen } from "@/screens/Search";
import ProfileScreen from '@/screens/Profile';

export const Tab = createBottomTabNavigator<TabParamList>();

export const TabsGroup: FC<TabsGroupProps> = () => (
    <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen
            name="Menu"
            component={MenuScreen}
            options={exploreScreenOptions}
        />
        <Tab.Screen name="Pizza_menu" component={ProductsScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
);