import React from 'react'
import footerLogo from '../../assets/svg/footer-logo.svg'

const Footer = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='max-w-[1320px] px-3 mx-auto'>
                    <div className='row -mx-3 pt-[86px]'>
                        <div className='3/12 px-3'>
                            <img src={footerLogo} alt="footer-logo" />
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c </p>
                        </div>
                        <div className='9/12 px-3'>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer