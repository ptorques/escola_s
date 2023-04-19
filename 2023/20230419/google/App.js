import { StyleSheet, Text, Image, View, TextInput, Pressable, Linking} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/netflix.png")}/>
      <TextInput style={StyleSheet.compose(styles.TextInput, {borderTopLeftRadius: 10, borderTopRightRadius: 10})} placeholder='Email'/>
      <TextInput style={StyleSheet.compose(styles.TextInput, {borderBottomLeftRadius: 10, borderBottomRightRadius: 10})} placeholder='Password'/>
      <Pressable style={styles.button}><Text style={{color: "#fff", fontSize: 20, fontWeight: 'bold'}}>Sign In</Text></Pressable>
      <Text style={styles.passReset} onPress={() => {Linking.openURL('#');}}>Forgot your password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4131d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    width: "70%",
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: .5,
    borderColor: "#808080",
  },
  button: {
    width: "70%",
    backgroundColor: 'transparent',
    padding: 15,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "10%"
  },
  passReset: {
    color: "#FFF",
    marginTop: "20%",
    fontSize: 20,
    fontWeight: 'bold',
  }
});