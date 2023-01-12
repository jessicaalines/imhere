import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';


//definindo que a propriedade name representa uma string
type Props = {
    name: string;
    onRemove: () => void;  //é um retorno vazio

}


export function Participant({ name, onRemove }: Props) {    //acessando as propriedades "props", que se torna dinâmica através do props.name, acessando o nome passado pelo usuário
    //aquilo que será renderizado na tela
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                { name }                  
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}> 
            <Text style={styles.buttonText}>
                -
            </Text>
        </TouchableOpacity>

        </View>

    )
}