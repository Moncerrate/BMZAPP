import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from "../../consts/foods";
import { PrimaryButton } from "../components/Button";



const CartScreen = ({navigation}) => {
    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
          return total + parseFloat(item.totalPrice || 0);
        }, 0).toFixed(2);
      };

    const[cartItems, setCartItems] = useState(foods);
    const[totalPrice, setTotalPrice] = useState(calculateTotalPrice(cartItems));

        const handleQuantityChange = (itemId, change) => {
            const updatedCart = cartItems.map((item) => {
                if(item.id == itemId) {
                    const newQuantity = Math.max((item.quantity || 0 ) + change, 0);
                    const newTotalPrice = (parseFloat(item.price) * newQuantity).toFixed(2);
                    return {...item, quantity: newQuantity, totalPrice: newTotalPrice};
                }
                return item;
            });

            
            setCartItems(updatedCart);
            setTotalPrice(calculateTotalPrice(updatedCart));

        };

        
    const CartCard= ({item}) => {
        return( <View style={style.cartCard}>
            <Image source={item.image} style={{height: 80, width: 80}}/>
            <View style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex:1,
         }}>
            <Text style={{fontWeight:'bold', fontSize:16 }}>{item.name}</Text>
            <Text style={{fontSize:13, color:COLORS.grey}}>
                {item.ingredients}
                </Text>
                <Text style={{fontSize: 17, fontWeight:'bold'}}>${item.price}</Text>

        </View>
        <View style = {{marginRight: 20, alignItems: 'center'}}>
            <Text style = {{fontWeight: 'bold', fontSize: 18}}>{item.quantity ||0}</Text>
            <View style={style.actionBtn} >
                <Icon 
                name="remove" 
                size = {25} 
                color={COLORS.white}
                onPress={() => handleQuantityChange(item.id, -1)}/>
                <Icon name="add"
                 size = {25} 
                 color={COLORS.white}
                 onPress= {() => handleQuantityChange(item.id, 1)}/>
            </View>
        </View>
        </View>
        );

    };
    return(
        <SafeAreaView
        style= {{backgroundColor: COLORS.white, flex: 1}}>
            <View style= {style.header}>
                <Icon name ="arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style = {{fontSize: 20, fontWeight: 'bold'}}>cart</Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:80}}
            data={cartItems}
            renderItem={({item}) => <CartCard item = {item} onQuantityChange={handleQuantityChange}/>}
            ListFooterComponentStyle={{paddingHorizontal:20, marginTop: 20}}
            ListFooterComponent={() =>(
            <View>
                <View
                style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    marginVertical: 15,
                }}>
                <Text style= {{fontSize: 18, fontWeight: 'bold'}}>
                    Total Price
                </Text>
                <Text style= {{fontSize: 18, fontWeight:'bold'}}>${totalPrice}</Text>

                </View>
                <View style={{marginHorizontal: 30}}>
                    <PrimaryButton title="CHECKOUT" />
                </View>
            </View>

            )}

            />


        </SafeAreaView>
    );
};

   

const style = StyleSheet.create({
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,

    },
    cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    },
    actionBtn:{
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',

    },
});
export default CartScreen;