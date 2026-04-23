import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function Presentacion() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerstyle={styles.scroll}>
 
        <View style={styles.fondo}>

          <Text style={styles.nombre}>Faustino Miranda</Text>

          <Image
            source={require('../assets/faustinofoto.jpeg')}
            style={styles.foto}
          />

          <Text style={styles.dato}>Edad: 17</Text>
          <Text style={styles.dato}>Escuela: Proa</Text>
          <Text style={styles.dato}>Ciudad: Las Varillas</Text>

          <TouchableOpacity
            style={styles.boton}
            onPress={() => Linking.openURL('https://www.instagram.com/?hl=es')}
          >
            <Text style={styles.botonTexto}>Instagram</Text>
          </TouchableOpacity>

        </View>
          <View style={styles.fondo}>

          <Text style={styles.nombre}>Faustino Miranda</Text>

          <Image
            source={require('../assets/faustinofoto.jpeg')}
            style={styles.foto}
          />

          <Text style={styles.dato}>Edad: 17</Text>
          <Text style={styles.dato}>Escuela: Proa</Text>
          <Text style={styles.dato}>Ciudad: Las Varillas</Text>

          <TouchableOpacity
            style={styles.boton}
            onPress={() => Linking.openURL('https://www.instagram.com/?hl=es')}
          >
            <Text style={styles.botonTexto}>Instagram</Text>
          </TouchableOpacity>

        </View>  <View style={styles.fondo}>

          <Text style={styles.nombre}>Faustino Miranda</Text>

          <Image
            source={require('../assets/faustinofoto.jpeg')}
            style={styles.foto}
          />

          <Text style={styles.dato}>Edad: 17</Text>
          <Text style={styles.dato}>Escuela: Proa</Text>
          <Text style={styles.dato}>Ciudad: Las Varillas</Text>

          <TouchableOpacity
            style={styles.boton}
            onPress={() => Linking.openURL('https://www.instagram.com/?hl=es')}
          >
            <Text style={styles.botonTexto}>Instagram</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  dato: {
    fontSize: 18,
    marginBottom: 8,
  },
  boton: {
    marginTop: 20,
    backgroundColor: '#C13584',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scroll: {
    paddingVertical: 600,
    alignItems: 'center',
  }
});