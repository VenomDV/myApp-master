import React, { useEffect, useState } from 'react';
/* A React Hook. It is a function that lets you “hook into” React state. */
/* A React Hook. It is a function that lets you “hook into” React state. */
import { Text, View, TouchableOpacity, Modal, Button } from 'react-native';
import { style } from './style';

const Parking = () => {
  /* A React Hook. It is a function that lets you “hook into” React state. */
  const [api, setApi] = useState([])
  const [visible,setVisible] = useState(false)
  const[plaque, setPlaque] = useState([])

  useEffect(() => {
    fetchData();
  });

const fetchData = () => {
  /* A request to the server. */
  var Requestoptions = {
    method: 'GET',
    redirect: 'follow'
  };

    /* A request to the server. */
    fetch("http://192.168.5.64/ProjetBTS-master/ApiJoin.php",Requestoptions)
    /* A function that is called when the promise is resolved. */
    .then(response => {
      return response.json()
    })
    .then(data => {
      setApi(data)
    })
    /* A function that is called when the promise is rejected. */
    .catch(error => console.log(error))
  }

  /* Returning a view. */
  return (
    <View>
      {/* A ternary operator. It is a conditional operator that evaluates to one of two values based on
      a condition. */}
      {api.length > 0 && (
          api.map(props => (
            <TouchableOpacity key={props.Id_plaque} onPress={() => {setPlaque(props), setVisible(true)}}>
              <Text style={style.items}>{props.Nom}</Text>
            </TouchableOpacity>
          ) 
          )
      )}
      {/* A component that is used to present content above an enclosing view. */}
      <Modal visible={visible} animationType='fade' transparent={true}>
        <View style={style.modalView}>
            {/* A component that is used to render text. */}
            <Text key={plaque.Id_plaque} style={style.modalText}>
              Nom : {plaque.Nom}{"\n"}
              Plaque : {plaque.Plaque}{"\n"}
              Change_tmp : {plaque.Change_tmp}
            </Text> 
            {/* A component that is used to render a button. */}
            <Button onPress={() => {setVisible(false)}} title="Return" style={style.closeButton} />
        </View>
      </Modal> 
    </View>
  );
}

/* Exporting the component. */
export default Parking;



/* A promise is an object that may produce a single value
    some time in the future: either a resolved value, or a
    reason that it’s not resolved (e.g., a network error
    occurred). A promise may be in one of 3 possible states:
    fulfilled, rejected, or pending. Promise users can attach
    callbacks to handle the fulfilled value or the reason for
    rejection. */