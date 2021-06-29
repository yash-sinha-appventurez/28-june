import {useDispatch,useSelector} from'react-redux'
import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import {fetchPostAction} from '../actions/fetchBlog'
const Dashboard = ({ history }) => {
  const dispatch=useDispatch()

const fetchBlog=useSelector((state)=>state.fetchBlog)
const{blog}=fetchBlog
  
  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;


  useEffect(() => {
    if (!userInfoFromStorage) {
      history.push("/");
    } else {
      dispatch(fetchPostAction())
     

    }
  },[]);


  return (
    <Fragment>
      <div className="dashboard-container">
        <h4>hello {userInfoFromStorage.name} </h4>
        <img src={userInfoFromStorage.image} alt="Avatar" />
        <h4>emailid: {userInfoFromStorage.email} </h4>
      </div>
      <div className="fetch-blog">
        <h1>Api data for post</h1>
        <Table className="blog-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Userid</th>
              <th>body</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {blog? blog.map((post) => (
              <tr key={post.id}>
                <td>
                  <Link to={`detail/${post.id}`}>{post.id}</Link>
                </td>
                <td>{post.userId}</td>
                <td>{post.body}</td>
                <td>{post.title}</td>
              </tr>
            )):<h1>no data to show</h1>}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default Dashboard;
