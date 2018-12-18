import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"

class PostPage extends Component {
  render() {
    return (
        <View>
          <Text>Post Page</Text>
          <TouchableOpacity onPress={() => this.props.backToMainPage("main")}>
            <Text style={{ margin: 10, backgroundColor: 'red' }}>Back to Main Page</Text>
          </TouchableOpacity>
        </View>
      )
  }
}

export default PostPage
