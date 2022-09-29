import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import Account from '@screens/home/Account';
import Dashboard from '@screens/home/Dashboard';
import Track from '@screens/home/Track';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Track" component={Track} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Tabs;
