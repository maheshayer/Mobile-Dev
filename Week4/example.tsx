// import { useState } from 'react';
// import CheckBox from '@react-native-community/checkbox';
// import {TouchableOpacity, Alert, TextInput, Button, TouchableWithoutFeedback, Keyboard, TouchableHighlight, Modal, View, Text, Image, SectionList, Switch, StyleSheet, ScrollView, FlatList, Animated} from 'react-native';
// import styles from "./styles/AppStyles";


// const App = () => {
//   return (
//     <View style={{ backgroundColor: 'blue', marginTop:55, marginRight:2, paddingTop: 100, borderRadius: 5 }}>
//     </View>
//   );
// };


// const App = () => {
//   return (
//     <View style={{height: 200, width: 410, backgroundColor: 'grey', marginTop: 55 }}>
//       <Text style={{ fontSize: 25, color: 'red', fontWeight: 'bold', margin: 50, backgroundColor: 'blue', padding: 20 }}>
//         Presidential graduate school.
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{ alignItems: 'center', marginTop: 20 }}>
//       <Image 
//         source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
//         style={{ marginTop: 55, width: 200, height: 200, borderRadius: 10 }}
//       />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{ alignItems: 'center', marginTop: 20 }}>
//       <Image 
//         source={require('./assets/images/image.jpeg')}
//         style={{ marginTop: 55, width: 200, height: 200, borderRadius: 100 }}
//       />
//     </View>
//   );
// };


// const App = () => {
//   return (
//     <View style={{marginTop: 55, padding: 20 }}>
//       <TextInput 
//         style={{ borderWidth: 1, padding: 30, borderRadius: 100 }} 
//         placeholder="Enter your name"
//       />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{marginTop: 55, padding: 20, backgroundColor:'white' }}>
//       <Button title="Click Me" onPress={() => Alert.alert('Congtatulations!')} />
//     </View>
//   );
// };

// TouchableOpacity reduces the opacity when pressed, giving a smooth fade effect.
// const App = () => {
//   return (
//     <View style={{ paddingTop: 55, padding: 10 }}>
//       <TouchableOpacity 
//         style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 }}
//         onPress={() => Alert.alert('Custom Button Clicked!')}
//       >
//         <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const App = () => {
//   return (
//       <View style={{ margin:60, padding: 20, alignItems: 'center' }}>
//         <TouchableHighlight 
//           style={{ backgroundColor: 'blue', padding: 15, borderRadius: 10 }}
//           underlayColor="red"
//           onPress={() => Alert.alert('Button Pressed!')}
//         >
//           <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
//             Press Me
//           </Text>
//         </TouchableHighlight>
//       </View>
//   );
// };

// TouchableWithoutFeedback captures taps outside an input field and is commonly used to dismiss the keyboard.
// const App = () => {
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//         <TextInput 
//           style={{ borderWidth: 1, padding: 10, borderRadius: 5 }} 
//           placeholder="Type here..."
//         />
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };


// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, React Native!</Text>
//       <Text style={styles.text1}>Hello, React Native!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     padding: 20, 
//     backgroundColor: 'blue',
//     marginTop: 55
//   },
//   text: { 
//     fontSize: 18, 
//     color: 'white' 
//   },
//   text1: { 
//     fontSize: 18, 
//     color: 'black' 
//   },
// });


// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.boxRed} />
//       <View style={styles.boxGreen} />
//       <View style={styles.boxBlue} />
//       <View style={styles.boxGreen} />
//       <View style={styles.boxRed} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column', // Aligns children in a row (horizontal)
//     justifyContent: 'space-between', // Distributes items with space between them
//     alignItems: 'center', // Aligns items vertically in the center
//     padding: 20,
//     marginTop: 55
//   },
//   boxRed: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'red',
//   },
//   boxBlue: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//   },
//   boxGreen: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'green',
//   },
// });


// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.boxRed} />
//       <View style={styles.boxBlue} />
//       <View style={styles.boxRed} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column', // Aligns children in a row (horizontal)
//     alignItems: 'center', // Aligns items vertically in the center
//     padding: 20,
//     marginTop: 55
//   },
//   boxRed: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'red',
//   },
//   boxBlue: {
//     margin: 10,
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//   },
// });


// const App = () => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.title}>React Native</Text>
//       <Text style={styles.description}>Build cross-platform mobile apps easily!</Text>
//       <Button title="Learn More" onPress={() => Alert.alert('You clicked Learn More!')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'white',
//     padding: 20,
//     margin: 60,
//     borderRadius: 10,
//     shadowColor: 'blue',
//     shadowOpacity: 0.5,
//     shadowRadius: 30,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 10,
//   },
// });


// const App = () => {
//   return (
//     <View>
//       <View style={styles.upper}></View>
//       <ScrollView style={styles.container}>
//         <Text style={styles.text}>Item 1</Text>
//         <Text style={styles.text}>Item 2</Text>
//         <Text style={styles.text}>Item 3</Text>
//         <Text style={styles.text}>Item 4</Text>
//         <Text style={styles.text}>Item 5</Text>
//         <Text style={styles.text}>Item 6</Text>
// <Text style={styles.text}>Item 7</Text>
//         <Text style={styles.text}>Item 8</Text>

//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   upper:
//   {
//     marginTop: 55,
//     width: 400,
//     height: 200,
//     backgroundColor: 'green'
//   },
  
//   container: {
//     margin: 20,
//     height: 200,
//     width: 360
//   },
//   text: {
//     fontSize: 18,
//     padding: 10,
//     backgroundColor: 'lightgray',
//     marginBottom: 5,
//   },
// });

// const DATA = [
//   { id: '1', title: 'Item 1' },
//   { id: '2', title: 'Item 2' },
//   { id: '3', title: 'Item 3' },
//   { id: '4', title: 'Item 4' },
//   { id: '5', title: 'Item 5' },
// ];

// const App = () => {
//   return (
//     <FlatList
//       data={DATA} // The data array
//       keyExtractor={(item) => item.id} // Unique key for each item
//       renderItem={({ item }) => ( // Function to render each item
//         <View style={styles.item}>
//           <Text style={styles.text}>{item.title}</Text>
//         </View>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     marginTop: 55,
//     padding: 20,
//     marginVertical: 5,
//     backgroundColor: '#f9c2ff',
//   },
//   text: {
//     fontSize: 18,
//   },
// });

// const DATA = [
//   {
//     title: 'Fruits',
//     data: ['Apple', 'Banana', 'Orange'],
//   },
//   {
//     title: 'Vegetables',
//     data: ['Carrot', 'Broccoli', 'Spinach'],
//   },
// ];

// const App = () => {
//   return (
//     <View style={styles.upper}>
//       {/* SectionList component for rendering grouped lists */}
//       <SectionList
//         // The sections prop takes an array of objects where each object represents a section of the list
//         sections={DATA}
//         // keyExtractor ensures each item has a unique key for React's rendering optimization
//         keyExtractor={(item, index) => item + index}
//         // renderSectionHeader defines how each section header should be displayed
//         renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
//         // renderItem defines how each individual item should be displayed in the list
//         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   upper:{
//     marginTop: 55,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     backgroundColor: 'yellow',
//     padding: 10,
//   },
// });

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(true);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
//       <Switch
//         value={isEnabled} // Current switch state
//         onValueChange={(newValue) => setIsEnabled(newValue)} // Toggle state
//       />
//     </View>
//   );
// };


// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Count: {count}</Text>
//       <Button title="Increase Count" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };


// const App = () => {
//   const [text, setText] = useState('Abiral');

//   return (
//     <View style={{ padding: 20, marginTop: 55 }}>
//       <Text>Enter something:</Text>
//       <TextInput
//         style={{ borderBottomWidth: 1, height: 40, marginTop: 10 }}
//         placeholder="Type here..."
//         value={text}
//         onChangeText={setText}
//       />
//       <Text>You typed: {text}</Text>
//     </View>
//   );
// };



// const App = () => {
//   const [isChecked, setIsChecked] = useState(true);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <CheckBox value={isChecked} onValueChange={setIsChecked} />
//       <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text>
//     </View>
//   );
// };


// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Button title="Open Modal" onPress={() => setVisible(true)} />
//       <Modal visible={visible} transparent animationType="slide">
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContent}>
//             <Text style={styles.text}>This is a Modal!</Text>
//             <Button title="Close" onPress={() => setVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: 300,
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });
// export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello React Native</Text>
//     </View>
//   );
// }



// import {
//   ActivityIndicator,
//   Pressable,
//   SafeAreaView,
//   Platform,
//   Dimensions,
//   Linking,
//   StatusBar,
// } from 'react-native';
// import styles from './styles/AppStyles';


// // 1. Counter Component
// const CounterExample = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.box}>
//       <Text>Count: {count}</Text>
//       <Button title="Increase" onPress={() => setCount(count + 1)} />
//     </View>
//   );
// };


// // 2. Text Input Component
// const TextInputExample = () => {
//   const [text, setText] = useState('');

//   return (
//     <View style={styles.box}>
//       <TextInput
//         style={styles.input}
//         placeholder="Type here..."
//         value={text}
//         onChangeText={setText}
//       />
//       <Text>You typed: {text}</Text>
//     </View>
//   );
// };

// const ImageExample = () => {
//   return (
//     <View style={{ alignItems: 'center', marginTop: 20 }}>
//       <Image 
//         source={require('./assets/images/image.jpeg')}
//         style={{ marginTop: 10, width: 200, height: 200, borderRadius: 10 }}
//       />
//     </View>
//   );
// };


// // 3. Switch Component
// const SwitchExample = () => {
//   const [isEnabled, setIsEnabled] = useState(false);

//   return (
//     <View style={styles.box}>
//       <Switch value={isEnabled} onValueChange={setIsEnabled} />
//       <Text>{isEnabled ? 'ON' : 'OFF'}</Text>
//     </View>
//   );
// };


// // 4. Pressable Component
// const PressableExample = () => {
//   return (
//     <View style={styles.box}>

//       <Pressable
//         onPress={() => Alert.alert('Pressed')} //</View>
//     Normal tap
//         onLongPress={() => Alert.alert('Long Pressed')} // Hold press

//         style={({ pressed }) => ({
//           backgroundColor: pressed ? 'gray' : 'blue', // Change color
//           padding: 15,
//           borderRadius: 10,
//           alignItems: 'center',
//           transform: [{ scale: pressed ? 0.8 : 1 }], // Slight shrink effect
//           opacity: pressed ? 0.7 : 1, // Fade effect
//         })}
//       >
//         {({ pressed }) => (
//           <Text style={{ color: 'white', fontSize: 16 }}>
//             {pressed ? 'Pressing...' : 'Press Me'}
//           </Text>
//         )}
//       </Pressable>

//     </View>
//   );
// };



// // 5. Modal Component
// const ModalExample = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <View style={styles.box}>
//       <Button title="Open Modal" onPress={() => setVisible(true)} />

//       <Modal visible={visible} transparent animationType="slide">
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContent}>
//             <Text>This is a Modal</Text>
//             <Button title="Close" onPress={() => setVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };


// // 6. Activity Indicator
// const LoadingExample = () => {
//   return (
//     <View style={styles.box}>
//       <ActivityIndicator size="small" color="blue" />
//     </View>
//   );
// };



// // 8. FlatList Component
// const ListExample = () => {
//   const DATA = [
//     { id: '1', title: 'Item 1' },
//     { id: '2', title: 'Item 2' },
//     { id: '3', title: 'Item 3' },
//   ];

//   return (
//     <View style={styles.box}>
//       <FlatList
//         data={DATA}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Text style={styles.item}>{item.title}</Text>
//         )}
//       />
//     </View>
//   );
// };


// // 9. Dimensions + Platform
// const DeviceInfoExample = () => {
//   const { width, height } = Dimensions.get('window');

//   return (
//     <View style={styles.box}>
//       <Text>Width: {width}</Text>
//       <Text>Height: {height}</Text>
//       <Text>Platform: {Platform.OS}</Text>
//     </View>
//   );
// };


// // 10. Linking
// const LinkingExample = () => {
//   return (
//     <View style={styles.box}>
//       <Button title="Open Google" onPress={() => Linking.openURL('https://google.com')} />
//     </View>
//   );
// };





// //MAIN APP
// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="dark-content" />

//       <ScrollView>
//         <Text style={styles.title}>React Native Components Demo</Text>

//         {/* Call all components */}
//         <CounterExample />
//         <TextInputExample />
//         <SwitchExample />
//         <ImageExample/>
//         <PressableExample />
//         <ModalExample />
//         <LoadingExample />
//         <DeviceInfoExample />
//         <LinkingExample />

//       </ScrollView>

//       <ListExample />
//     </SafeAreaView>
//   );
// };


// export default App;


// // Card in the middle of the Screen.
// // 2 input field inside the card. (Username and Password)
// // 2 buttons(One cancel and another sign in)
// // Cancel button should be outlined and Sign In button should be TouchableOpacity/Pressable
// // On press on sign in button, alert should be displayed as Signed In Successfully in modal.
// // Modal needs to have close button where closing modal takes you back to sign in form.