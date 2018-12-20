import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

class DetailNotes extends Component {
  render() {
    return (
      <View>
        <Text>ID: </Text>
        <Text>Title: </Text>
        <Text>Description: </Text>

        <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
          <TouchableOpacity style={{ backgroundColor: "green" }}>
            <Text style={{ margin: 5 }}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: "red" }}>
            <Text style={{ margin: 5 }}>Delete</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ backgroundColor: "blue", marginTop: 5 }}>
          <Text style={{ margin: 5 }}>Back to Main Page</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DetailNotes
