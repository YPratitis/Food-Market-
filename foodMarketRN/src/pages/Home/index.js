import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, ProfileDummy } from '../../assets';
import { FoodCard, Gaps } from '../../components';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
          backgroundColor: '#020202', 
          height: 3, 
          width: '15%', 
          marginLeft: '3%' }}
      style={{ backgroundColor: 'white' }}
      tabStyle={{width: 'auto'}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ 
            fontFamily: 'Poppins-Medium', 
            color: focused ? '#020202' : '#8D92A3' }}>
          {route.title}
        </Text>
      )}
    />
  );

const FirstRoute = () => (
    <View style={{ backgroundColor: '#ff4081', flex: 1 }} />
  );
  
  const SecondRoute = () => (
    <View style={{ backgroundColor: '#673ab7', flex: 1 }} />
  );
  const initialLayout = { width: Dimensions.get('window').width };

const Home = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'New Taste' },
      { key: '2', title: 'Popular' },
      { key: '3', title: 'Recommended' },
    ]);
  
    const renderScene = SceneMap({
      1: FirstRoute,
      2: SecondRoute,
      3: FirstRoute
    });
    return (

        <View style={styles.page}>
            <View style={styles.profileContainer}>
                <View >
                    <Text style={styles.appName}>FoodMarket</Text>
                    <Text style={styles.desc}>Let’s get some foods </Text>
                </View>
                <Image source={ProfileDummy} style={styles.profile}/>
            </View>
            <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.foodContainer}>
                    <Gaps width={24} />
                    <FoodCard image={FoodDummy1} />
                    <FoodCard image={FoodDummy2} />
                    <FoodCard image={FoodDummy3} />
                    <FoodCard image={FoodDummy4} />
                </View>
            </ScrollView>
            </View>
            
            <View style={styles.tabContainer}>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
            </View>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white'
    },
    appName: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    desc: {
        fontSize: 14, 
        fontFamily: 'Poppins-Medium',
        color: '#8D92A3'
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
    foodContainer: {
        flexDirection: 'row',
        marginVertical: 12
    },
    tabContainer: {
        flex: 1
    },
})
