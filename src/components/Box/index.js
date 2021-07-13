import styled from 'styled-components';

const Box = styled.div`
  background-image: radial-gradient( circle 592px at 48.2% 50%,  rgba(255,255,249,.7) 0%, rgba(160,199,254,1) 74.6% );
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 10px;
  overflow-y: auto;
  box-shadow: 3px 3px 6px 1px #121212;

  /* CSS Pré-Pronto */ 
  .boxLink {
    font-size: 14px;
    color: #121212;
    text-decoration: none;
    font-weight: 700;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #121212;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #121212;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }          
  .btn-grad {
    background-image: linear-gradient(to right, #457fca 0%, #5691c8  51%, #457fca  100%);
    margin: 10px 0 10px 0;
    padding: 15px 25px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #fff;          
    box-shadow: 0 0 20px #eee;
    border-radius: 50px;
    display: block;
  }
  .btn-grad:hover {
    background-position: right center;
    color: #ffffff;
    text-decoration: none;
  }             
`; 

export default Box