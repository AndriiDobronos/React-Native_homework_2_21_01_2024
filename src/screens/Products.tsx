import { useScrollToTop } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    ListRenderItem,
    useColorScheme,
} from 'react-native';

//import { ApartmentCard } from '@/components';
import {ProductCard  } from "@/components/ProductCard";
import {Apartment, APARTMENT_DATA, Pizza, PIZZA_DATA} from '@/constants';

// const renderItem: ListRenderItem<Apartment> = ({ item }) => (
//     <ApartmentCard {...item} />
// );

const renderItem: ListRenderItem<Pizza> = ({ item }) => (
      <ProductCard mockItemData={item} />
 );

const ProductsScreen = () => {
    const isDark = useColorScheme() === 'dark';

    const ref = useRef<FlatList>(null);

    useScrollToTop(ref);

    const screenTitleStyle = [
        styles.screenTitle,
        { color: isDark ? '#fff' : '#000' },
    ];

    return (
        <FlatList
            ref={ref}
            ListHeaderComponent={
                <Text style={screenTitleStyle}>Pizza Screen</Text>
            }
            //data={APARTMENT_DATA}
            data={PIZZA_DATA}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        //padding: 16,
        gap: 6,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export { ProductsScreen };