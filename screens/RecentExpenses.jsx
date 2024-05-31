import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDayMinusDays } from "../util/date";

const RecenteExpenses = () => {
	const expensesCtx = useContext(ExpensesContext);
	const recentExpenses = expensesCtx.expenses.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDayMinusDays(today, 7);
		return expense.date >= date7DaysAgo;
	});
	return (
		<View>
			<ExpensesOutput
				periodName="Last 7 days"
				expenses={recentExpenses}
				fallbackText="No expenses in the last 7 days"
			/>
		</View>
	);
};

export default RecenteExpenses;
