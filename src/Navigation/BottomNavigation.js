import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Card from "../Card/Card";
import EmployeeCards from "../EmployeeCards/EmployeeCards";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="EmployeeCards"
        component={EmployeeCards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={Card}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="v-card" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
