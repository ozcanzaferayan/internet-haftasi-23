import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MyTextInput from "../../components/MyTextInput";
import MyButton from "../../components/MyButton";
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "../../services/firebase";

const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = useState("ozcanzaferayan@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user != null) {
          sendEmailVerification(user).then(() => {
            alert("Email verification sent");
          });
        }
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          signInWithEmailAndPassword(auth, mail, password).then(
            (userCredential) => {
              const user = userCredential.user;
              navigation.navigate("Home", { user });
            }
          );
        }
      });
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/my-first-project-ead7f.appspot.com/o/socail-messenger-app-logo.jpg?alt=media&token=ad993549-6bd2-4672-b6cc-7c7db48f7fc8",
        }}
        style={styles.logo}
      />
      <Text style={styles.appName}>Messenger</Text>
      <MyTextInput
        placeholder={"Email"}
        icon="email"
        inputMode={"email"}
        value={mail}
        onChangeText={setMail}
      />
      <MyTextInput
        placeholder={"Password"}
        icon="password"
        inputMode={"password"}
        value={password}
        onChangeText={setPassword}
      />
      <MyButton onPress={handleLogin}>Log In</MyButton>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    gap: 16,
    marginHorizontal: 32,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  appName: {
    fontSize: 46,
    fontWeight: "500",
    alignSelf: "center",
    fontFamily: "Lobster_400Regular",
    color: "#2e64e5",
  },
});
