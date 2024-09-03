'use client'

import 'swiper/css'
import 'swiper/css/navigation'

import { DiPostgresql  } from 'react-icons/di'
import { FaJenkins, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandStorybook,TbBrandTypescript } from 'react-icons/tb'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SkillItem } from '@/components/home/skils/skill-item'
import { H2Title } from '@/components/texts/h2-title'
import { H3Title } from '@/components/texts/h3-title'

export function Skills() {
    return (
        <div className="my-skills py-40">
            <div className="container">
                <H2Title>My Skills</H2Title>
                <H3Title>My extensive list of skills</H3Title>
            </div>

            <div className="custom-max-w">

                <Swiper
                    slidesPerView={7}
                    centeredSlides={true}
                    spaceBetween={30}
                    className="mySkillsSwiper mt-20"
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <SkillItem Icon={FaReact} title="React" description="Advanced knowledge in interface and component development" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillItem Icon={RiNextjsLine } title="NextJS" description="Intermediate knowledge in creating micro frontends and applications" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillItem Icon={FaPhp} title="PHP" description="Intermediate knowledge applied in ecommerce platform" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillItem Icon={RiTailwindCssFill} title="Tailwind CSS" description="Advanced knowledge applied in all areas, such as micro frontends, dashboards and websites" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillItem Icon={TbBrandTypescript } title="Typescript" description="Advanced knowledge applied in all areas, such as micro frontends, dashboards and websites" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillItem Icon={FaNodeJs} title="NodeJS" description="Intermediate knowledge applied in e-commerce platform" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillItem Icon={TbBrandStorybook} title="Storybook" description="Advanced knowledge applied in ecommerce platform" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillItem Icon={FaJenkins} title="Jenkins" description="Basic knowledge applied in creating CI/CD in microservices and micro frontends" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillItem Icon={DiPostgresql} title="PostgresSQL" description="Average knowledge applied in day-to-day life on an ecommerce platform" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}