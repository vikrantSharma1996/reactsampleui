import "./App.css";
import React from "react";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

class App extends React.Component {
  constructor() {
    super();
    this.state = { selectedOption: "standard", value: "0" };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOptionChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert(
      "Your selected size is: " +
        this.state.value +
        "Selected delivery speed is: " +
        this.state.selectedOption
    );
    event.preventDefault();
  }

  render() {
    return (
      
        <form onSubmit={this.handleSubmit} style={{width:'18%'}}>
          <div style={{textAlign:"center"}}>
            <label>
              <select
                value={this.state.value}
                onChange={this.handleChange}
                style={{
                  paddingLeft:13,
                  borderWidth: 1,
                  borderColor: "rgba(0,0,0,0.2)",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 130,
                  flex: 1,
                  flexDirection: "row",
                  height: 40,
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  marginRight:"auto",
                  marginLeft:'auto'
                  
                }}
              >
                <option value="0" disabled alignItems>
                  Select a size
                </option>
                <option value="42 UK">42 UK</option>
                <option value="43 UK">43 UK</option>
                <option value="44 UK">44 UK</option>
              </select>
            </label>
          </div>
        

          <div style={{ alignItems: "start", justifyContent: "start",marginTop:70 }}>
            <input
              type="radio"
              id="store"
              name="pickup"
              value="store"
              checked={this.state.selectedOption === "store"}
              onChange={this.handleOptionChange}
            />
            <label for="store">
              <b>Pick up in store today:</b>
            </label>
            <br></br>
            <input
              type="radio"
              id="standard"
              name="pickup"
              value="standard"
              checked={this.state.selectedOption === "standard"}
              onChange={this.handleOptionChange}
            />
            <label for="standard">
              <b>Standard:</b> In 2-4 working days
            </label>
            <br></br>
            <input
              type="radio"
              id="express"
              name="pickup"
              value="express"
              checked={this.state.selectedOption === "express"}
              onChange={this.handleOptionChange}
            />
            <label for="express">
              <b>Express:</b> In 24-48 hours
            </label>
            <br></br>
            <div style={{marginTop:10}}>
            <input
              type="submit"
              value="COMPLETE"
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                alignItems: "center",
                justifyContent: "center",
                width: 250,
                fontWeight:'bold',
                color:'white',
                flex: 1,
                flexDirection: "row",
                height: 40,
                borderRadius: 5,
                backgroundColor: "#9BB880"
                ,
              }}
            />
            </div>
           
          </div>
        </form>
      
    );

    var styles = StyleSheet.create({
      curvedcorner: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        flex: 1,
        flexDirection: "row",
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 40,
      },
      curvedcornercolored: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        flex: 1,
        flexDirection: "row",
        height: 40,
        borderRadius: 40,
        backgroundColor: "green",
      },
    });
  }
}

export default App;
