import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    titleP: {
        backgroundColor: 'rgba(236,47,47,1)',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 100,
        justifyContent: "center",
        shadowOffset:{
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        textAlignVertical: 'center',
        letterSpacing: 0.1,
    },
    container: {
        position: 'relative',
        width: Dimensions.get('window').width,
        height: 900,
    },
    items: {
        position: 'relative',
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        color: 'rgba(0,0,0,1)',
        letterSpacing: 0.1,
        bottom: 'auto',

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
    imgParking:{
        position: 'absolute',
        width: 450,
        height: 1000,
        opacity: 0.5,
        left: 0,
        right: 'auto',
        top: 0,
        bottom: 'auto'
    },
});
