import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent
} from 'framer-motion'
import { useRef } from 'react'
import { MoveRight } from 'lucide-react'
import EVCharging from '@/app/assets/ev-charging.png'
import SolarEnergy from '@/app/assets/solar-energy.png'
import WindEnergy from '@/app/assets/wind-energy.png'
import Hydropower from '@/app/assets/hydroppower.png'

const SolutionsList = [
    {
        title: 'EV Charging',
        alt: 'ev-charging',
        description:
            'EVs use electricity as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector.',
        icon: EVCharging.src
    },
    {
        title: 'Solar Energy',
        alt: 'solar-energy',
        description:
            'Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.',
        icon: SolarEnergy.src
    },
    {
        title: 'Wind Energy',
        alt: 'wind-energy',
        description:
            'Wind turbines harness the kinetic energy of the wind to generate electricity. Wind farms with multiple turbines are commonly used to produce large amounts of clean energy.',
        icon: WindEnergy.src
    },
    {
        title: 'Hydropower',
        alt: 'hydropower',
        description:
            "This technology uses the energy from flowing water, such as rivers and dams, to turn turbines and generate electricity. It's one of the oldest forms of renewable energy.",
        icon: Hydropower.src
    }
]

export const Solutions = () => {
    return (
        <section className='bg-white border-b border-gray-200 md:overflow-x-clip mt-6 py-12 md:px-8 sm:px-0'>
            <div className='bg-[#FFF7ED] md:rounded-2xl rounded-3xl mx-5 md:mx-0'>
                <div className='container md:w-full md:pb-20 md:pt-16 pt-8 px-12 '>
                    <div className='inline-flex w-full border-b border-spacing-y-1 border-slate-300 py-4'>
                        <div className='rounded-md bg-black/80 h-5 w-5 mr-3 flex items-center justify-center'>
                            <div className='rounded-full bg-[#BEF264] h-3 w-3'></div>
                        </div>
                        <p className='font-medium'>Solutions</p>
                    </div>
                    <h1 className='md:text-6xl text-5xl font-regular tracking-tight text-black/80 md:my-14 my-10'>
                        Key to clean future
                    </h1>
                    <div className='md:grid md:grid-cols-2 sm:flex sm:flex-col gap-10 md:mt-24 mt-12 lg:flex-row lg:items-end lg:justify-center'>
                        {SolutionsList.map(({ icon, title, description, alt }) => (
                            <div className='flex-auto w-full md:pr-16 pr-4 md:pb-12 pb-4'>
                                <Image
                                    src={icon}
                                    alt={alt}
                                    key={title}
                                    width={48}
                                    height={48}
                                    className='w-[44px] h-[44px]'
                                />
                                <h4 className='mt-6 text-xl font-medium'>{title}</h4>
                                <p className='mt-5 text-[14px]'>{description}</p>
                                <button className='mt-6 btn btn-text-sm'>
                                    Read more <MoveRight className='h-4 ml-2' />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
