//copiado do app.tsx e apagando o import StyleSheet que vai para o styles.ts
//o recebimento de dados do usuário vai ocorrer através do TextInput

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

//importando o componente do Participant
import { Participant } from '../../components/Participant';

//importando a estilização do arquivo styles.ts que já foi exportado por lá
import { styles } from './styles';

//muda o nome de App para Home, que é o nome da interface
export function Home() {
  const [participants, setParticipants] = useState<string[]>([]); //o primeiro array mostra na primeira posição o estado atual e na segunda posição atualiza 
  const  [participantName, setParticipantName] = useState('');

//adicionando um participante
  function handleParticipantAdd(){
    //validando se este nome já foi informado
    if(participants.includes(participantName)) {      
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome");
    }

    //adicionando participantes no array e recuperando o que já estava na lista (prevState)
    setParticipants(prevState => [...prevState, participantName])

    //limpando a caixa de input a cada vez que um nome for adicionado, deixando um conteúdo vazio >> ligado ao "value" do text input abaixo
    setParticipantName('');

       
  }
//removendo um participante
  function handleParticipantRemove(name: string){    
    //confirmando se a pessoa realmente quer deletar o participante
    // [] é o array com propriedades para definir os botões
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        //atualizando o estado >> setParticipants atualiza o estado de participantes >> prevState é o estado atual de participantes >> a arrow function está pedindo para retornar todos os participantes menos o que teve o nome deletado
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'  //informa que este botão não faz nada
      }
    ]);  

  }

 
  //elementos que se quer exibir em tela
  return(
    //acessando a estilização do container que está na constante depois da View
    <View style={styles.container}>
      <Text style={styles.eventName}>
        I'm Here
        </Text>

      <Text style={styles.eventDate}>
        Sexta, 07 de abril de 2023.
        </Text>  

      <View style={styles.form}>
        <TextInput
         style={styles.input} 
         placeholder="Nome do participante" // aparece para o usuário antes de ele inserir os dados
         placeholderTextColor="#6B6B6B" 
         onChangeText={setParticipantName}   //guarda o texto dentro do estado (adição de participante) >> dispara um evento sempre que o conteúdo do text input muda >> acessa o conteúdo atual da caixa de texto
         value={participantName}
        /> 

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View> 
      
      <FlatList //propriedadades que irão compor a lista >> o FlatList também já realiza a rolagem, assim como o ScrollView
        data={participants} //coleção de dados
        keyExtractor={item => item} //acessa o item através do elemento do dado, dizendo o que quer se usar como dado, através da arrow function
        renderItem={({ item }) => (  //o que se quer renderizar de cada item da lista
          <Participant 
            key={item}  //cada chave precisa ser única, ou seja, cada nome de usuário
            name={item}   //passando o nome de forma dinâmica
            onRemove={() => handleParticipantRemove(item)} 
          />   
        )} 
        showsVerticalScrollIndicator={false}
        //caso a lista esteja vazia:
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}

     />                 
    </View>
  )
}