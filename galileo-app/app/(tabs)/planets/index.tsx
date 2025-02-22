import { View, StyleSheet, TextInput, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView >
      <View style={{ padding: 16, paddingTop: 32, gap: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <ThemedText type='title'>Galileo</ThemedText>
          <IconSymbol name='globe.americas.fill' size={28} color='black' />
        </View>
        <TextInput style={{ padding: 16, backgroundColor: 'white', borderRadius: 8 }} placeholder='Search' clearButtonMode='while-editing' />
        <FlatList
          data={[1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link href={{ pathname: '/planets/[planetId]', params: { planetId: 1 } }} asChild relativeToDirectory>
              <TouchableOpacity style={{ flex: 1, width: '100%', padding: 16, borderRadius: 8, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <Image source={require('@/assets/images/react-logo.png')} style={{ height: 50, width: 50 }} />
                <ThemedText>Item {item}</ThemedText>
              </TouchableOpacity>
            </Link>
          )}
          contentContainerStyle={{ gap: 16 }}
          style={{ flex: 0 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 50,
    width: 50,
  },
});
