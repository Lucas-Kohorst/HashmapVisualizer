import React, { Component, Children } from "react";
import "./App.css";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { FaBitbucket } from "react-icons/fa";

class HashmapVisual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "insert",
      key: 1,
      value: 1,
      buckets: 16,
      map: [],
      equation: "1 % 16 = 1"
    };
  }

  /**
   * @see https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
   */
  _hashCode(s) {
    var h = ((2 * s) + 5);
    console.log(h)
    return h;
  };

  _typeChange(e) {
    this.setState({ type: e.target.value });
  }

  _keyChange(e) {
    this.setState({
      key: e.target.value,
      equation:
        Math.abs(this._hashCode(e.target.value)) +
        " % " +
        this.state.buckets +
        " = " +
        (Math.abs(this._hashCode(e.target.value)) % this.state.buckets)
    });
  }

  _itemChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  _bucketChange(e) {
    this.setState({
      buckets: e.target.value,
      equation:
        this.state.key +
        " % " +
        e.target.value +
        " = " +
        (Math.abs(this._hashCode(this.state.key)) % e.target.value)
    });
}

  _handleClick() {
    switch (this.state.type) {
      case "insert":
        var oldMap = this.state.map;
        oldMap.push({
          key: this.state.key,
          value: this.state.value
        });
        this.setState({
          map: oldMap
        });
        break;
      case "delete":
        var index = this.state.map
          .map(function(e) {
            return e.key;
          })
          .indexOf(this.state.key);
        this.state.map.splice(index, 1);
        this.setState({
          map: oldMap
        });
        break;
      default:
        break;
    }
  }

  _iterateBuckets(index) {
    var keys = [];
    var map = this.state.map
    var buckets = this.state.buckets
    Object.keys(map).forEach(function(key) {
      var value = map[key].value
      var key = map[key].key

      // Hashing
      var s = key.toString()
      console.log(s)
      // Hashing
      var h = ((2 * s) + 5)
      h = Math.abs(h) % buckets;
      console.log(h)
      console.log(index)

      if ((h) == index) {
        keys.push(JSON.stringify({ key, value }));
      }
    });
    return <p>{keys.join()}</p>;
  }

  createBuckets = buckets => {
    let bucketsList = [];
    for (var i = 0; i < buckets; i++) {
      bucketsList.push(
        <Grid item xs={1} key={i} className={"bucket"}>
          <p>{i}</p>
          <FaBitbucket size={"3em"} />
          {this._iterateBuckets(i)}
        </Grid>
      );
    }
    return bucketsList;
  };

  render() {
    return (
      <div>
        <h1>Hashmap Visualizer</h1>
        <p>
          A HashMap is a data structure that stores keys and values. In a
          bucketed separate chaining system a key value pair is placed into a bucket as denoted by
          object.hashCode() % n where the hashcode is denoted by the equation (2(k) + 5). If there are multiple elements in a bucket the elements are put into a linked list with each new addition being the next node. 
        </p>
        <Grid item xs={12}>
          <FormControl className={"select-box"}>
            <InputLabel htmlFor="age-simple">Type</InputLabel>
            <Select
              value={this.state.type}
              onChange={this._typeChange.bind(this)}
              inputProps={{
                type: this.state.type,
                id: "age-simple"
              }}
            >
              <MenuItem value={"insert"}>Insert</MenuItem>
              {/* <MenuItem value={"update"}>Update</MenuItem> */}
              <MenuItem value={"delete"}>Delete</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              id="standard-name"
              label="Key"
              value={this.state.key}
              onChange={this._keyChange.bind(this)}
              margin="normal"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-name"
              label="Value"
              value={this.state.value}
              onChange={this._itemChange.bind(this)}
              margin="normal"
              underlineStyle={{ "border-color": "#000000" }}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-name"
              label="Buckets"
              value={this.state.buckets}
              onChange={this._bucketChange.bind(this)}
              margin="normal"
            />
          </Grid>
        </Grid>
        <h3>{this.state.equation}</h3>
        <Button variant="contained" onClick={this._handleClick.bind(this)}>
          {this.state.type}
        </Button>
        <Grid container className={"buckets"}>
          {this.createBuckets(this.state.buckets)}
        </Grid>
      </div>
    );
  }
}

export { HashmapVisual };
