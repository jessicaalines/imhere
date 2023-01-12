//importando pra cá o que estava aqui e foi para o arquivo Home
import { StatusBar } from 'react-native';
import { Home, } from './src/screens/Home'

export default function App() {
  //renderizando a Home
  return(
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"  
        translucent   //faz com que a statusbar se sobreponha a interface      
      />
      <Home />
    </>
  )
}


