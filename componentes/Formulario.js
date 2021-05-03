import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import{Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = () => {

    const [ moneda, guardarMoneda ] = useState('');
    const [ criptomoneda, guardarCriptomoneda ] = useState('');
    const [ criptomonedas, guardarCriptomonedas ] = useState('');

    useEffect(() => {
        const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        guardarCriptomonedas(resultado.data.Data);
        }     
        consultarAPI();
    }, []);


    const obtenerMoneda = moneda => {
        guardarMoneda(moneda)
    }

    return ( 
        
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={ moneda => obtenerMoneda(moneda)}
            >
                <Picker.Item label="-Seleccione-" value="" />
                <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
                <Picker.Item label="Peso Colombiano" value="COP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>

            <Picker
                selectedValue={moneda}
                onValueChange={ moneda => obtenerMoneda(moneda) }
            >
                <Picker.Item label="-Seleccione-" value="" />
                {criptomonedas.map ( cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>

                ) ) }
               
            </Picker>
 
        </View>
     );
}
 

const styles = StyleSheet.create({
    label: {
        fontFamily:'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20,
    }

});
export default Formulario;