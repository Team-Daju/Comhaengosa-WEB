import React from 'react';

const Main = () => {
    return (
        <div className='p-10 flex-col md:flex-row md:flex text-center md:text-left  justify-center md:space-x-40 '>
            <div className=' py-20 pb-0'>
                <div className='text-4xl md:text-5xl flex items-center font-bold justify-center md:justify-normal md:pt-20 '>
                    왜 <span className='font-ebs pl-3 text-primaryColor'>컴행어사</span>인가?
                </div>
                <div className='py-10 space-y-5 text-textColor text-lg'>
                    <div>
                        컴행어사는 카이스트 출신<br className='md:hidden' /> 인공지능 분야 연구자들이 설립한<br />
                        <span className='font-bold'>딥러닝 서버 렌탈 전문 업체</span>입니다.
                    </div>
                    <div>
                        컴행어사 팀원들의 연구 경험을 기반으로<br />
                        연구 및 개발 환경에 따른 서버 구축 과정을 컨설팅 해드립니다.
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src="/imgs/mainImg.png" className='object-contain' />
            </div>
        </div>
    );
};

export default Main;