import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native'

const AlbumDetail = (props) => {
   return(
   <View>
        <Image style={{width:100, height:100}} source={{url: props.albumDetails.thumbnail_image}} />
        <Text>{props.albumDetails.title}</Text>
        <Text>By {props.albumDetails.artist}</Text>
        <Button title='Buy Now' color='blue' accessibilityLabel='Click here to buy the album'/>
    </View>
   );

}

export default AlbumDetail;