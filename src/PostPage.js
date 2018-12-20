import React, { Component } from "react"
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity
} from "react-native"
import axios from "axios"

class PostPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      isLoading: false,
      statusMessage: ""
    }
  }

  postNote = () => {
    const url = "http://api.codefazz.com/api/Notes"
    const { title, description, isLoading } = this.state
    this.setState({ isLoading: true })

    if (title === "") {
      Alert.alert("Warning!", "Title can not be empty!")
      return
    }

    const dataPayload = {
      title: title,
      content: description
    }

    axios
      .post(url, dataPayload)
      .then(response => {
        console.log(response)
        this.setState({ isLoading: false, statusMessage: 'POST Request success!' })
      })
      .catch(error => {
        console.log(error)
        this.setState({ isLoading: false, statusMessage: 'POST Request failed!' })
      })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {this.state.isLoading && <ActivityIndicator size="large" />}
        <Text> {this.state.statusMessage} </Text>
        <TextInput
          placeholder="Title"
          onChangeText={txt => this.setState({ title: txt })}
          style={{ width: "90%", backgroundColor: "yellow" }}
        />
        <TextInput
          placeholder="Description"
          onChangeText={txt => this.setState({ description: txt })}
          style={{ width: "90%", backgroundColor: "yellow", marginTop: 5 }}
        />
        <Text>Post Page</Text>
        <TouchableOpacity onPress={() => this.postNote()}>
          <Text style={{ margin: 10, backgroundColor: "green" }}>
            Post my Note!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.backToMainPage("main")}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Back to Main Page
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PostPage
