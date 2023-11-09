import React from 'react';

const Estimate = () => {
    return (
        <div className='bg-[url("./rental.png")] bg-cover  w-full h-96 flex-col flex justify-center items-center'>
            <div className='flex flex-col space-y-5'>
                <span className='font-bold text-3xl text-white '>
                    딥러닝 서버는 이제 컴행어사와 함께 준비해보세요.
                </span>
                <div className='flex justify-center'>
                    <button className='btn border-none flex items-center bg-primaryColor text-white hover:bg-primaryColor text-xl rounded-full px-5'>
                        지금 견적 받기 <img src='/imgs/aero.png' className='w-6 h-6' />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Estimate;