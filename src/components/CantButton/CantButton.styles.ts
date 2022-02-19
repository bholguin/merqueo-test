import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
  ${tw`flex w-[30%] justify-around`}
`;

export const StyledText = styled.div`
  ${tw`font-bold flex justify-center items-center`}
`;

export const StyledButton = styled.button`
  ${tw`border-radius[50%] w-9 h-9 bg-[rgb(124, 17, 62)] border-0 text-white text-2xl cursor-pointer bg-opacity-90 flex justify-center items-center `}
`;
