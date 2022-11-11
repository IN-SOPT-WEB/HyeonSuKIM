import React from 'react'
import { useEffect, useState } from "react";
import {useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Content() {

    const { userName } = useParams();
    const navigate = useNavigate();
    const [githubProfile, setgithubProfile] = useState({});
    

    const getGithubProfile = async () => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${userName}`);
            setgithubProfile(data); 
            console.log(data);
        } catch (error) {
            console.log(error); 
        }
    };

    useEffect(() => {
        getGithubProfile();
      }, [userName])

      if (!getGithubProfile) return <div>Loading...</div>;

  return (
    <div>
        <img src={githubProfile.avatar_url} alt="유저 사진" />
        <div>{githubProfile.login}</div>
        <div>{githubProfile.name}</div>
        <button onClick={() => window.open(githubProfile.html_url)}>Visit{githubProfile.name}</button>
        <div>Followers<div>{githubProfile.followers}</div></div>
        <div>Following<div>{githubProfile.following}</div></div>
        <div>Repos<div>{githubProfile.public_repos}</div></div>


    </div>
  )
}

