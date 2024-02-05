import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    drawerScreenOptions,
    settingsScreenOptions,
} from '@/navigation/drawer/options';
import { DrawerParamList } from '@/navigation/drawer/types';
import { HomeStackGroup } from '@/navigation/native-stack';
import { SearchScreen } from '@/screens/Search';

export const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerGroup = () => (
    <Drawer.Navigator screenOptions={drawerScreenOptions}>
        <Drawer.Screen name="Home" component={HomeStackGroup} />
        <Drawer.Screen
            name="Search"
            component={SearchScreen}
            options={settingsScreenOptions}
        />
    </Drawer.Navigator>
);