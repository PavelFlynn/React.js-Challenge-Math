import { useContext } from 'react';
import { ChallengeContext } from '../context/challengeContext';

export default function Date() {

    const { inputValue, setInputValue } = useContext(ChallengeContext);

    return (
        <>
        {!isNaN(inputValue) ? (
        <div className='relative my-2 px-5 py-3 text-left'>
            <p className='text-neutral-500'>• Date: <span className='text-xl font-semibold text-black'>0</span></p>
        </div>
        ) : (
        <div></div>
        )}
        </>
    )
}
