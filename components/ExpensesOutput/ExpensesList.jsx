import { FlatList, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
	return <ExpenseItem {...itemData.item} />;
}

const ExpensesList = ({ expenses }) => {
	return <FlatList data={expenses} renderItem={renderExpenseItem} />;
};

export default ExpensesList;
