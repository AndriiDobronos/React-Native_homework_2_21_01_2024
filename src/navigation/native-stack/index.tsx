import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabsGroup } from '@/navigation/bottom-tabs';
import {
    apartmentScreenOptions,
    homeStackScreenOptions,
} from '@/navigation/native-stack/options';
import { HomeStackParamList } from '@/navigation/native-stack/types';
import { ApartmentScreen } from '@/screens/Apartment';

export const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackGroup = () => (
    <HomeStack.Navigator screenOptions={homeStackScreenOptions}>
        <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
        <HomeStack.Screen
            name="ApartmentScreen"
            component={ApartmentScreen}
            options={apartmentScreenOptions}
        />
    </HomeStack.Navigator>
);