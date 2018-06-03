//Imprt a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetail'

//Create a component
const App = () => (
    <View>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
