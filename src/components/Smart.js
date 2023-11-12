import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

const SpanAccent = tw.span`
    text-primaryColor font-ebs
`

const SpanBold = tw.span`
    font-bold
    ml-1
`

const Div = tw.div`
    rounded-xl
    bg-opacity-10
    bg-primaryColor
    py-7
    text-lg
    px-10
    md:px-56
    flex 
    flex-col
    md:flex-row
    justify-center
    items-center
    transition-all
`
const Smart = () => {
    const [isClick, setIsClick] = useState(false)
    return (
        <div className='my-20 flex flex-col items-center py-20'>
            <div className='flex flex-col md:flex-row items-center text-4xl md:text-5xl font-bold pb-24 '>
                <div>
                    딥러닝 서버,
                </div>
                <div className='flex items-center'>
                    <SpanAccent className='ml-2'>스마트</SpanAccent>하게 <SpanAccent className='ml-2'>렌탈</SpanAccent>하세요
                </div>

            </div>
            <div className='flex flex-col  space-y-14'>
                <Div className='space-x-1'>
                    <div className='flex items-center'>
                        <SpanAccent className='font-bold'>컴행어사</SpanAccent>는 <SpanBold>단기 및 장기 렌탈 플랜</SpanBold>을
                    </div>
                    <div>
                        모두 제공합니다.
                    </div>

                </Div>
                <Div className='flex-row'>
                    <SpanBold>초기 비용</SpanBold>에 대한 고민이 줄어듭니다.
                </Div>
                <Div >
                    고가의 서버 자산을 <SpanBold className='mr-1'>비용처리 </SpanBold>할 수 있습니다.
                </Div>
            </div>

        </div>
    );
};

export default Smart;