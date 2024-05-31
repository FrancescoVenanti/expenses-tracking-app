import { createContext, useReducer } from "react";

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
		date: new Date(2024, 4, 29),
	},
	{
		id: "e3",
		description: "Car Insurance",
		amount: 294.67,
		date: new Date(2024, 4, 26),
	},
	{
		id: "e4",
		description: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2024, 4, 27),
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
		date: new Date(2024, 4, 29),
	},
	{
		id: "e8",
		description: "Car Insurance",
		amount: 294.67,
		date: new Date(2024, 4, 26),
	},
	{
		id: "e9",
		description: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2024, 4, 27),
	},
	{
		id: "e10",
		description: "book",
		amount: 15,
		date: new Date(2024, 3, 22),
	},
];

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {},
});

function expensesReduces(state, action) {
	switch (action.type) {
		case "ADD":
			const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload, id: id }, ...state];
		case "DELETE":
			return state.filter((expense) => expense.id !== action.payload);
		case "UPDATE":
			const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
			const updatableExpense = state[updatableExpenseIndex];
			const updatedItem = { ...updatableExpense, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updatableExpenseIndex] = updatedItem;
			return updatedExpenses;
		default:
			return state;
	}
}

function ExpensesContextProvider({ children }) {
	const [expensesState, dispatch] = useReducer(expensesReduces, dummyExpenses);

	function addExpense(expenseData) {
		dispatch({ type: "ADD", payload: expenseData });
	}

	function deleteExpense(id) {
		dispatch({ type: "DELETE", payload: id });
	}

	function updateExpense(id, expenseData) {
		dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
	}

	const value = {
		expenses: expensesState,
		addExpense: addExpense,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense,
	};

	return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
