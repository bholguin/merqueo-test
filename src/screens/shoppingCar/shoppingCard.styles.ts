import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
  ${tw`w-full flex-col-reverse xl:flex-row  flex  pt-20 pb-10`}
`;

export const StyledContentProd = styled.div`
  ${tw`w-full  xl:w-9/12 grid xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 grid-cols-1`}
`;

export const StyledContentDetail = styled.div`
  ${tw`w-full xl:w-3/12`}
`;

export const StyledImgProduct = styled.img`
  ${tw`max-h-64 p-3`}
`;

export const StyledNameProduct = styled.div`
  ${tw`p-2 font-bold font-size[20px]`}
`;

export const StyledTotal = styled.div`
  ${tw` font-bold py-2`}
`;

export const StyledPriceProduct = styled.div`
  ${tw`p-2 font-size[18px]`}
`;

export const StyledTitleDetail = styled.h1`
  ${tw`p-2 font-bold`}
`;

export const StyledContentDetailProd = styled.div`
  ${tw`px-4 w-full flex justify-between gap-2`}
`;

export const StyledTotalPrice = styled.h2`
  ${tw`p-2 font-bold justify-end flex w-full`}
`;

export const StyledLink = styled.div`
  ${tw` text-[rgb(124, 17, 62)] cursor-pointer text-decoration-line[underline] py-2`}
`;
