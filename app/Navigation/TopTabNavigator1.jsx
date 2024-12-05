import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ModelOneTab1 from "../Screens/TopTabs/ModelTabs/Model1/ModelOneTab1";
import ModelOneTab2 from "../Screens/TopTabs/ModelTabs/Model1/ModelOneTab2";
import ModelOneTab3 from "../Screens/TopTabs/ModelTabs/Model1/ModelOneTab3";

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ModelOneTab1"
        component={ModelOneTab1}
        options={{ title: "Create Image" }}
      />
      <Tab.Screen
        name="ModelOneTab2"
        component={ModelOneTab2}
        options={{ title: "Recents Image" }}
      />
      <Tab.Screen
        name="ModelOneTab3"
        component={ModelOneTab3}
        options={{ title: "Your Prompts" }}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;
