import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';

import { TabsGroupProps } from '@/navigation/bottom-tabs/types';

export const ExploreHeaderLeft = () => {
    const isDark = useColorScheme() === 'dark';
    const navigation = useNavigation<TabsGroupProps['navigation']>();

    return (
        <Pressable onPress={navigation.openDrawer} style={styles.container}>
            <Entypo name="menu" size={24} color={isDark ? '#1DA1F2' : 'grey'} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
    },
});