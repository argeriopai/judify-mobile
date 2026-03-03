import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = ( variant: ButtonProps["bgVariant"] ) => {
  switch (variant) {
    case "primary":
      return "bg-blue-500";
    case "secondary":
      return "bg-gray-500";
    case "success":
      return "bg-green-500";
    case "outline":
        return "bg-transparent border-2 border-gray-500";
    case "danger":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
}

const getTextVariantStyle = ( variant: ButtonProps["textVariant"] ) => {
  switch (variant) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-gray-500";
    case "success":
      return "text-green-500";
    case "danger":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
}