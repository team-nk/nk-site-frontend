import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");
    * {
        margin:0px;
        padding:0px;
        box-sizing:content-box;
        font-style: normal;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        font-family:"Pretendard";
        scroll-behavior: smooth;
    }    
    html{
        overflow:hidden;
        overflow-y:scroll;
        scroll-snap-type:y mandatory;
        scroll-snap-stop: always;
    }
`;
