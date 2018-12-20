import React, { Component } from "react"
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import axios from 'axios'

class DeletePage extends Component {
  deleteNote = () => {
    
  }

  render() {
    return (
        <View>
          <Text>Delete Page</Text>
          <TouchableOpacity onPress={() => this.props.backToMainPage("main")}>
            <Text style={{ margin: 10, backgroundColor: 'red' }}>Back to Main Page</Text>
          </TouchableOpacity>
        </View>
      )
  }
}

export default DeletePage
