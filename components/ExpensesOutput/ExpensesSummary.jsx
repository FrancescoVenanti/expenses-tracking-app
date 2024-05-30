import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

const ExpensesSummary = ({ periodName, expenses }) => {
	const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

	return (
		<View style={styles.container}>
			<Text style={styles.period}>{periodName}</Text>
			<Text style={styles.amount}>Total: ${expensesSum.toFixed(2)}</Text>
		</View>
	);
};

export default ExpensesSummary;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: GlobalStyles.colors.primary50,
		borderRadius: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	period: {
		fontSize: 16,
		color: GlobalStyles.colors.primary400,
	},
	amount: {
		fontSize: 20,
		fontWeight: "bold",
		color: GlobalStyles.colors.primary500,
	},
});
