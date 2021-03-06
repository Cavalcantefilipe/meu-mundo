import styled from 'styled-components';


export const Content = styled.div`
background: #022b3a;
height:100vh;
display: flex;
align-items:center;
align-self:center;
justify-content:center;

@media (max-width: 700px){
  height:100%;
  width:100%;
  flex-direction:column;
}
`;


export const ContentText = styled.div`
width:550px;

h1{
  font-size:70px;
  text-align:center;
  font-weight:bold;
}

h2{
  margin-top:30px;
  font-weight:bold;
}


@media (max-width: 700px){
  width:100%;

  h1{
  font-size:50px;
  text-align:center;
  font-weight:bold;
}

h2{
  margin-top:5%;
}
}
`;


export const ImageContent = styled.img`
margin:5%;
border-radius:40%;
width: 300px;
`;
