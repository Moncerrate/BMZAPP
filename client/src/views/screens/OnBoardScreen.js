import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {View} from 'react-native';
import {Image} from 'react-native';
import {PrimaryButton} from '../components/Button';
//import OnBoardScreen from './OnBoardScreen';

const OnBoardScreen = ({navigation}) => {
    return(
        <SafeAreaView
        style={{flex: 1, backgroundColor : COLORS.white}}>
            <View style ={{height: 400}}>
                <Image 
                style={{
                    width: '100%',
                    resizeMode: 'contain',
                    top: -750,
                    
                }}
                source={require('../../assets/banhmi_OnBoardImage.png')}
                />
                </View>
                <View style={style.textContainer}>
                    <View>
                        <Text style= {{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
                            Banh Mi Zon
                        </Text>
                        <Text
                        style={{
                        marginTop: 20, 
                        fontSize: 18,
                        textAlign: 'center',
                        color: COLORS.grey,
                        }}>
                            
                            443 East 6th Street
                            New York, NY 10009
                        </Text>
                    </View>
                    <View style={style.indicatorContainer}>

                      <View style={style.currentIndicator} />
                      <View style={style.indicator} />
                      <View style={style.indicator} />
                        
                        
                        </View>  
                        <PrimaryButton onPress={()=> navigation.navigate('Home')} 
                        title="Get Started"/>
                  
                </View>
                
            

        </SafeAreaView>


    );
    


};

const style = StyleSheet.create({
    textContainer:{
    flex:1,
    justifyContent: 'space-between',
    paddingBottom: 40,
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center',
    },
    currentIndicator:{
        height:12,
        width:30,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,


    },
    indicator:{
        height: 12,
        width: 12,
        borderRadius:6,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
    },
    
});

export default OnBoardScreen;