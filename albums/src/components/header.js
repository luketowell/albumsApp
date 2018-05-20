//Imprt a library to create a component
import React from 'react';
import { Text, View } from 'react-native';


//Create a component
const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Album!</Text>;
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 40,
        color: 'white'  
    },
    viewStyle: {
        marginTop: 20,
        height: 80,
        backgroundColor: '#28303C',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,        
    }
};

//Render it to the device
export default Header;
