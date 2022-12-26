import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { stringify } from "querystring";

export default function Content() {
  const { userName } = useParams();
  const navigate = useNavigate();
  const [githubProfile, setgithubProfile] = useState({login: '', name: '', avatar_url: '', html_url: '', followers: '', following: '', public_repos: ''});

  const getGithubProfile = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setgithubProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGithubProfile();
  }, [userName]);

  if (!getGithubProfile) return <div>Loading...</div>;

  return (
    <div>
      <BtnDiv>
        <CloseBtn
          onClick={() => {
            navigate("/search");
          }}
        >
          X
        </CloseBtn>
      </BtnDiv>
      <img src={githubProfile.avatar_url} alt="유저 사진" />
      <h2>{githubProfile.login}</h2>
      <h2>{githubProfile.name}</h2>
      <VistBtn onClick={() => window.open(githubProfile.html_url)}>
        Visit {githubProfile.name}
      </VistBtn>
      <Infos>
        <Info>
          <h4>
            Followers<Num>{githubProfile.followers}</Num>
          </h4>
        </Info>
        <Info>
          <h4>
            Following<Num>{githubProfile.following}</Num>
          </h4>
        </Info>
        <Info>
          <h4>
            Repos<Num>{githubProfile.public_repos}</Num>
          </h4>
        </Info>
      </Infos>
    </div>
  );
}

const BtnDiv = styled.div`
  text-align: right;
`;
const CloseBtn = styled.button`
  background-color: #d7edff;
  border: none;
  font-size: 20px;
  margin-right: 5px;
  margin-top: 6px;
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Info = styled.div`
  width: 100px;
`;
const Num = styled.div`
  font-size: 30px;
`;
const VistBtn = styled.button`
  width: 200px;
  height: 30px;
  font-size: larger;
  border-radius: 30px;
  background-color: #c8e6ff;
`;
