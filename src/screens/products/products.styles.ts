import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
  ${tw`w-full grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1`}
`;

export const StyledProduct = styled.div`
  ${tw`flex flex-col items-center justify-center bg-white  box-shadow[rgba(0, 0, 0, 0.24) 0px 3px 8px;] m-3 border-radius[10px] p-3`}
`;

export const StyledImgProduct = styled.img`
  ${tw`max-h-64 p-3`}
`;

export const StyledNameProduct = styled.div`
  ${tw`p-2 font-bold font-size[20px]`}
`;

export const StyledPriceProduct = styled.div`
  ${tw`p-2 font-size[18px]`}
`;

export const StyledButtonProduct = styled.button`
  ${tw`py-3 width[60%] border-radius[10px] bg-[rgb(124, 17, 62)] border-0 text-white text-2xl cursor-pointer`}
`;
