import React ,{Component} from 'react'
import CardList from '../components/CardList';
// import {robots} from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import {setSearchField,requestRobot} from '../action'
import {connect} from 'react-redux'
class App extends Component {
  componentDidMount(){
    this.props.onRequestRobots()
  }
  
  render(){
    const{ searchField,searchRobot,isPending,robots}=this.props
    const filteredRobots=robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
  return (
    <div className='tc'>
      <h2 className='fw6 f2 white-70'>Robofriends</h2>
      <SearchBox search={searchRobot}/>
      <Scroll>
        { isPending?<h1>Loading...</h1>:
        <ErrorBoundry>
          <CardList robots={filteredRobots}/>
        </ErrorBoundry>
        }
      </Scroll>
      
    </div>
  );
  }
}

const mapStateToProps=(state)=>{
  
  return{
    searchField:state.serchRobotreducer.searchField,
    robots: state.requestRobotreducer.robots,
    isPending: state.requestRobotreducer.isPending
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    searchRobot:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestRobot())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
