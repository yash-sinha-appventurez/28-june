import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Detail = ({ match, history }) => {

const [singleBlog,setsingleBlog] =useState({})

  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const id = match.params.id;
  const fetchSinglepost = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setsingleBlog(data)
    
  };
  useEffect(() => {
    if (!userInfoFromStorage) {
        history.push(`/`)
    } else {
      fetchSinglepost();
    }
  }, [id]);
  return (
    <Fragment>
      <div className="detail-container">
        <h1>hello from detail id is  {id}</h1>
        <h5>Title</h5>
        <p>{singleBlog.title}</p>
        <h5>Body</h5>
        <p>{singleBlog.body}</p>
      </div>
    </Fragment>
  );
};

export default Detail;
