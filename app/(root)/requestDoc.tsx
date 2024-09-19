import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const RequestDoc = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center gap-x-4 p-4 my-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-medium">Found available doctor</Text>
      </View>
      <View className="p-4 rounded-lg bg-white mt-4 shadow-sm">
        <View className="flex-row items-center mb-4">
          <Image
            source={{ uri: "https://via.placeholder.com/250" }}
            className="w-16 h-16 rounded-full mr-4"
            resizeMode="cover"
          />
          <View className="flex-1">
            <Text className="text-lg font-semibold">Dr. John Doe</Text>
            <Text className="text-gray-500">General Physician</Text>
          </View>
        </View>
        <View className="mt-4">
          <TouchableOpacity
            className="bg-[#DEF2FF] px-3 py-2 rounded-lg justify-between flex flex-row items-center"
            onPress={() => alert("Book appointment")}
          >
            <View className="flex flex-row gap-x-4 items-center">
              <Ionicons name="time-outline" size={25} color="#9B268F" />
              <Text className="text-black font-semibold">Monday</Text>
              <Text className="font-thin">Oct 27, 2022</Text>
            </View>
            <Text className="font-thin">9:30 am</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="p-4 rounded-lg bg-white mt-4 shadow-sm">
        <TouchableOpacity
          className="bg-[#DEF2FF] p-2 justify-center flex flex-row items-center rounded-lg"
          onPress={() => alert("Book appointment")}
        >
          <Ionicons name="location" size={25} color="#0170BC" />
          <Text className="text-[#0170BC] font-semibold ml-2">
            New York, NY, US
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row gap-x-4 mt-4 justify-center">
          <TouchableOpacity
            className=" bg-[#6FCF97] w-[180px] gap-x-2 p-2 rounded-md justify-center flex flex-row items-center"
            onPress={() => alert("Book appointment")}
          >
            <Ionicons name="call" size={25} color="#838A93" />
            <Text className="text-[#838A93]"> Call Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#FE87C2] w-[180px] p-2 rounded-md justify-center flex flex-row items-center"
            onPress={() => alert("Book appointment")}
          >
            <Text className="text-[#C02286]  "> Physical</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RequestDoc;
