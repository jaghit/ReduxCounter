import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    counterView: {

    },
    counterText: {
        fontSize: 64
    },
    buttonView: {
        flexDirection: 'row'
    },
    buttonText: {
        borderColor: 'gray',
        borderWidth: 1,
        fontFamily: 'monospace',
        fontSize: 32,
        height: 46,
        margin: 8,
        textAlign: 'center',
        width: 46
    }
});

export default styles;
