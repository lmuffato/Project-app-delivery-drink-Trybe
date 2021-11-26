import { createGlobalStyle, keyframes } from 'styled-components';

const gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(-45deg,
    hsl(120, 100%, 97%), hsl(0, 0%, 100%), hsl(120, 100%, 97%));
  background-size: 400% 400%;
  height: 100vh;
  animation: ${gradient} 15s ease infinite;
}

.gradientAnimated {
background: linear-gradient(-45deg,
  hsl(120, 34%, 88%), hsl(0,0%, 81%), hsl(0, 0%, 20%));
background-size: 400% 400%;
height: 100vh;
animation: ${gradient} 15s ease infinite;
}
`;

export default GlobalStyle;
