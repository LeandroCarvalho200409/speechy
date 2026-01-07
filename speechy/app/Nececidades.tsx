import { Button, View, Text, Pressable } from "react-native";
import * as Speech from 'expo-speech';


function speak(text: string) {
  Speech.speak(text, {
    language: 'pt-PT',
    pitch: 1,
    rate: 0.5,
  });
}

const CustomButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <Pressable
    onPress={onPress}
    style={{
      backgroundColor: '#346beb',
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 10,
      marginHorizontal: 10,
    }}
  >
    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>{title}</Text>
  </Pressable>
);

export default function Needs() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 10
        }}
      >
        <CustomButton title="Casa de Banho" onPress={() => speak('Tenho de ir á casa de banho')}/>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 10
        }}
      >
        <CustomButton title="Fome" onPress={() => speak('Tenho fome')}/>
        <CustomButton title="Sede" onPress={() => speak('Tenho sede')}/>
      </View>
    </View>
  );
}