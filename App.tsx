import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ButtonCustom} from './src/components';

export default function App() {


  function handleOnpress(){
    console.log("ok")
  }

  return (
    <View style={styles.container}>
      <ButtonCustom 
      iconName='USB' 
      onPress={handleOnpress} 
      title='Primary Enable' 
      style={{marginBottom: 10}} 
      />
      <ButtonCustom 
      iconName='API' 
      onPress={handleOnpress} 
      title='Primary Desable' 
      disable 
      style={{marginBottom: 10}} 
      />
      <ButtonCustom 
      isLoading
      iconName='API' 
      onPress={handleOnpress} 
      title='Primary Desable' 
      style={{marginBottom: 10}} 
      />
      <ButtonCustom 
      variant='outline'
      iconName='CodeSandbox' 
      onPress={handleOnpress} 
      title='Outline Enable' 
      style={{marginBottom: 10}} 
      />
      <ButtonCustom 
      variant='outline'
      iconName='addfile' 
      onPress={handleOnpress} 
      title='Outline Desable' 
      disable 
      style={{marginBottom: 10}} 
      />
      <ButtonCustom 
      isLoading
      variant='outline'
      iconName='addfile' 
      onPress={handleOnpress} 
      title='Outline Desable' 
      disable 
      style={{marginBottom: 10}} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
