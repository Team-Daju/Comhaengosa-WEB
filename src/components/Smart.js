import React, { useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';

export function cls(...classnames) {
    return classnames.join(" ");
}

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
    px-4
    md:px-56
    flex 
    flex-col
    md:flex-row
    justify-center
    items-center
    transition-all
    translate-y-20 
    duration-500
    opacity-0
`
const Smart = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const [isScroll1, setIsScroll1] = useState(false)
    const [isScroll2, setIsScroll2] = useState(false)
    const [isScroll3, setIsScroll3] = useState(false)

    const [isMd, setIsMd] = useState(window.outerWidth < 768 ? true : false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const y1 = ref1?.current?.getBoundingClientRect().y
            const y2 = ref1?.current?.getBoundingClientRect().y
            const y3 = ref1?.current?.getBoundingClientRect().y
            console.log(y1)
            if (isMd) {
                if (y1 < 850) setIsScroll1(true)
                if (y2 < 600) setIsScroll2(true)
                if (y3 < 400) setIsScroll3(true)
            } else {
                if (y1 < 600) setIsScroll1(true)
                if (y2 < 500) setIsScroll2(true)
                if (y3 < 400) setIsScroll3(true)
            }
        })

    }, [])
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
                <Div ref={ref1} className={cls('space-x-1', isScroll1 === true ? "translate-y-0 opacity-100" : "")}>
                    <div className='flex items-center'>
                        <SpanAccent className='font-bold'>컴행어사</SpanAccent>는 <SpanBold>단기 및 장기 렌탈 플랜</SpanBold>을
                    </div>
                    <div>
                        모두 제공합니다.
                    </div>

                </Div>
                <Div ref={ref2} className={cls('flex-row', isScroll2 === true ? "translate-y-0 opacity-100" : "")}>
                    <SpanBold>초기 비용</SpanBold>에 대한 고민이 줄어듭니다.
                </Div>
                <Div ref={ref3} className={cls(isScroll3 === true ? "translate-y-0 opacity-100" : "")}>
                    고가의 서버를 보유할 필요없이
                    <div>
                        매월 비용처리하여 <SpanBold>세금감면</SpanBold>이 쉬워집니다.
                    </div>
                </Div>
            </div>

        </div>
    );
};

export default Smart;