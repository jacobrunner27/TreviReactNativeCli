import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function AccountButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.AccountButton}
      onPress={() => navigation.navigate(screenName)}
    >
        <Image source={require('../../../assets/profile/1.jpg')} style={{ width: totalSize(4), height: totalSize(4), borderRadius: 50, borderWidth: 2, borderColor: Colors.white }} />
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.AccountButton}>
      <AccountButton screenName="MyWishlist" />
    </View>
  );
}


const Stack = createStackNavigator();

const styles = StyleSheet.create({
    profileIcon: {
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 60,
        left: 15
    },
})

export default AccountButton;
