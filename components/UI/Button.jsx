import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

const Button = ({ children, onPress, mode, style }) => {
	return (
		<View style={style}>
			<Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
				<View style={[styles.button, mode === "flat" && styles.flat]}>
					<Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>{children}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		padding: 10,
		backgroundColor: GlobalStyles.colors.primary500,
		borderRadius: 5,
	},
	flat: {
		backgroundColor: "transparent",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	flatText: {
		color: GlobalStyles.colors.primary200,
	},
	pressed: {
		opacity: 0.75,
		backgroundColor: GlobalStyles.colors.primary100,
		borderRadius: 5,
	},
});
