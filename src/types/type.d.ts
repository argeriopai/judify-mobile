import { TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  bgVariant?: "primary" | "secondary" | "success" | "outline" | "danger";
  textVariant?: "primary" | "secondary" | "success" | "outline" | "danger";
}