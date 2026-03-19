import ButtonsComponent from "@/components/ButtonsComponent";
import DisplayComponent from "@/components/DisplayComponent";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 50,
        backgroundColor: 'black'
      }}
    >
      <DisplayComponent />
      <ButtonsComponent />
    </View>
  );
}
