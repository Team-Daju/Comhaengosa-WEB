import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";

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
        id: 5, chats: [
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
]

const rowVariants = {
    hidden: {
        x: window.outerWidth + 2000,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -window.outerWidth - 2000,
    },
};


const DontWorry = () => {
    const [index, setIndex] = useState(1)
    const [leaving, setLeaving] = useState(false);

    const toggleLeaving = () => setLeaving((prev) => !prev);

    const [startIndex, setStartIndex] = useState(index - 1)
    const [endIndex, setEndIndex] = useState(index + 2)
    useEffect(() => {
        //setInterval(() => setIndex(prev => prev === 2 ? 0 : prev + 1), 5000);
    }, [])
    const onClick = () => {
        setIndex(prev => prev + 1)
    }
    return (
        <div className='pt-24' >
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
            <div className=' overflow-x-hidden'>
                <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                    <motion.div
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween", duration: 1 }}
                        key={index}
                        className=' grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-96 overflow-x-hidden overscroll-none'>
                        {chattings
                            .slice(index - 1, index + 2).map(chatting => (
                                <div
                                    className='bg-[#C6DCF1] md:w-[500px] p-5 rounded-t-3xl mx-4'>

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
                                </div>
                            ))}
                    </motion.div>

                </AnimatePresence>
            </div>

        </div>
    );
};

export default DontWorry;