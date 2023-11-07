import React from 'react';
import tw from 'tailwind-styled-components';

const SpanAccent = tw.span`
    text-primaryColor font-ebs
`

const SpanBold = tw.span`
    font-bold
    ml-2
`

const Div = tw.div`
    rounded-xl
    bg-opacity-10
    bg-primaryColor
    p-3
    px-20
    flex 
    justify-center
    items-center
`
const Smart = () => {
    return (
        <div className='my-20 flex flex-col items-center'>
            <div className='flex items-center text-4xl font-bold pb-10'>딥러닝 서버, <SpanAccent className='ml-2'>스마트</SpanAccent>하게 <SpanAccent className='ml-2'>렌탈</SpanAccent>하세요</div>
            <div className='flex flex-col  space-y-5'>
                <Div>
                    <SpanAccent className='font-bold'>컴행어사</SpanAccent>는 <SpanBold>단기 및 장기 렌탈 플랜</SpanBold>을 모두 제공합니다.
                </Div>
                <Div>
                    <SpanBold>초기 비용</SpanBold>에 대한 고민이 줄어듭니다.
                </Div>
            </div>

        </div>
    );
};

export default Smart;