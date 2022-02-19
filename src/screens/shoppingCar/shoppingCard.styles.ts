import styled from "styled-components";
import tw from "twin.macro";
import Card from "components/Card";

export const StyledCard = styled(Card)`
  ${tw`p-10`}
`;

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
  ${tw`pt-1 font-bold font-size[20px]`}
`;

export const StyledTotal = styled.div`
  ${tw` font-bold pb-2`}
`;

export const StyledPriceProduct = styled.div`
  ${tw`pb-2 font-size[18px]`}
`;

export const StyledTitleDetail = styled.h1`
  ${tw`p-2 font-bold`}
`;

export const StyledContentDetailProd = styled.div`
  ${tw`px-6 w-full flex justify-between gap-2`}
`;

export const StyledTotalPrice = styled.h2`
  ${tw`py-2 font-bold justify-end flex w-full`}
`;

export const StyledLink = styled.div`
  ${tw` text-[rgb(124, 17, 62)] cursor-pointer text-decoration-line[underline] py-2`}
`;

export const StyledPriceOld = styled.div`
  ${tw` font-size[15px] text-decoration[line-through]`}
`;

export const StyledEmptyCar = styled.h2`
  ${tw`font-bold px-5`}
`;

export const StyledLinkEmpty = styled.h2`
  ${tw` text-[rgb(124, 17, 62)] cursor-pointer text-decoration-line[underline] py-2`}
`;
