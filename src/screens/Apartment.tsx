import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {StyleSheet, View, Text, useColorScheme, Button} from 'react-native';

import { ApartmentCard } from '@/components/ApartmentCard';
import { HomeStackParamList } from '@/navigation/native-stack/types';
import {ProductCard} from "@/components/ProductCard";
import {mockItemData1 } from "@/constants/mockItemData";
import {APARTMENT_DATA, PIZZA_DATA} from "@/constants";


type Props = NativeStackScreenProps<HomeStackParamList, 'ApartmentScreen'>;

const ApartmentScreen = ( {route} : Props) => {
    const isDark = useColorScheme() === 'dark';
    const param: {[PIZZA_DATA]} = {...route.params.item}
    const log=()=>console.log(param,"--",{mockItemData1})
    return (
        <View style={styles.container}>
            <Text style={[styles.screenTitle, {color: isDark ? '#fff' : '#000',}]}>
                {(param.mockItemData) ? "About Pizza" : "Apartment Details"}
            </Text>

            <View style={styles.boxCard} >
                {(param.mockItemData) ?  <ProductCard  mockItemData={param.mockItemData}/> : <ApartmentCard {...param} />}
            </View>

            <Text style={[styles.description, {color: isDark ? '#fff' : '#000',}]}>
                {(param.mockItemData) ? `${param.mockItemData.description}` : "Apartment description :"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    boxCard: {

    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        marginHorizontal:12,
        fontWeight: 'bold',
    },
    description: {
        fontSize:16,
        marginTop: 8,
        paddingHorizontal:12,
    },
});

export { ApartmentScreen };