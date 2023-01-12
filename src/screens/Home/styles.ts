//copiado do app.tsx

//importar o StyleSheet
import { StyleSheet } from 'react-native';

//exportando o styles com as regras de estilização, para que sejam importadas no index.tsx
export const styles = StyleSheet.create({
    container: {
      flex: 1, //tela toda na cor do backgroundColor
      backgroundColor: '#131016',
      padding: 48
    },
    eventName: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
      maginTop: 48
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5, //deixando os cantos levemente arredondados
        color: '#FFF',
        padding: 16, 
        FontSize: 16,
        marginRight: 12
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24       
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,      
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    }    
  });
  