import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

class LumpSum extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>LumpSum</Text>
                <Text style={styles.instructions}>Choose the currency, modify rate and key in amount.</Text>

                <View style={styles.row}>
                    <TextInput style={styles.formControl} keyboardType="decimal-pad"/>
                    <View style={styles.formControl}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    instructions: {
        textAlign: 'left',
        color: '#333333',
        marginTop: 1,
    },
    row: {
        flexDirection: 'row'
    },
    inputAmount: {
        flex: 0.8
    },
    inputCurrency: {
        flex: 0.2
    },
    formControl: {
        height: 40,
        flex: 0.5,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 1
    },
});

AppRegistry.registerComponent('LumpSum', () => LumpSum);
