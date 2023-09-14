import React from 'react'
import TransparentButton from './TransparentButton'
import Style from './style'
import Image from 'next/image'
import { Input } from '../Input'

const InputWithIcon = ({ onChange, value, background, icon, onIconClick = () => { }, className = "", ...rest }) => {
    return (
        <Style className={className} background={background}>
            <TransparentButton className='icon' onClick={onIconClick}>
                <Image src={icon} alt="icon" />
            </TransparentButton>
            <Input onChange={onChange} value={value} {...rest} className='input__subscribe'/>
        </Style>
    )
}

export default InputWithIcon