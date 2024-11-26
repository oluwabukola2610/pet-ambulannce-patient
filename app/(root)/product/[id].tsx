import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import { router } from "expo-router";

const Details = () => {
  const image = require("@/assets/images/Rectangle 381.png");
  const name = "Rottweiler (KUSA)";
  const description =
    "The Rottweiler is a confident, powerful, and loyal dog. Known for its intelligence and strength, it's a great companion and protector.";
  const price = 250000;
  const rating = 4;

  const phoneNumber = "+2349017628671";

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center p-4 bg-gray-100">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4">Details</Text>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 p-4">
        <Image source={image} className="w-full h-64 rounded-lg mb-4" />

        <Text className="text-xl font-bold text-gray-800 mb-2">{name}</Text>

        <Text className="text-base text-gray-600 mb-4">{description}</Text>

        <Text className="text-lg font-semibold text-gray-800 mb-4">
          Price: ₦{price.toLocaleString()}
        </Text>

        <View className="flex-row items-center space-x-1 mb-8">
          <Text className="text-base font-medium text-gray-800">Rating:</Text>
          {[...Array(5)].map((_, index) => (
            <Ionicons
              key={index}
              name={index < rating ? "star" : "star-outline"}
              size={20}
              color="#FFD700"
            />
          ))}
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View className="flex-row space-x-5 items-center p-4 bg-gray-100 border-t border-gray-300">
        <TouchableOpacity
          className="flex-row items-center bg-[#27AE60] p-4 rounded-lg"
          onPress={() => router.push("/(root)/(tabs)/home")}
        >
          <Ionicons name="home" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-center bg-[#27AE60] p-4 rounded-lg flex-1"
          onPress={handleCall}
        >
          <Ionicons name="call" size={30} color="white" />
          <Text className="ml-2 text-white uppercase font-semibold text-xl">
            Call to order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Details;
