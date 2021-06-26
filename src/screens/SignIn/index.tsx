import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";

import IllustrationImg from "../../assets/illustration.png";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignin() {
    try {
      await signIn();
    } catch (error) {
      console.log(error.message);
      Alert.alert(error.message);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{"\n"}e organize suas{"\n"}
            jogatinas
          </Text>
          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com discord" onPress={handleSignin} />
          )}
        </View>
      </View>
    </Background>
  );
}
