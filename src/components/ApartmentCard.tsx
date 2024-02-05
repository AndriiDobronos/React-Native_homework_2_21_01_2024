import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    useColorScheme,
} from 'react-native';

import { Apartment } from '@/constants';
import { HomeStackParamList } from '@/navigation/native-stack/types';

const ApartmentCard: FC<Apartment> = ({ name, image, price }) => {
    const isDark = useColorScheme() === 'dark';
    const navigation =
        useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

    const handlePress = () => {
        navigation.navigate('ApartmentScreen'
            , {item: { name, image, price },}
        );
    };

    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: isDark ? '#767676' : '#e8e8e8' },
            ]}
            onPress={handlePress}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.footer}>
                <Text style={[styles.name, { color: isDark ? 'white' : '#000' }]}>
                    {name}
                </Text>
                <Text style={[styles.price, { color: isDark ? '#8cf16d' : 'green' }]}>
                    Price: ${price}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 8,
        borderRadius: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    price: {
        fontWeight: 'bold',
    },
    footer: {
        padding: 16,
    },
});

export { ApartmentCard };