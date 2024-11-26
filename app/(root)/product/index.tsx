import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Product = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [sortOption, setSortOption] = useState("POPULARITY");
  const [filterOption, setFilterOption] = useState("ALL");

  const animals = [
    {
      id: "1",
      name: "Rottweiler (KUSA)",
      image: require("@/assets/images/Rectangle 381.png"),
      price: 250000,
    },
    {
      id: "2",
      name: "Doberman Pinscher",
      image: require("@/assets/images/Rectangle 387.png"),
      price: 200000,
    },
    {
      id: "3",
      name: "Bengal Kitten",
      image: require("@/assets/images/Rectangle 387.png"),
      price: 150000,
    },
    {
      id: "4",
      name: "Sun Conure",
      image: require("@/assets/images/Rectangle 381.png"),
      price: 80000,
    },
    {
      id: "5",
      name: "Rottweiler",
      image: require("@/assets/images/Rectangle 387.png"),
      price: 220000,
    },
    {
      id: "6",
      name: "Bengal Kitte",
      image: require("@/assets/images/Rectangle 387.png"),
      price: 140000,
    },
  ];

  const filteredAnimals = animals
    .filter(
      (animal) =>
        animal.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (filterOption === "ALL" ||
          animal.name.toLowerCase().includes(filterOption.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "LOW_PRICE") return a.price - b.price;
      if (sortOption === "HIGH_PRICE") return b.price - a.price;
      return 0;
    });
  const { width } = Dimensions.get("window");
  const cardWidth = (width - 32) / 2 - 8;

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={filteredAnimals}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListHeaderComponent={() => (
          <>
            <View className="px-2 mt-3 mb-2 flex flex-row items-center w-full">
            <TouchableOpacity
                onPress={() => router.push("/home")}
                className="mr-2"
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
              <TextInput
                className="bg-white h-12 rounded-lg px-4 w-full"
                placeholder="Search for an animal..."
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
            </View>
            <View className="bg-black p-4 text-center">
              <Text className="text-white text-xl font-semibold text-center">
                CALL TO ORDER
              </Text>
            </View>
            <View className="mt-3 w-full">
              <Swiper
                autoplay
                autoplayTimeout={3}
                showsPagination={true}
                height={150}
              >
                {animals.slice(0, 4).map((animal) => (
                  <View key={animal.id} className="w-full items-center">
                    <Image
                      source={animal.image}
                      style={{
                        width: width * 0.9,
                        height: 100,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                ))}
              </Swiper>
            </View>
            {/* Sort Dropdown */}
            <View className="bg-black p-3 flex flex-row justify-between items-center">
              <Ionicons name="grid" color="white" size={20} />
              <TouchableOpacity
                onPress={() => setShowSortDropdown((prev) => !prev)}
                className="flex flex-row items-center space-x-2"
              >
                <Text className="text-white text-lg font-semibold">
                  {sortOption}
                </Text>
                <Ionicons
                  name={showSortDropdown ? "chevron-up" : "chevron-down"}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowFilterDropdown((prev) => !prev)}
              >
                <Text className="text-white text-lg font-semibold">
                  FILTERS
                </Text>
              </TouchableOpacity>
            </View>

            {showSortDropdown && (
              <View className="bg-white p-4 absolute z-50 top-[40%] left-4 right-4">
                <TouchableOpacity
                  onPress={() => {
                    setSortOption("POPULARITY");
                    setShowSortDropdown(false);
                  }}
                  className="py-2"
                >
                  <Text className="text-black">POPULARITY</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSortOption("LOW_PRICE");
                    setShowSortDropdown(false);
                  }}
                  className="py-2"
                >
                  <Text className="text-black">Low Price</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setSortOption("HIGH_PRICE");
                    setShowSortDropdown(false);
                  }}
                  className="py-2"
                >
                  <Text className="text-black">Highest Price</Text>
                </TouchableOpacity>
              </View>
            )}

            {showFilterDropdown && (
              <View className="bg-white p-4 absolute z-50 top-[150px] left-4 right-4">
                <TouchableOpacity
                  onPress={() => {
                    setFilterOption("ALL");
                    setShowFilterDropdown(false);
                  }}
                  className="py-2"
                >
                  <Text className="text-black">All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setFilterOption("Pets");
                    setShowFilterDropdown(false);
                  }}
                  className="py-2"
                >
                  <Text className="text-black">Pets</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setFilterOption("Supplies");
                    setShowFilterDropdown(false);
                  }}
                  className="py-2"
                >
                  <Text className="text-black">Supplies</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setFilterOption("Foods");
                    setShowFilterDropdown(false);
                  }}
                  className="py-2"
                >
                  <Text className="text-black">Foods</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/product/[id]",
                params: {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  price: item.price,
                },
              })}
            style={{
              width: cardWidth,
              marginBottom: 16,
              borderRadius: 8,
              overflow: "hidden",
              marginHorizontal: 12,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: 120,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />
            <View className="px-3">
              <Text className="text-sm text-[#7F7D7D]">{item.name}</Text>
              <Text className="text-black/80 font-semibold">
                ₦{item.price.toLocaleString()}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Product;
