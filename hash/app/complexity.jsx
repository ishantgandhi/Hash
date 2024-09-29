// import { FlatList, Text, View, ScrollView } from "react-native";
// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import NavBar from "./components/NavBar";

// const index = () => {
//   return (
//     <SafeAreaView className="flex-1">
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <NavBar />
//         <View className="flex-1 px-5 py-7">
//           <Text className="text-4xl font-pmedium mb-1">Linked List</Text>
//           <Text className="text-lg text-stone-400 font-pregular mb-6">
//             Time Complexity
//           </Text>
//           <View className="w-full h-full">
//             <FlatList
//               data={[
//                 { key: "O(1)", value: "Constant Time" },
//                 { key: "O(log n)", value: "Logarithmic Time" },
//                 { key: "O(n)", value: "Linear Time" },
//                 { key: "O(n log n)", value: "Linearithmic Time" },
//                 { key: "O(n^2)", value: "Quadratic Time" },
//                 { key: "O(2^n)", value: "Exponential Time" },
//                 { key: "O(n!)", value: "Factorial Time" },
//               ]}
//               renderItem={({ item }) => (
//                 <View className="flex flex-row justify-between items-center border-b h-20 p-3">
//                   <Text className="text-2xl font-pmedium">{item.value}</Text>
//                   <Text className="text-2xl font-pmedium text-cyan-500">{item.key}</Text>
//                 </View>
//               )}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default index;
