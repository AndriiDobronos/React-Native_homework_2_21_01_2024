import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    useColorScheme,
} from 'react-native';

const ProfileScreen = () => {
    const isDark = useColorScheme() === 'dark';

    const textStyle = { color: isDark ? '#fff' : '#000' };
    const screenTitleStyle = [styles.screenTitle, textStyle];

    return (
        <View style={styles.container}>
            <Text style={screenTitleStyle}>Profile Screen</Text>
            <Text style={textStyle}>Name: John Doe</Text>
            <TouchableOpacity>
                <Text style={textStyle}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;