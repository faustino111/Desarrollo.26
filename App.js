import {StyleSheet, View, Text, Image} from 'react-native';
import Presentacion from "./components/Presentacion"
import Nav from "./components/Nav"
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(){
  return(
    <SafeAreaProvider>
      <View style={styles.container}>

        <Presentacion/>
        
      </View>
    </SafeAreaProvider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8
  }
});