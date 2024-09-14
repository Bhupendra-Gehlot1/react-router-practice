import React from "react";
import GithubInfoProvider from "./GithubInfoProvider";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="flex justify-center">
      <div>Github followers : {data.followers}</div>
      <img src={data.avatar_url}/>
    </div>
  );
}

export default Github;
