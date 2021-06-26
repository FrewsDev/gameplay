import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { ModalSignOut } from "../ModalSingOut";

import { styles } from "./styles";

export function Profile() {
  const { user, signOut } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <RectButton onPress={() => setModalOpen(true)}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}> {user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
      <ModalSignOut
        visible={modalOpen}
        closeModal={() => setModalOpen(false)}
        signOut={signOut}
      />
    </View>
  );
}
