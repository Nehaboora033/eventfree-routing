import React from 'react'
import quotation from '../assets/png/quotation-mark.png'
import NormalText from './common/NormalText'

const Videosection = () => {
    return (

        <div className='max-w-[1320px] px-3 mx-auto mt-[134px]'>
            <div className='flex flex-wrap -mx-3 md:flex-row flex-col gap-6 md:gap-0'>
                <div className='md:w-1/2 w-full px-3'>
                    <img src={quotation} alt="image" />
                    <NormalText className={'mt-[22px]'} NormalText={"Semper faucibus suscipit ultricies eleifend semper sit tellus gravida pretium. Cras cursus ut semper eleifend tortor lectus tristique turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate. nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate."} />
                </div>
                <div className='md:w-1/2  w-full px-3 flex items-center justify-center md:justify-end'>
                    <iframe width="619" className='rounded-[30px]' height="415" src="https://www.youtube.com/embed/asMHYCnMb-Q?si=VYC1VHuh_IJv3KG7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                </div>

            </div>

        </div>
    )
}

export default Videosection