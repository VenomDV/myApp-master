import { Dimensions, StyleSheet } from 'react-native'; 
/* A React Native API that allows you to get the dimensions of the screen. */

export const style = StyleSheet.create({
    /* A style for the title of the app. */
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
        shadowOpacity: 1,
        shadowRadius: 4,
        opacity: 1,
    },
    /* This is a style for the text that is displayed on the screen. */
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        textAlignVertical: 'center',
        letterSpacing: 0.1,
        opacity: 1,
    },
    /* Setting the width and height of the container. */
    container: {
        position: 'relative',
        width: Dimensions.get('window').width,
        height: 900,
    },
    /* A style for the text that is displayed on the screen. */
    items: {
        position: 'relative',
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        color: 'rgba(0,0,0,1)',
        letterSpacing: 0.1,
        bottom: 'auto',
        fontWeight: 'bold'
    },
    /* This is a style for the modal view. */
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
    /* A style for the text that is displayed in the modal view. */
    modalText : {
        fontSize: 30
    },
    /* This is a style for the close button. */
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
    /* This is a style for the image that is displayed on the screen. */
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
