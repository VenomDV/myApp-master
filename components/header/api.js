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
  });

const fetchData = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    fetch("http://192.168.5.64/ProjetBTS-master/api.php",requestOptions)
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
            <TouchableOpacity key={props.Id_plaque} onPress={() => {setPlaque(props), setVisible(true)}}>
              <Text style={style.items}>{props.Nom}</Text>
            </TouchableOpacity>
          ) 
          )
      )}
      <Modal visible={visible} animationType='fade' transparent={true}>
        <View style={style.modalView}>
            <Text key={plaque.Id_plaque} style={style.modalText}>
              Nom : {plaque.Nom}{"\n"}
              Plaque : {plaque.Plaque}{"\n"}
              Register_tmp : {plaque.Register_tmp}
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