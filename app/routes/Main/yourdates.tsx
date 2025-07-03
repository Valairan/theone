import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function SwipeDetailScreen() {

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>This is the yourdates page</Text>
            {/* You can fetch or render data based on `id` */}
        </View>
    );
}