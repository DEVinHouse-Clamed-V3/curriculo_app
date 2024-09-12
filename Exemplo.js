import { SafeAreaView, View, Text, StatusBar, Image, StyleSheet } from 'react-native'

export default function App() {

  return (
    <View style={styles.minhaTela}>
      <StatusBar backgroundColor="red" />
      <Text style={{color: 'red', fontSize: 24}}>
        Ola mundo
      </Text>
      <Text>
        Ola mundo
      </Text>
      <Image
        source={
          {
            uri: 'https://lumiere-a.akamaihd.net/v1/images/stitch_16x9_9ac13651.png?region=0,0,1152,648&width=960',
            width: 150,
            height: 150
          }
        }
      />
      <Image
        source={require('./assets/imagem.jpg')}
        // style={{ width: 50, height: 50, borderRadius: 50 }}
        style={styles.minhaImagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  minhaImagem: {
    width: 300,
    height: 150
  },
  minhaTela: {
    backgroundColor: '#CCC',
    flex: 1
  }
})