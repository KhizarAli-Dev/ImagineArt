import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ModelTwoTab1 from "../Screens/TopTabs/ModelTabs/Model2/ModelTwoTab1";
import ModelTwoTab2 from "../Screens/TopTabs/ModelTabs/Model2/ModelTwoTab2";
import ModelTwoTab3 from "../Screens/TopTabs/ModelTabs/Model2/ModelTwoTab3";


const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ModelTwoTab1" component={ModelTwoTab1}/>
      <Tab.Screen name="ModelTwoTab2" component={ModelTwoTab2} />
      <Tab.Screen name="ModelTwoTab3" component={ModelTwoTab3} />
    </Tab.Navigator>
  );
};

export default TopTabs;
