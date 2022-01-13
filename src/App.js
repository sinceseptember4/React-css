import "./styles.css";
import { InlineStyle } from "./InlineStyle";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./StyledComponents.jsx";
import { Emotion } from "./Emotion";
export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
