import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Button } from 'react-native';
import { style } from './style';

const Parking = () => {
  const [api, setapi] = useState([])
  const [visible,setVisible] = useState(false)
  const[plaque, setPlaque] = useState([])

  useEffect(() => {
    fetchData();
    // console.log("merci");
  }, []);

const fetchData = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    fetch("https://jsonplaceholder.typicode.com/users",requestOptions)
    .then(response => {
      // console.log(response)
      return response.json()
    })
    .then(data => {
      // console.log(data)
      setapi(data)
    })
    .catch(error => console.log(error))
  }


  return (
    <View>
      {api.length > 0 && (
          api.map(props => (
            <TouchableOpacity key={props.id} onPress={() => {setPlaque(props), setVisible(true)}}>
              <Text style={style.items}>{props.name}</Text>
            </TouchableOpacity>
          ) 
          )
      )}
      <Modal visible={visible} animationType='fade' transparent={true}>
        <View style={style.modalView}>
            <Text key={plaque.id} style={style.modalText}>
              Nom : {plaque.name}{"\n"}
              UserName : {plaque.username}{"\n"}
              E-mail : {plaque.email}
            </Text> 
            <Button onPress={() => {setVisible(false)}} title="Return" style={style.closeButton}>
              Return
            </Button>
        </View>
      </Modal> 
    </View>
  );
}

export default Parking;