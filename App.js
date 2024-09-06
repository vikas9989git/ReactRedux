import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { apiThunk } from "./store/slices/apiSlice";
import { secondapiThunk } from "./store/slices/api2Slice";
function App() {
  let { secondapiData, secondisPending, secondisError, seconderrMsg, secondisSuccess } = useSelector((state) => state.secondapi);
  let dispatch = useDispatch();

  // let getDataFromApi = () => {
  //   let actionObj = apiThunk("https://reqres.in/api/users?page=2");
  //   dispatch(actionObj);
  // };

  let getDataFrom2Api = () => {
    let secondactionObj = secondapiThunk("https://reqres.in/api/users?page=2");
    dispatch(secondactionObj);
  };

  return (
    <div className="App">
      {/* <button onClick={getDataFromApi}>Get Data from API</button> */}
      <button onClick={getDataFrom2Api}>Get Data from 2 API</button>
      {/* {
      isSuccess === false ? (<h1>Loading....</h1>) : (
      <table className="table">
        <tbody className="table-warning">
          {apiData.data.map((dataObj) => (
          <tr key={dataObj.id}>
            <td className="table-info">{dataObj.id}</td>
            <td>{dataObj.email}</td>
            <td>{dataObj.first_name} {dataObj.last_name}</td>
            <td className="table-light">
              <img src={dataObj.avatar} alt="" />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      )} */}

      {
        secondisSuccess === false ? (<h1 className="text-danger">Loading.........</h1>):
        (
          <table className="table ">
            <tbody>
              {
                secondapiData.map(obj=>{
                  return(
                    <tr key={obj.id}>
                      <td>{obj.title}</td>
                      <td>{obj.description}</td>
                      <td>{obj.price}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
      }
    </div>
);
}
export default App;