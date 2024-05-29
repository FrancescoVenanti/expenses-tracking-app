import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import AllExpense from "./screens/AllExpenses";
import RecenteExpenses from "./screens/RecentExpenses";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpensesOverview = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: GlobalStyles.colors.primary500,
				},
				headerTintColor: "white",
				tabBarStyle: {
					backgroundColor: GlobalStyles.colors.primary500,
				},
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
			}}
		>
			<BottomTab.Screen
				name="RecentExpenses"
				component={RecenteExpenses}
				options={{
					title: "Recent Expense",
					tabBarLabel: "Recent",
					tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />,
				}}
			/>
			<BottomTab.Screen
				name="AllExpenses"
				component={AllExpense}
				options={{
					title: "All Expense",
					tabBarLabel: "All",
					tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />,
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="ExpensesOverview"
						component={ExpensesOverview}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen name="ManageExpense" component={ManageExpense} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
