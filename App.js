import React, { Component } from 'react'; 
import { Text, Button, ScrollView, View, StyleSheet } from 'react-native'; 
import axios from 'axios'; 

export default class HelloWorldApp extends Component {

  state = {
    data: []
  }

  componentDidMount() { 
    axios.get('https://ghibliapi.herokuapp.com/films')
      .then(res => {
        // console.log(res)
        this.setState({ data: res.data })
      })
      .catch(err => {
        console.log(err); 
      })
  }

  styles = StyleSheet.create({
    container: {
      backgroundColor: 'darkgray',
      padding: 5
    },
    appName: {
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
      marginTop: 20,
      fontWeight: 'bold'
    },
    title: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      marginTop: 20, 
      fontWeight: 'bold' 
    },
    text: {
      marginTop: 8, 
      color: 'white', 
      textAlign: 'center'
    }
  })

  getTapped = () => {
    alert('Get tapped!'); 
  }
  
  render() {
      // console.log(this.state)
      if(this.state.data) {
        return (
          <ScrollView style={this.styles.container}> 
            <Text style={this.styles.appName}>Studio Ghibli Movie List</Text>
              {this.state.data.map(film => (
                <View style={this.state.container} key={film.title}>
                  <Text style={this.styles.title}>{"\n"}{film.title}</Text>
                  <Text style={this.styles.text}>Release Date:{"\n"}{film.release_date}</Text>
                  <Text style={this.styles.text}>Rotten Tomatoes Score:{"\n"}{film.rt_score}</Text>
                  <Text style={this.styles.text}>Description:{"\n"}{film.description}</Text>
                </View>
              ))}
            
          </ScrollView>

        )
      }
        
    }
  }
  
