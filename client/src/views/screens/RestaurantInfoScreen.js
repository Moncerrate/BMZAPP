import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import COLORS from '../../consts/colors';


const RestaurantScreen = () => {

    return(
        <View 
        styles= {StyleSheet.container}>
            
                <Text style= {{fontSize: 50, fontWeight: 'bold', textAlign: 'center', color: COLORS.primary}}>
                About Us
                </Text>
                <Text 
                style={{
                marginTop: 10,
                fontSize: 12,
                lineHeight: 25,
                textAlign: 'center',
                color: COLORS.black,
                }}>
                    BANH MI IS A VIETNAMESE SANDWICH ON A TOASTED FRENCH BAGUETTE BOASTING A MEDLEY OF SWEET, SAVORY, TART, SPICY, WARM AND COOL INGREDIENTS EXPLODING TOGETHER IN THE PERFECT BITE!

BANH MI IS NOT A NOUVELLE NEW YORK CREATION, RATHER A VIETNAMESE SANDWICH THAT REFLECTS THE FRENCH INFLUENCE OF FORMER INDOCHINA. THE BANH MI MOST POPULAR IN THE U.S. ARE THE SAIGON STYLE. OUR BEST-SELLER, THE ZON, MEANS “CRISPY AND DELICIOUS.”

EXPLORE THE SIMPLE COMPLEXITY OF THE BANH MI BLENDING THE EARTHY LIVER PATE, CRISP PICKLED DAIKON & CARROTS, SPRIGS OF FRESH CILANTRO. CHOICES OF COCONUT CURRY BEEF FLANK, GRILLED LEMONGRASS CATFISH FILET, BBQ PORK PATTIES, CURED VIETNAMESE HAM, GRILLED LEMONGRASS CHICKEN, TANGY SARDINE AND A SAVORY VEGAN MUSHROOM.

STOP BY ZON FOR A FRESHLY MADE BANH MI AND SAVOR THE TASTES OF SAIGON IN THE HEART OF THE EAST VILLAGE.

                    
                </Text>

                
            </View>

        
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white,
    },
    imageContainer:{
        alignItems: 'center',
        marginTop: -120,
        
    },
    image:{
        width:10,
        height: 10,
        resizeMode: 'contain',
        top: -100,
    },
});
export default RestaurantScreen;