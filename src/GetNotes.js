import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native"
import axios from "axios"
import DetailNotes from "./DetailNotes"

class GetNotes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataNotes: [],
      isLoading: false,
      pageYangHarusDirender: "", // Bad
      notesId: 0,
      notesTitle: "",
      notesDescription: ""
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

  goAndBackToDetailPage = (page, idNotes, titleNotes, descriptionNotes) =>
    this.setState({
      pageYangHarusDirender: page,
      notesId: idNotes,
      notesDescription: descriptionNotes,
      notesTitle: titleNotes
    })

  render() {
    const { notesId, notesTitle, notesDescription } = this.state
    if (this.state.pageYangHarusDirender === "detail") {
      return (
        <DetailNotes
          idNotes={notesId}
          descriptionNotes={notesDescription}
          titleNotes={notesTitle}
          goAndBackToDetailPage={this.goAndBackToDetailPage}
        />
      )
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
              <TouchableOpacity
                onPress={() =>
                  this.goAndBackToDetailPage(
                    "detail",
                    item.id,
                    item.title,
                    item.description
                  )
                }
              >
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
