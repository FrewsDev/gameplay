import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  closeModal: () => void;
  signOut: () => void;
};

export function ModalSignOut({ closeModal, signOut, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.signOutContainer}>
                <Text style={styles.signOutText}>
                  Desaja sair do Game
                  <Text style={[styles.signOutText, styles.playText]}>
                    Play
                  </Text>
                </Text>
                <View style={styles.signOutButtonContainer}>
                  <View style={[styles.cancel]}>
                    <TouchableOpacity
                      style={styles.signOutButton}
                      onPress={closeModal}
                    >
                      <Text style={styles.signOutButtonText}>Não</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.ok}>
                    <TouchableOpacity
                      style={styles.signOutButton}
                      onPress={signOut}
                    >
                      <Text style={styles.signOutButtonText}>Sim</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
