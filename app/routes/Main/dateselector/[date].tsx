import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function SwipeDetailScreen() {
    const { date } = useLocalSearchParams();

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Swipe ID: {date}</Text>
            {/* You can fetch or render data based on `id` */}
        </View>
    );
}