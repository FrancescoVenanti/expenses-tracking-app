import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/GlobalStyles";

const dummyExpenses = [
	{
		id: "e1",
		description: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		description: "New TV",
		amount: 799.49,
		date: new Date(2024, 5, 29),
	},
	{
		id: "e3",
		description: "Car Insurance",
		amount: 294.67,
		date: new Date(2024, 5, 26),
	},
	{
		id: "e4",
		description: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2024, 5, 27),
	},
	{
		id: "e5",
		description: "book",
		amount: 15,
		date: new Date(2024, 4, 22),
	},
	{
		id: "e6",
		description: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e7",
		description: "New TV",
		amount: 799.49,
		date: new Date(2024, 5, 29),
	},
	{
		id: "e8",
		description: "Car Insurance",
		amount: 294.67,
		date: new Date(2024, 5, 26),
	},
	{
		id: "e9",
		description: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2024, 5, 27),
	},
	{
		id: "e10",
		description: "book",
		amount: 15,
		date: new Date(2024, 4, 22),
	},
];

const ExpensesOutput = ({ expenses, periodName }) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={dummyExpenses} periodName={periodName} />
			<ExpensesList expenses={dummyExpenses} />
		</View>
	);
};

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingtop: 24,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700,
		height: "100%" /* TODO change to flex 1 */,
	},
});
