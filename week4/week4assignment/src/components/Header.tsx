import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

type ModalProps = {
  setuserNameArrayVisibility: (boolean: boolean) => void;
  userNameArray: string[];
  deleteUserNameArray: (userName: string) => void;
  navigate: (string: string) => void;
};

function Modal({
  setuserNameArrayVisibility,
  userNameArray,
  deleteUserNameArray,
  navigate,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  const clickOutside = (e: MouseEvent) => {
    const { target } = e;
    if (
      target instanceof Node &&
      modalRef.current &&
      !modalRef.current.contains(target)
    ) {
      setuserNameArrayVisibility(false);
    } else {
      setuserNameArrayVisibility(true);
    }
  };

  return (
    <>
      <div ref={modalRef}>
        {userNameArray.map((userName, index) => (
          <SearchModal key={index}>
            <ModalText
              onClick={() => {
                navigate(`/search/${userName}`);
                setuserNameArrayVisibility(false);
              }}
            >
              {userName}
            </ModalText>
            <ModalBtn
              onClick={() => {
                setuserNameArrayVisibility(true);
                deleteUserNameArray(userName);
              }}
            >
              X
            </ModalBtn>
          </SearchModal>
        ))}
      </div>
    </>
  );
}

export default function Header() {
  const [userNameArray, setUserNameArray] = useState<string[]>([]);
  const [userName, setUserName] = useState("");
  const [userNameArrayVisibility, setuserNameArrayVisibility] = useState(false);

  const navigate = useNavigate();

  const clicked = () => {
    setuserNameArrayVisibility(true);
  };

  const entered = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${e.currentTarget.value}`);
      setUserName(e.currentTarget.value);
      setUserNameArray([...userNameArray, e.currentTarget.value]);
      setuserNameArrayVisibility(false);
    }
  };

  const deleteUserNameArray = (userName: string) => {
    const deletedUserNameArray = userNameArray.filter((item) => item !== userName);
    setUserNameArray(deletedUserNameArray);
  };

  return (
    <BackGround>
      <Wrapper>
        <Head>
          <Title>Github Profile Finder</Title>
          <Input
            placeholder="Github Username..."
            onKeyPress={entered}
            onClick={clicked}
          />
        </Head>

        <Body>
          <SearchHistory>
            {userNameArrayVisibility && (
              <Modal
                setuserNameArrayVisibility={setuserNameArrayVisibility}
                userNameArray={userNameArray}
                deleteUserNameArray={deleteUserNameArray}
                navigate={navigate}
              />
            )}
          </SearchHistory>
          <Padding />
          <Blank />
          <Outlet />
        </Body>
      </Wrapper>
    </BackGround>
  );
}

const Wrapper = styled.div`
  text-align: center;
  width: 600px;
`;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  height: 100vh;
`;
const Title = styled.h1`
  margin-top: 30px;
  padding-top: 20px;
  margin-bottom: 10px;
  color: white;
  background-color: #6ea2cf;
`;
const Input = styled.input`
  background-color: #1a3349;
  color: #f2f7ff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

const Head = styled.div`
  background-color: #6ea2cf;
`;
const Body = styled.div`
  background-color: #6ea2cf;
`;
const SearchHistory = styled.div`
  background-color: #6ea2cf;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;
const SearchModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 212px;
  border: 1px solid;
`;

const Blank = styled.div`
  background-color: white;
  height: 20px;
`;
const Padding = styled.div`
  background-color: #6ea2cf;
  height: 15px;
`;
const ModalBtn = styled.button`
  border: none;
  background-color: #1a3349;
  color: aliceblue;
  padding: 0 10px;
  height: 28px;
  margin-right: 5px;
`;
const ModalText = styled.p`
  margin-left: 10px;
`;
