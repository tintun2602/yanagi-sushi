import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MenuState } from "../menuState";

const MenuDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [items, setItems] = useState(MenuState);
  const [item, setItem] = useState(null);

  //
  useEffect(() => {
    const currentMenu = items.filter((stateMenu) => stateMenu.url === url);
    setItem(currentMenu[0]);
  }, [items, url]);

  return (
    <>
      {item && (
        <Details>
          <HeadLine>
            <h2>{item.title}</h2>
            <img src={item.mainImg} alt="sushi"></img>
          </HeadLine>
          <Awards>
            {item.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                price={award.price}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={item.secondaryImg} alt="sushi" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: black;
  min-height: 80vh;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  position: relative;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate() (-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award component

const Award = ({ title, description, price }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description} </p>
      <p>{price} </p>
    </AwardStyle>
  );
};

export default MenuDetail;
