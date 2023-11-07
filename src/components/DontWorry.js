import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import tw from "tailwind-styled-components";


const Me = tw.div`
    bg-[#FFEB00] rounded-full p-3
`

const You = tw(Me)`
    bg-white px-6
`
const chat = [
    {
        id: 0, chat: ["안녕하세요. 견적 상담 받아보려고 하는데요.", "안녕하세요, 컴행어사입니다. 어떤 스펙과 기간을 원하시나요?", "00 스펙의 00 서버를 한 달 동안 렌탈하려고 해요.", "알겠습니다. 이메일로 자세한 견적 보내드리겠습니다.", "감사합니다!"]
    }, {}, {}
]
const DontWorry = () => {
    const [index, setIndex] = useState(1)
    return (
        <div className='pt-24'>
            <div className='text-center mb-20' >
                <div className='text-primaryColor font-bold text-2xl'>
                    쉽지 않은 서버 선택,
                </div>
                <div className='pt-10 pb-16 text-5xl font-bold'>
                    혼자 고민하지 마세요
                </div>
                <div className='text-center space-y-5 text-textColor'>
                    <div>
                        컴행어사는 다양한 연구 경험과 전문성을 기반으로<br />
                        여러분의 연구 환경에 꼭 필요한 최적의 서버만을 추천합니다.
                    </div>
                    <div>
                        불필요한 지출 없이 탁월한 성능과 합리적인 가격으로<br />
                        딥러닝 서버를 사용하세요!
                    </div>
                </div>
            </div>
            <AnimatePresence>
                <motion.div className='bg-[#C6DCF1] w-96 p-5 rounded-t-2xl'>
                    <div className='flex justify-center font-bold pb-5'>
                        컴행어사
                    </div>
                    <div className='space-y-7'>
                        <div className='flex justify-end'>
                            <Me>
                                안녕하세요. 견적 상담 받아보려고 하는데요.
                            </Me>
                        </div>
                        <div className='flex justify-start'>
                            <You>
                                안녕하세요, 컴행어사입니다.<br />
                                어떤 스펙과 기간을 원하시나요?
                            </You>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default DontWorry;