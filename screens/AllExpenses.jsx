import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpense = () => {
	const expensesCtx = useContext(ExpensesContext);
	return (
		<View>
			<ExpensesOutput periodName="Total" expenses={expensesCtx.expenses} fallbackText="No expenses yet" />
		</View>
	);
};

export default AllExpense;
