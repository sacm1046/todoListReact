import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      li:[], 
    }
    this.myMap = this.myMap.bind(this);
  }

  add(e){
    if(e.keyCode===13){
      this.setState({
       li:this.state.li.concat({label: e.target.value, done: false})
      });
      e.target.value="";
    }
  }

  delete(e, i){
    const {li} = this.state;
    li.splice(i, 1);
    this.setState({
      li
    });
  }

  myMap = function(item, i){
    return( 
      <li key={i} className="list-group-item d-flex justify-content-between">{item.label}   
          <i className="fas fa-trash text-danger" onClick={(e)=>this.delete(e, i)}></i>
      </li>
    )
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12 pt-5">
              <h1 className="text-center display-1">To Do List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
            <div id="table" className="col-md-6 bg-white">
            <input type="text" placeholder="" className="form-control" onKeyDown={(e)=>this.add(e)}></input>
            <ul className="list-group-flush p-0">
              {
                this.state.li.length > 0 &&
                this.state.li.map(this.myMap)
              }
              </ul>
            </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
}
export default App;