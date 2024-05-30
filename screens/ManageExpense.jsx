import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/GlobalStyles";
import Button from "../components/UI/Button";

const ManageExpense = ({ route, navigation }) => {
	const editedExpenseId = route.params?.expenseId;

	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [navigation, isEditing]);

	function deleteExpenseHandler() {}
	function cancelHandler() {}
	function confirmHandler() {}

	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<Button style={styles.button} mode="flat" onPress={cancelHandler}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={confirmHandler}>
					{isEditing ? "Update" : "Add"}
				</Button>
			</View>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon="trash"
						onPress={deleteExpenseHandler}
						color={GlobalStyles.colors.error500}
						size={24}
					/>
				</View>
			)}
		</View>
	);
};

export default ManageExpense;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		backgroundColor: GlobalStyles.colors.primary800,
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
	deleteContainer: {
		marginTop: 12,
		paddingTop: 12,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: "center",
	},
});
