import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { image } from "@/constants";
import ArticleCard from "@/components/ArticleCard";
import { Ionicons } from "@expo/vector-icons";

const Dashboard = () => {
  const items = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
  ];

  return (
    <View className="flex-1 ">
      <View className="bg-[#028543] h-[300px] p-6 justify-center">
        <Text className="text-2xl font-semibold text-white mt-12 leading-10">
          Hey, Alicent!
        </Text>
        <Text className="text-base text-white">Good Morning.</Text>
        <View className="mt-10 items-center">
          <TouchableOpacity
            style={{
              backgroundColor: "#C02286",
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-white text-lg">Request for a doctor</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className=" rounded-t-[25px] h-full bg-white py-4 -mt-3">
        <Text className="text-lg p-4 font-medium text-black mt-5">
          Health Articles
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
            <Text className="ml-4 text-base">Request a doctor</Text>
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
