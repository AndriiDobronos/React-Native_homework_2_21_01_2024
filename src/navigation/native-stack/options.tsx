import { HomeStackScreenOptions } from '@/navigation/native-stack/types';

export const homeStackScreenOptions: HomeStackScreenOptions = {
    headerShown: false,
};

export const apartmentScreenOptions: HomeStackScreenOptions = {
    presentation: 'modal',
    headerTitle: 'Product Details',
    headerShown: true,
};