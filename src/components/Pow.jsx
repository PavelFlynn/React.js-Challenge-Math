import { useContext } from 'react';
import { ChallengeContext } from '../context/challengeContext';

export default function Pow() {

    const { inputValue, setInputValue } = useContext(ChallengeContext);

    return (
        <>
        {!isNaN(inputValue) ? (
        <div className='relative my-2 px-5 py-3 text-left'>
            <p className='text-neutral-500'>• Rised by its same value: <span className='text-xl font-semibold text-black'>{ inputValue ** 2 }</span></p>
        </div>
        ) : (
        <div></div>
        )}
        </>
    )
}
