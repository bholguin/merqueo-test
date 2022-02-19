import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import tw from "twin.macro";

export const StyledContainer = styled.div`
  ${tw`overflow-hidden bg-[rgb(124, 17, 62)] fixed top-0 w-full z-50 h-16 `}
`;

export const StyledTitle = styled.div`
  ${tw`text-white font-bold text-2xl h-full flex px-5 items-center justify-between`}
`;

export const StyledCar = styled(ShoppingCartIcon)`
  font-size: 2.5rem !important;
`;

export const StyledIcon = styled.div`
  ${tw`relative cursor-pointer`}
`;

export const StyledTotal = styled.div`
  ${tw`absolute border-radius[50%] w-6 h-6 flex bg-[#FFC300] text-[#7C113E] top-[-15%] text-[15px] justify-center items-center left-[70%]`}
`;
