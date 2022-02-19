import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
  ${tw`w-full grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 pt-20 pb-10`}
`;

export const StyledImgProduct = styled.img`
  ${tw`max-h-64 p-3`}
`;

export const StyledNameProduct = styled.div`
  ${tw`font-bold font-size[20px]`}
`;

export const StyledPriceProduct = styled.div`
  ${tw`pb-2 font-size[18px]`}
`;

export const StyledPriceOld = styled.div`
  ${tw` font-size[15px] text-decoration[line-through]`}
`;
