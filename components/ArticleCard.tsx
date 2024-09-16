import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ArticleCard = () => {
  return (
    <View className="w-[340px] mr-5 bg-[#C02286] p-4 h-[160px] rounded-xl ">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-base text-white">02 July 2022</Text>
        <Ionicons name="bookmark-outline" color="white" size={25} />
      </View>
      <Text className=" mt-5 text-lg  font-bold text-white">
        COVID- 19 Vaccine
      </Text>
      <View className=" flex flex-row items-center justify-between">
        <Text className="text-white mt-2">
          Official public service announcement on coronavirus from the world
          health
        </Text>
        <Ionicons name="arrow-forward-outline" color="white" size={25} />
      </View>
    </View>
  );
};

export default ArticleCard;
