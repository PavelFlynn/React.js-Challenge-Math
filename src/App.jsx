import { useState } from 'react';
import { Header, Input, Multiply, Pow, Date } from './components';
import { ChallengeContext } from './context/challengeContext';

export default function App() {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className='relative'>
            <div className='relative min-h-screen flex justify-center items-center box-border'>
                <div className='flex-grow-0 flex-shrink basis-[25rem] min-h-[17.5rem] m-5 p-5 text-center bg-white rounded-xl'>

                    <Header label='Challenge' />

                    <ChallengeContext.Provider value={{ inputValue, setInputValue }}>
                        <Input />
                        <Multiply />
                        <Pow />
                        <Date />
                    </ChallengeContext.Provider>

                </div>
            </div>
        </div>
    )
}