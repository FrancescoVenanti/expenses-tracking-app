import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpense = () => {
	return (
		<View>
			<ExpensesOutput periodName="Total" />
		</View>
	);
};

export default AllExpense;
