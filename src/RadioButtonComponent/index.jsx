import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { StyleSheet } from 'react-native';


const RadioButtonComponent = ()=>{
    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: '1',
            value: 'option1'
        },
        {
            id: '2',
            label: '2',
            value: 'option2'
        }
    ]), []);
    
    const [selectedId, setSelectedId] = useState();
    return(
        <RadioGroup layout='row' containerStyle={styles.RadioGroup}
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    );


}
export default RadioButtonComponent;

const styles = StyleSheet.create({
    RadioGroup:{
        marginTop:20,
        
    }    
  });
