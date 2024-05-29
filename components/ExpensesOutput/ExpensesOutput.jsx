import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const expensesOutput = ({ expenses, periodName }) => {
	return (
		<View>
			<ExpensesSummary expenses={expenses} periodName={periodName} />
			<ExpensesList />
		</View>
	);
};

export default expensesOutput;
