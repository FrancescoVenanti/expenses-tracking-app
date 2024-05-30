import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecenteExpenses = () => {
	return (
		<View>
			<ExpensesOutput periodName="Last 7 days" />
		</View>
	);
};

export default RecenteExpenses;
