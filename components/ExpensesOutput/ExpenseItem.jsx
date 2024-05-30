import { Pressable, StyleSheet, Text, TextBase, View } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { getFormattedDate } from "../../util/date";

const ExpenseItem = ({ description, amount, date }) => {
	return (
		<Pressable>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.TextBase, styles.description]}>{description}</Text>
					<Text style={styles.TextBase}>{getFormattedDate(date)}</Text>
				</View>
				<View style={styles.amountContainer}>
					<Text style={[styles.TextBase, styles.amount]}>$ {amount.toFixed(2)}</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default ExpenseItem;

const styles = StyleSheet.create({
	expenseItem: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: GlobalStyles.colors.primary500,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 10,
		elevation: 5,
		shadowColor: GlobalStyles.colors.gray500,
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.35,
		shadowRadius: 3.84,
	},
	TextBase: {
		color: GlobalStyles.colors.primary50,
	},
	description: {
		fontSize: 16,
		marginBottom: 4,
		fontWeight: "bold",
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		minWidth: 80,
	},
	amount: {
		color: GlobalStyles.colors.primary500,
		fontWeight: "bold",
	},
});