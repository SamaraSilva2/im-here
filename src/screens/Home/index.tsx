import React from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  const participants = ["Marina", "Júlio", "Pedro", "Bernardo", "Cecília", "José", "Théo", "Caio", "Jéssica"];

  function handleParticipantAdd() {
    if(participants.includes("Rodrigo")) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!");
    }

    console.log(`Você clicou em adicionar o participante.`);
  }
  
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity> 
      </View>   

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove("Rodrigo")} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
   

    </View>
  );
}