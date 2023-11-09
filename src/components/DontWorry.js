import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

const MeWrap = tw.div`
flex justify-end ml-10
`
const YouWrap = tw.div`
flex justify-start mr-10
`

const Me = tw.div`
    bg-[#FFEB00] rounded-full p-3 px-4
`

const You = tw(Me)`
    bg-white px-6
`
const chattings = [
    {
        id: 0, chats: [
            {
                who: 0,
                content: "0안녕하세요. 견적 상담 받아보려고 하는데요.",
            },
            {
                who: 1,
                content: "안녕하세요, 컴행어사입니다. 어떤 스펙과 기간을 원하시나요?",
            },
            {
                who: 0,
                content: "00 스펙의 00 서버를 한 달 동안 렌탈하려고 해요.",
            },
            {
                who: 1,
                content: "알겠습니다. 이메일로 자세한 견적 보내드리겠습니다.",
            },
            {
                who: 0,
                content: "감사합니다!",
            },
        ]
    },
    {
        id: 1, chats: [
            {
                who: 0,
                content: "1안녕하세요. 견적 상담 받아보려고 하는데요.",
            },
            {
                who: 1,
                content: "안녕하세요, 컴행어사입니다. 어떤 스펙과 기간을 원하시나요?",
            },
            {
                who: 0,
                content: "00 스펙의 00 서버를 한 달 동안 렌탈하려고 해요.",
            },
            {
                who: 1,
                content: "알겠습니다. 이메일로 자세한 견적 보내드리겠습니다.",
            },
            {
                who: 0,
                content: "감사합니다!",
            },
        ]
    },
    {
        id: 2, chats: [
            {
                who: 0,
                content: "2안녕하세요. 견적 상담 받아보려고 하는데요.",
            },
            {
                who: 1,
                content: "안녕하세요, 컴행어사입니다. 어떤 스펙과 기간을 원하시나요?",
            },
            {
                who: 0,
                content: "00 스펙의 00 서버를 한 달 동안 렌탈하려고 해요.",
            },
            {
                who: 1,
                content: "알겠습니다. 이메일로 자세한 견적 보내드리겠습니다.",
            },
            {
                who: 0,
                content: "감사합니다!",
            },
        ]
    },
    {
        id: 3, chats: [
            {
                who: 0,
                content: "3안녕하세요. 견적 상담 받아보려고 하는데요.",
            },
            {
                who: 1,
                content: "안녕하세요, 컴행어사입니다. 어떤 스펙과 기간을 원하시나요?",
            },
            {
                who: 0,
                content: "00 스펙의 00 서버를 한 달 동안 렌탈하려고 해요.",
            },
            {
                who: 1,
                content: "알겠습니다. 이메일로 자세한 견적 보내드리겠습니다.",
            },
            {
                who: 0,
                content: "감사합니다!",
            },
        ]
    },
    {
        id: 4, chats: [
            {
                who: 0,
                content: "4안녕하세요. 견적 상담 받아보려고 하는데요.",
            },
            {
                who: 1,
                content: "안녕하세요, 컴행어사입니다. 어떤 스펙과 기간을 원하시나요?",
            },
            {
                who: 0,
                content: "00 스펙의 00 서버를 한 달 동안 렌탈하려고 해요.",
            },
            {
                who: 1,
                content: "알겠습니다. 이메일로 자세한 견적 보내드리겠습니다.",
            },
            {
                who: 0,
                content: "감사합니다!",
            },
        ]
    },
    {
        id: 5, chats: [
            {
                who: 0,
                content: "5안녕하세요. 견적 상담 받아보려고 하는데요.",
            },
            {
                who: 1,
                content: "안녕하세요, 컴행어사입니다. 어떤 스펙과 기간을 원하시나요?",
            },
            {
                who: 0,
                content: "00 스펙의 00 서버를 한 달 동안 렌탈하려고 해요.",
            },
            {
                who: 1,
                content: "알겠습니다. 이메일로 자세한 견적 보내드리겠습니다.",
            },
            {
                who: 0,
                content: "감사합니다!",
            },
        ]
    },
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
        window.addEventListener("resize", () => {
            console.log(window.outerWidth)
            isWindowMd()
        })

    }, [])
    return (
        <div className='pt-24 overflow-x-hidden' >
            <div className='text-center mb-20' >
                <div className='text-primaryColor font-bold text-2xl'>
                    쉽지 않은 서버 선택,
                </div>
                <div className='pt-10 pb-16 text-4xl md:text-5xl font-bold'>
                    혼자 고민하지 마세요
                </div>
                <div className='text-center space-y-5 text-textColor'>
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
            <div className='mx-4 md:-mx-40'>
                <Swiper
                    slidesPerView={isMd ? 1 : 3}
                    spaceBetween={100}
                    grabCursor={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                >
                    {chattings
                        .map(chatting => (
                            <SwiperSlide
                                className='bg-[#C6DCF1] p-5 rounded-t-3xl' style={{ width: "500px" }}>

                                <div className='flex justify-center font-bold pb-5'>
                                    컴행어사
                                </div>
                                <div className='space-y-7'>
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
        </div>
    );
};

export default DontWorry;