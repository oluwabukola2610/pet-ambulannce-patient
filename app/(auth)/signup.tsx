import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { image } from "@/constants";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import CustomSelect from "@/components/CustomSelect";
import { router } from "expo-router";

const CreateAccount = () => {
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      gender: "",
      password: "",
      confirmPassword: "",
    },
  });

  const validate = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required",
      pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" },
    },
    contact: { required: "Contact number is required" },
    gender: { required: "Gender is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters long",
      },
    },
    confirmPassword: {
      required: "Confirm password is required",
      validate: (value: string) =>
        value === watch("password") || "Passwords do not match",
    },
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    router.push("/sucess");
  };

  return (
    <View
      style={{ flex: 1 }}
    >
      <Image
        source={image.plainbg}
        className="absolute bg-red-800 w-full h-full top-0 left-0"
        resizeMode="cover"
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="p-6 mt-14 w-full flex-1">
          <Image source={image.logo} />
          <View className="pt-8 flex-1">
            <Text className="text-2xl font-medium text-general">
              Create Account
            </Text>

            {/* Name Input */}
            <Controller
              control={control}
              name="name"
              rules={validate.name}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Name"
                  placeholder="Enter your name"
                  value={value}
                  handlechange={onChange}
                  error={errors.name?.message}
                />
              )}
            />

            {/* Email Input */}
            <Controller
              control={control}
              name="email"
              rules={validate.email}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Email"
                  placeholder="Enter your email"
                  value={value}
                  handlechange={onChange}
                  error={errors.email?.message}
                />
              )}
            />

            {/* Contact Input */}
            <Controller
              control={control}
              name="contact"
              rules={validate.contact}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Contact Number"
                  placeholder="Enter your contact number"
                  value={value}
                  handlechange={onChange}
                  error={errors.contact?.message}
                />
              )}
            />

            {/* Gender Picker */}
            <Controller
              control={control}
              name="gender"
              rules={validate.gender}
              render={({ field: { onChange, value } }) => (
                <CustomSelect
                  title="Gender"
                  value={getValues("gender")}
                  onchange={(val) => setValue("gender", val)}
                  data={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                  error={errors.gender?.message}
                />
              )}
            />

            {/* Password Input */}
            <Controller
              control={control}
              name="password"
              rules={validate.password}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Password"
                  placeholder="Enter your password"
                  value={value}
                  handlechange={onChange}
                  error={errors.password?.message}
                />
              )}
            />

            {/* Confirm Password Input */}
            <Controller
              control={control}
              name="confirmPassword"
              rules={validate.confirmPassword}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  title="Confirm Password"
                  placeholder="Confirm your password"
                  value={value}
                  handlechange={onChange}
                  error={errors.confirmPassword?.message}
                />
              )}
            />
            <CustomButton
              title="Create Account"
              handlePress={handleSubmit(onSubmit)}
              containerStyles="bg-[#008543] mt-16"
              textStyles="text-white"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateAccount;
