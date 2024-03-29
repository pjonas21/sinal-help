import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, Modal, TextInput, Alert, ScrollView } from 'react-native';
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
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [local, setLocal] = useState('')
  const [detalhes, setDetalhes] = useState('')

  const [modalVisible, setModalVisible] = useState(false);

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
          onChange={(text) => setNome(text.nativeEvent.text)}
          value={nome}
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
          keyboardType='phone-pad'
          onChange={(text) => setTelefone(text.nativeEvent.text)}
          value={telefone}
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
          onChange={(text) => setEmail(text.nativeEvent.text)}
          value={email}
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
          onChange={(text) => setLocal(text.nativeEvent.text)}
          value={local}
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
          onChange={(text) => setDetalhes(text.nativeEvent.text)}
          value={detalhes}
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

        <TouchableOpacity 
          style={styles.btnHelp}
          onPress={() => {Alert.alert('Dados pedido: ', `Nome: ${nome} \nTelefone: ${telefone} \nEmail: ${email} \nLocalização: ${local} \nDetalhes: ${detalhes}`)}}
        >
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

      <View style={{flex: 1, width: '90%'}}>
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
