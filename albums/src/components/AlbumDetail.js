import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ albumDetails }) => {
    const { title, artist, thumbnail_image, image, url } = albumDetails;
    const { albumTextStyles, textStyles, textContainer, thumbnailContainer, imageStyle, imageViewStyle } = styles;

   return (
   <Card>
       <CardSection>
           <View>
                <Image 
                style={thumbnailContainer}
                source={{ url: thumbnail_image }} 
                />
            </View>
            <View style={textContainer}>
                <Text style={albumTextStyles}>{title}</Text>
                <Text style={textStyles}>{artist}</Text>
            </View>
        </CardSection>
        <CardSection style={imageViewStyle}>
            <Image 
            style={imageStyle}
            source={{ url: image }} 
            />
        </CardSection>
        <CardSection>
            <Button title='Buy Now' color='blue' accessibilityLabel='Click here to buy the album' />
        </CardSection>
    </Card>
   );
};

const styles = {
    albumTextStyles: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textStyles: {
        fontSize: 12,
    },
    textContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    thumbnailContainer: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1
    },
    imageViewStyle: {
        
    }
};

export default AlbumDetail;
