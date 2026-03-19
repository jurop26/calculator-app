import ButtonsComponent from "@/components/ButtonsComponent";
import DisplayComponent from "@/components/DisplayComponent";
import DisplayProvider from "@/context/DisplayContext";
import { View } from "react-native";

export default function Index() {

  return (
    <DisplayProvider>
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
    </DisplayProvider>
  );
}
