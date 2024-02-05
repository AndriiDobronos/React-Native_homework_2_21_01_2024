import { NavigatorScreenParams } from '@react-navigation/native';
import { ComponentProps } from 'react';

import { Apartment,Pizza } from '@/constants';
import { TabParamList } from '@/navigation/bottom-tabs/types';
import { HomeStack } from '@/navigation/native-stack';

export type HomeStackParamList = {
    TabsGroup: NavigatorScreenParams<TabParamList>;
    ApartmentScreen: {
        item: Apartment | Pizza;
    };
};

export type HomeStackScreenOptions = ComponentProps<
    typeof HomeStack.Navigator
    >['screenOptions'];