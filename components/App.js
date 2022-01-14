import React , {useMemo, useState, useEffect} from 'react';
//import ReactDOM from 'react-dom';
//import ReactModal from 'react-modal';
import Axios from 'axios';
import Table from "./Table";


function CallApi(userid){
  console.log(userid)
  
  const [userdetails, setUserDetails] = useState([]);   
   const fetchData= async ()=>{
        const response  = await Axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
                   .then(setUserDetails({userdetails: response.data}))
                    const list= response.data;
                    //console.log(list)
               
    }

  //console.log(userid);
  // useEffect(() => {
  //   (async () => {
  //     const result = await Axios (`https://jsonplaceholder.typicode.com/users/${userid}`);
  //     //console.log(result);
  //     setUserDetails(result.data);
  //     //temp1 = result.data;
  //     //console.log(temp1.email);
  //     
  //   }) ();
  // }, []);

  // React.useEffect(() => {
  //   Axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`).then((response) =>
  //    { setUserDetails(response.data);});
  // }, []);

  // if (!userdetails) return null;

  return (
    <div>
      <h1>userdetails.name</h1>
    </div>
    )

  
  
    // return(
    //   <div className="App1">
    //   <ul>
    //     state.userdetails.map(userdetail => <li>{userdetails.name}</li>)
    //   </ul>
    //   </div>
    //   ) 
  
}


function App() {
  //ReactModal.setAppElement('#root');
  const [showModal, setShowModal] = useState(false);

  const Columns = useMemo(
  () => [
  {
    Header: 'TodoId',
    accessor: 'id'

  },
  {
    Header: 'Title',
    accessor: 'title',
    disableSortBy: true
  },
  {
    Header: 'Status',
    accessor: d=> d.completed ? 'Completed' : 'Incomplete',
    disableSortBy: true
  },
  {

  Header: 'Action',
  Cell: ({ cell }) =>(
    <div>      
    {/* <button value={cell.row.values.id} onClick= {e => CallApi(e.target.value)}>      */}
    <button value={cell.row.values.userId} onClick= {() => CallApi=(e)=>e.target.value}>     
       View
    </button>    
    </div>
  ),
  }
  ], [] );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await Axios ("https://jsonplaceholder.typicode.com/todos");
      setData(result.data);
    }) ();
  }, []);
  

  return (
    <div className="App">
      <Table columns={Columns} data = {data} />
    </div>

  );
}

export default App;
