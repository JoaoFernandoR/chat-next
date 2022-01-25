import { styled } from "@material-ui/core/styles";

export const MainContainer = styled("div")`
    background: rgb(2, 0, 36);
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(161, 11, 219, 1) 70%,
        rgba(100, 52, 124, 1) 96%
    );

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainText = styled("p")`
    color: #fff;
`;

export const CardContainer = styled("div")`
    width: 500px;
    height: 300px;
    background-color: rgba(51, 44, 44, 0.8);
    border-radius: 16px;

    ${({ theme }) => theme.breakpoints.down("sm")} {
        width: 90%;
    }
`;
