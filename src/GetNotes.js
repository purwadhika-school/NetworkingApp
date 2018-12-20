import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native"
import axios from "axios"
import DetailNotes from './DetailNotes'

class GetNotes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataNotes: [],
      isLoading: false,
      pageYangHarusDirender: '' // Bad
    }
  }

  getNotes = () => {
    const url = "http://api.codefazz.com/api/Notes"
    this.setState({ isLoading: true })

    axios
      .get(url)
      .then(resp => {
        console.log(resp)
        this.setState({ dataNotes: resp.data, isLoading: false })
      })
      .catch(err => console.log(err))
  }

  goAndBackToDetailPage = (page) => this.setState({ pageYangHarusDirender: page })

  render() {
    if (this.state.pageYangHarusDirender === 'detail') {
        return <DetailNotes goAndBackToDetailPage={this.goAndBackToDetailPage} />
    }

    return (
      <View>
        {this.state.isLoading && <ActivityIndicator size="large" />}
        <TouchableOpacity onPress={() => this.getNotes()}>
          <Text>Get Notes Data Button!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.backToMainPage("main")}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Back to Main Page
          </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.dataNotes}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "yellow",
                borderRadius: 3,
                borderColor: "yellow",
                borderWidth: 1,
                margin: 10
              }}
            >
              <TouchableOpacity onPress={ () => this.goAndBackToDetailPage('detail') }>
                <Text style={{ margin: 10 }}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }
}

export default GetNotes
