# Education React Native Navigation

## Table of Content

- React Navigation
- Tipe navigasi
  - Stack
  - Tab
  - Drawer
- Navigasi antar Screen
- Lempar Parameter antar Screen
- Nesting Navigasi

### React Navigation

Sebelumnya kita sudah pernah belajar mengenai `react-router`, salah satu library yang digunakan untuk membuat `router` pada aplikasi React.

Walaupun `react-router` ini baik untuk aplikasi web, namun pada pengembangannya, sebenarnya fokusnya hanya di web saja.

Karena sekarang ini kita akan mempelajari React Native (React versi Mobile), maka tentunya kita harus mencari library yang sepadan untuk ber-navigasi pada React Native ini, dan salah satunya adalah [`React Navigation`](https://reactnavigation.org/)

Cara menggunakannya adalah sebagai berikut:

1. Install package `react-navigation` dengan perintah berikut:

   ```sh
   npm install @react-navigation/native
   ```

1. Apabila menggunakan `expo`, wajib juga memasang package tambahan expo dengan perintah berikut:

   ```sh
   npx expo install react-native-screens react-native-safe-area-context
   ```

1. Pada aplikasi utama kita (umumnya `App.js(x)`), kita akan menggunakan React Navigation ini dengan cara yang hampir mirip dengan react router, yaitu sebagai berikut:

   ```js
   import { NavigationContainer } from "@react-navigation/native";

   export default function App() {
     return (
       <NavigationContainer>{/* Kode dimulai di sini */}</NavigationContainer>
     );
   }
   ```

Dan selanjutnya kita akan memilih menggunakan navigasi yang mana.

### Tipe Navigasi

Tipe navigasi pada React Native sebenarnya ada bervariasi, namun yang akan kita fokuskan di sini hanyalah 3 ini saja yah (dan hanya 2 pertama yang dicontohkan)

#### Stack

Ini adalah navigasi yang paling umum digunakan, dan ini hampir mirip seperti yang versi react-router, yaitu menggunakan `Stack Navigation`

Untuk contoh Stack kita bisa lihat pada dokumentasi berikut:

- [`Stack Navigator`](https://reactnavigation.org/docs/stack-navigator/)

Namun karena kita menggunakannya langsung untuk mobile saja, maka library yang digunakan adalah: `@react-navigation/native-stack`

- https://reactnavigation.org/docs/native-stack-navigator

Cara menggunakannya adalah dengan cara:

1. Install package untuk stack navigator dengan perintah sebagai berikut:

   ```js
   npm install @react-navigation/native-stack
   ```

1. Modifikasi pada file `App.js` untuk bisa menggunakan Stack Navigator sebagai berikut:

   ```js
   import { NavigationContainer } from "@react-navigation/native";
   // Pilih navigasi
   import { createNativeStackNavigator } from "@react-navigation/native-stack";

   import HomePage from "./screens/HomePage";
   import AnotherPage from "./screens/AnotherPage";

   export default function App() {
     return (
       ...
         <NavigationContainer>
           {/* (StackContainer) Kita selipkan di sini */}
           <Stack.Navigator>
             <Stack.Screen name="Home" component={HomePage} />
             <Stack.Screen name="Another" component={AnotherPage} />
           </Stack.Navigator>
         </NavigationContainer>
       ...
     );
   }
   ```

#### Tab

Ini adalah navigasi yang cukup umum ditemukan di Mobile Apps, yaitu ada kumpulan navigasi di atas ataupun di bawah tampilan yang ada sekarang (disebut dengan suatu Tab).

Pada pembelajaran ini yang akan kita pelajari adalah menggunakan `Bottom Tab` (jadi tabnya ada di bawah)

Untuk contoh Tab kita bisa lihat pada dokumentasi berikut:

- [`Tab Navigator`](https://reactnavigation.org/docs/bottom-tab-navigator)

Untuk Guidenya bisa lihat pada dokumentasi berikut:

- https://reactnavigation.org/docs/tab-based-navigation

#### Drawer

Ini adalah navigasi yang juga umum ditemukan pada Mobile Apps, yaitu ada sebuah "ruangan khusus" (yang disebut dengan `Drawer`) yang umumnya bisa dibuka dan ditutup via Gesture.

Untuk contoh Drawer kita bisa lihat pada dokumentasi berikut:

- [`Drawer Navigator`](https://reactnavigation.org/docs/drawer-navigator)

### Navigasi Antar Screen

- https://reactnavigation.org/docs/navigating

### Lempar Parameter antar Screen

- https://reactnavigation.org/docs/params

### Nesting Navigasi

- https://reactnavigation.org/docs/nesting-navigators
