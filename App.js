import React, { useState, useEffect} from 'react';
import { StyleSheet, Image,View } from 'react-native';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';




const  App = () => {


  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ consultarAPI, guardarConsultarAPI] = useState(false);

  useEffect(()=>{
    if(consultarAPI){

    }
  }, [consultarAPI]);


  return ( 
  <>
    <Header />

     <Image
     style={styles.imagen}
      source={require('./assets/img/cryptomonedas.png')}
      
     />
     <View style={styles.contenido}> 
      <Formulario
        moneda={moneda}
        criptomoneda={criptomoneda}
        guardarMoneda={guardarMoneda}
        guardarCriptomoneda={guardarCriptomoneda}
        guardarConsultarAPI={guardarConsultarAPI}
      
      
      />
     </View>
  </>
   
   );
};
 

const styles = StyleSheet.create({
  
  imagen:{
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },

  contenido:{
    marginHorizontal: '2.5%'
  }
 
  });


export default App;
