import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import ArticleCard from "@/components/ArticleCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Dashboard = () => {
  const items = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
  ];

  return (
    <View className="flex-1 ">
      <View
        style={{
          backgroundColor: "#028543",
          height: Platform.OS === "android" ? 270 : 300,
          padding: 24,
          justifyContent: "center",
        }}
      >
        <Text className="text-2xl font-semibold text-white mt-12 leading-10">
          Hey, Alicent!
        </Text>
        <Text className="text-base text-white">Good Morning.</Text>
        <View className="mt-10 items-center">
          <TouchableOpacity
            className="bg-[#C02286] p-3 justify-center rounded-2xl items-center"
            onPress={() => router.push("/requestDoc")}
          >
            <Text className="text-white text-lg">Request for a doctor</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className=" rounded-t-[25px] h-full bg-white py-4 -mt-3">
        <Text className="text-lg p-4 font-medium text-black mt-4">
        Animal Health Articles
        </Text>

        <FlatList
          data={items}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ArticleCard />}
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
          style={{ flexGrow: 0 }}
        />

        <View className="p-4 gap-y-4">
          <Text className="text-lg mb-2 font-medium text-black">
            Treat your pets in 3 easy steps
          </Text>
          <View className="flex flex-row items-center ">
            <View className=" rounded-lg p-2 bg-[#C02286] w-[50px] ">
              <Ionicons name="search-sharp" size={28} color="white" />
            </View>
            <Text className="ml-4 text-base">Request for a Vetenarian</Text>
          </View>
          <View className="flex flex-row items-center ">
            <View className=" rounded-lg p-2 bg-[#C02286] w-[50px] ">
              <Ionicons name="bookmark-outline" size={28} color="white" />
            </View>
            <Text className="ml-4 text-base">Allow Location</Text>
          </View>
          <View className="flex flex-row items-center ">
            <View className=" rounded-lg p-2 bg-[#C02286] w-[50px] ">
              <Ionicons name="checkmark-outline" size={28} color="white" />
            </View>
            <Text className="ml-4 text-base">Treatment Completed </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
