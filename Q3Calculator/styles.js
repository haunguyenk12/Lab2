import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'flex-end',
        padding: 16
    },
    screen: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    result: {
        fontSize: 72,
        textAlign: 'right',
        marginBottom: 16,
        color: '#222'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    btn: {
        flex: 1,
        height: 64,
        marginHorizontal: 6,
        borderRadius: 32,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    btnWide: {
        flex: 2.1
    },
    btnAccent: {
        backgroundColor: '#FFA626'
    },
    btnText: {
        fontSize: 22,
        color: '#222',
        fontWeight: '600'
    },
    btnTextAccent: {
        color: '#fff'
    },
});
module.exports = styles;