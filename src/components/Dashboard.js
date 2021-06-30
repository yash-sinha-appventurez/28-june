import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { fetchPostAction } from "../actions/fetchBlog";
import {getLocalstorage} from '../utils/isAuth'

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();

  const fetchBlog = useSelector((state) => state.fetchBlog);
  const { blog } = fetchBlog;

 
  useEffect(() => {
      if(getLocalstorage()){
        dispatch(fetchPostAction())
      }
      else{
        console.log('problem in fetching')
      }
  }, []);

  return (

    <Fragment>
      <div className="container-3">
        <div className='dashboard-box-1'>
        <h4>hello {getLocalstorage().name} </h4>
        <img id="dashboard-img" src={getLocalstorage().image} alt="Avatar" />
        <h4>emailid: {getLocalstorage().email} </h4>

        </div>
        

        <div className="dashboard-box-2">
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
              {blog ? (
                blog.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <Link to={`detail/${post.id}`}>{post.id}</Link>
                    </td>
                    <td>{post.userId}</td>
                    <td>{post.body}</td>
                    <td>{post.title}</td>
                  </tr>
                ))
              ) : (
                <h1>no data to show</h1>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
