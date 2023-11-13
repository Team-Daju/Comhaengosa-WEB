import React from "react";
import tw from "tailwind-styled-components";

const Logo = tw.div`
  md:text-primaryColor font-bold font-ebs text-3xl text-white
`;

const HeaderContainer = tw.div`
  flex items-center
  md:justify-between justify-end
  md:bg-white bg-black
  md:h-[100px] h-[50px]
  fixed top-0 left-0 right-0
  md:px-10 px-3
  z-[10]
`;

const Header = () => {
    return (
        <HeaderContainer>
            {/* MD 화면 크기에서 왼쪽에 로고, 그렇지 않을 경우 중앙에 위치 */}
            <Logo className="md:static absolute left-1/2 transform md:translate-x-0 -translate-x-1/2">
                컴행어사
            </Logo>
            <button class="btn btn-sm md:btn-md border-none bg-primaryColor text-white hover:bg-primaryColor">
                무료 견적 받기
            </button>
        </HeaderContainer>
    );
};

export default Header;
