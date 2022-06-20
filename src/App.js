import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    TouchableOpacityBase,
    StyleSheet
} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero() {
        const novo_numero = Math.floor(Math.random() * 10) // floor deixa o numero arredondado

        setNumero( numero + novo_numero)
    }
    function restartNumero() {
        const novo_numero = 0

        setNumero(novo_numero)
    }
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}> {numero}</Text>
            <TouchableOpacity onPress={handleNumero}>
                <Text style={style.botao}>Gerar Numero</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={restartNumero}>
                <Text style={style.botao}>zerar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

};



const style = StyleSheet.create({
    container: {
        backgroundColor: '#8470FF',
        flex: 1,  // um pega a tela inteira
        justifyContent: 'center', // deixou no meio da tela em vertical
        alignItems: 'center', // deixou ao meio da linha
    },
    numero: {
        fontSize: 38,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        color: 'black'
    },
});

export default App;