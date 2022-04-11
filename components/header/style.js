import { StyleSheet } from 'react-native';
import { APP_COLOR } from '../../styles/color';

export const style = StyleSheet.create({
    titleP: {
        backgroundColor: '#888888',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 100,
        justifyContent: "center"
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        textAlignVertical: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: APP_COLOR.backColor,
    },
    items: {
        padding: 10,
        fontSize: 30,
        textAlign: 'center',

    },
    modalView: {
        justifyContent: 'center',  
        alignItems: 'center',   
        backgroundColor : "#888888",   
        height: 300 ,  
        width: '80%',  
        borderRadius:10,  
        borderWidth: 1,  
        borderColor: '#fff',    
        marginTop: 80,  
        marginLeft: 40,
        
    },
    modalText : {
        fontSize: 30
    },
    closeButton: {
        display: 'flex',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3974',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5, 
    },
});
