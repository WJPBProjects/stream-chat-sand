import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "stream-chat-react/dist/css/v2/index.css";
// this file adjusts the responsive layout - use it as an example.
import "./layout.scss";
// this is where you can start playing with the colors and themes.
import "./stream-chat-theme.css";
// here's an output of our unpublished yet documentation:
// https://gist.github.com/petyosi/1dea462500c8203cd5ad7641210a761f#file-component-variables-mdx
// https://gist.github.com/petyosi/1dea462500c8203cd5ad7641210a761f#file-global-variables-mdx
// Here's the draft of our upcoming blog post:
// https://github.com/GetStream/stream-chat-angular/pull/351/files#diff-c0bffe85bba7aa4bfbf29ccea6674026f7a13138d748274536552024d2109f65R10

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
