import React, { Component } from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"

class App extends Component {
  constructor(props) {
    super(props)

  }

  openGetPage = () => {
    
  }

  render() {
    return (
      <View>
        <Text>Networking App</Text>

        <TouchableOpacity>
          <Text style={Styles.txtButton}>Open Get Page</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Styles.txtButton}>Open Post Page</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Styles.txtButton}>Open Put Page</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={Styles.txtButton}>Open Delete Page</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  txtButton: { margin: 10, backgroundColor: "yellow" }
})

export default App
