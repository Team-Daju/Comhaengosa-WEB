import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { BsFileEarmarkPdf } from "react-icons/bs"

const MeWrap = tw.div`
flex justify-end ml-10
`
const YouWrap = tw.div`
flex justify-start mr-10
`

const Me = tw.div`
    bg-primaryColor rounded-md p-3 px-4 text-white
`

const You = tw(Me)`
    bg-[#E7E7E7] px-3 text-black
`
const chattings = [
    {
        id: 0, chats: [
            {
                who: 0,
                content: "안녕하세요. 비디오 AI 연구를 위한 서버를 골라야되는데 고민입니다.",
            },
            {
                who: 1,
                content: "반갑습니다 고객님!",
            },
            {
                who: 1,
                content: "해당 분야는 다루는 데이터 크기가 상당히 크다보니 xxx 부품들이 탑재된 서버 A를 추천드립니다.  "
            },
            {
                who: 0,
                content: "아하! 혹시 다른 선택지는 어떤 게 있나요?",
            },
            {
                who: 1,
                content: "서버 B는 어떠신가요? 이 제품은 서버 A보단 학습 속도가 다소 줄어드는 대신 비용이 저렴합니다.",
            },
            {
                who: 0,
                content: "그렇군요. 그럼 견적서 부탁드립니다. 감사합니다!",
            },
        ]
    },
    {
        id: 1, chats: [
            {
                who: 0,
                content: "안녕하세요! 서버 구축을 계획 중인데 서버실이 없으면 불가능한가요?",
            },
            {
                who: 1,
                content: "안녕하세요 고객님!",
            },
            {
                who: 1,
                content: "그런 경우, 사무실에서도 사용가능한 워크스테이션 형태를 추천드립니다!"
            },
            {
                who: 0,
                content: "어떤 형태가 있고 어떤 차이가 있을까요?",
            },
            {
                who: 1,
                content: "스펙의 차이는 없고 케이스 형태가 다릅니다! 시각적 자료도 전달드립니다 🙂",
            },
            {
                who: 0,
                content: "다행이네요. 워크스테이션 타입으로 서버 C 구매할게요!",
            },
        ]
    },

    {
        id: 2, chats: [
            {
                who: 0,
                content: "안녕하세요~ 저희가 지금은 구매가 힘들 것 같은데 렌탈 가능할까요?",
            },
            {
                who: 1,
                content: "네 고객님! 어떤 제품으로 렌탈 드릴까요?",
            },
            {
                who: 0,
                content: "서버 D의 12개월 렌탈은 금액이 어떻게 될까요?",
            },
            {
                who: 1,
                content: "서버 D의 렌탈 상품들은 첨부드린 견적서에 정리드렸습니다!",
            },
            {
                who: 1,
                content: <div className=' flex justify-center items-center space-x-4'>
                    <div className='pl-2'>
                        <BsFileEarmarkPdf />
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-bold'>서버 D 렌탈 플랜.pdf</span>
                        <span className='text-gray-400'>xx.kb</span>
                    </div>
                </div>


            },
            {
                who: 0,
                content: "감사합니다. 혹시 저희가 원하는 기간으로도 가능한가요?",
            },
            {
                who: 1,
                content: "그럼요! 저희 컴행어사는 맞춤형 플랜 서비스도 제공드립니다~",
            },
            {
                who: 0,
                content: "정말요? 그럼 저희 xx개월로 부탁드릴께요!",
            },
        ]
    }
]



const DontWorry = () => {
    const [leaving, setLeaving] = useState(false);
    const [isMd, setIsMd] = useState(false)
    const isWindowMd = () => {
        if (window.outerWidth < 768) setIsMd(true)
        else setIsMd(false)
    }
    useEffect(() => {

        isWindowMd()
        window.addEventListener("scroll", () => {
            console.log(window.outerWidth)
            isWindowMd()
        })

    }, [])
    return (
        <div className='px-8 pt-24 overflow-x-hidden justify-center flex flex-col-reverse md:space-x-40 md:flex md:flex-row' >
            <div className='px-5 pt-8 md:px-14 md:pt-16 bg-primaryColor bg-opacity-10 rounded-3xl relative border flex text-xs md:text-sm'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={100}
                    grabCursor={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    className='w-[400px] absolute rounded-t-3xl flex-1 bottom-0 shadow-[5px_4px_10px_0px_rgb(186,196,255)]'
                >
                    {chattings
                        .map((chatting, i) => (
                            <SwiperSlide
                                key={i}
                                className='bg-white p-5 rounded-t-3xl ' style={{}}>

                                <div className='flex justify-center font-bold pb-5'>
                                    컴행어사
                                </div>
                                <div className='space-y-3'>
                                    {chatting.chats.map(chat => (
                                        chat.who === 0 ? <MeWrap>
                                            <Me>
                                                {chat.content}
                                            </Me>
                                        </MeWrap> : <YouWrap >
                                            <You>
                                                {chat.content}
                                            </You>
                                        </YouWrap>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className='mb-20 ' >
                <div className='text-primaryColor font-bold text-2xl'>
                    쉽지 않은 서버 선택,
                </div>
                <div className='pt-5 pb-16 text-4xl md:text-5xl font-bold'>
                    혼자 고민하지 마세요
                </div>
                <div className='space-y-5 text-textColor'>
                    <div>
                        컴행어사는 다양한 연구 경험과 전문성을 기반으로<br />
                        여러분의 연구 환경에 꼭 필요한 최적의 서버만을 추천합니다.
                    </div>
                    <div >
                        불필요한 지출 없이 탁월한 성능과 합리적인 가격으로<br />
                        딥러닝 서버를 사용하세요!
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DontWorry;