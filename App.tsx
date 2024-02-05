import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, GestureResponderEvent, ScrollView } from 'react-native';
import sosLogoInicio from './assets/img/sos.png'
import sosLogo from './assets/img/sos2.png'
import { useState } from 'react';


function TelaInicial() {

  return (
    <Image
      source={sosLogoInicio}
      style={{ width: 150, flex: 1 }}
      resizeMode='contain'
    />
  )
}

function PaginaFormulario() {
  return (
    <ScrollView style={{ width: '100%', padding: 20}}>

      <View style={{ flexDirection: 'row', height: 150, alignItems: 'center' }}>
        <Image
          source={sosLogo}
          style={{ width: 60, height: 60, alignItems: 'flex-start' }}
          resizeMode='contain'
        />
      </View>


      <View style={{ justifyContent: 'space-around' }}>

        <Text style={styles.txtLabel}>Nome completo</Text>
        <TextInput
          placeholder='Seu nome'
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 8,
            fontSize: 18,
            marginTop: 5,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOpacity: 1,
          }}
        />

        <Text style={styles.txtLabel}>Telefone</Text>
        <TextInput
          placeholder='Seu telefone'
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 8,
            fontSize: 18,
            marginTop: 5,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOpacity: 1,
          }}
        />

        <Text style={styles.txtLabel}>E-mail</Text>
        <TextInput
          placeholder='Seu e-mail'
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 8,
            fontSize: 18,
            marginTop: 5,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOpacity: 1,
          }}
        />

        <Text style={styles.txtLabel}>Localização</Text>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder='Insira sua localização...'
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 8,
            fontSize: 18,
            marginTop: 5,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOpacity: 1,
          }}
        />

        <TextInput
          placeholder='Detalhes'
          multiline
          numberOfLines={4}
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 8,
            fontSize: 18,
            marginTop: 5,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOpacity: 1,
          }}
        />

        <TouchableOpacity style={styles.btnHelp}>
          <Text style={styles.txtButton}>Enviar</Text>
        </TouchableOpacity>

      </View>


    </ScrollView>

  )
}

export default function App() {

  const [screen, setScreen] = useState(false)
  function handleScreen() {
    setScreen(!screen)
  }

  return (
    <View style={styles.container}>

      {!screen ? <TelaInicial /> : <PaginaFormulario />}

      <View style={{flex: 1, width: '90%', justifyContent: 'flex-start'}}>
        <TouchableOpacity style={[styles.btnHelp, { display: !screen ? 'flex' : 'none' }]} onPress={handleScreen}>
          <Text style={styles.txtButton}>Pedido de ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnCancel, { display: !screen ? 'none' : 'flex', }]} onPress={handleScreen}>
          <Text style={styles.txtButton}>Cancelar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnHelp: {
    backgroundColor: '#f54040',
    alignItems: 'center',
    borderRadius: 5,
    padding: 8,
  },
  btnCancel: {
    marginTop: -40,
    backgroundColor: '#f54040',
    alignItems: 'center',
    borderRadius: 5,
    padding: 8,
  },
  txtButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  txtLabel: {
    fontSize: 18,
    fontWeight: '500'
  }
});
