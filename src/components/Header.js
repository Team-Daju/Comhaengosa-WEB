import React from "react";
import tw from "tailwind-styled-components";

const Logo = tw.div`
  md:text-primaryColor font-bold font-ebs text-2xl text-white
`;
const Button = tw.button`
  flex justify-center items-center
  bg-primaryColor text-white font-bold px-4 py-2 rounded-[10px]
  w-[120px] h-[28px] md:w-[150px] md:h-[45px]
  text-sm md:text-lg
`;

const HeaderContainer = tw.div`
  flex items-center
  md:justify-between justify-end
  md:bg-white bg-black
  md:h-[150px] h-[50px]
  fixed top-0 left-0 right-0
  md:px-6 px-3
  z-[10]
`;

const Header = () => {
    return (
        <HeaderContainer>
            {/* MD 화면 크기에서 왼쪽에 로고, 그렇지 않을 경우 중앙에 위치 */}
            <Logo className="md:static absolute left-1/2 transform md:translate-x-0 -translate-x-1/2">
                컴행어사
            </Logo>
            <Button>지금 견적 받기</Button>
        </HeaderContainer>
    );
};

export default Header;
