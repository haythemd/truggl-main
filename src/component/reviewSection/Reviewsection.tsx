import React from 'react'
import SectionTitle from '../sectionTitle/SectionTitle'
import ReviewSlider from './reviewSlider/ReviewSlider'
import '../reviewSection/reviewSlider/ReviewSlider.css'
import Reveal from '../reveal/Reveal'
import { trustPilot } from '@/exports/svgExports'
import { TESTIMONIALS_SECTION_TEXT } from '@/exports/copywriting/headers'

const Reviewsection = () => {
  return (
    <Reveal type='slideLeft'>
      <section className="reviewSection">
          <SectionTitle title={TESTIMONIALS_SECTION_TEXT.HEADER} visibility={false}></SectionTitle>
          <a className="trustPilot" target='_blank' href='https://www.trustpilot.com/review/truggl.com'>Excellent {TESTIMONIALS_SECTION_TEXT.TRUSTPILOT_SCORE} <span> out of 5</span>{trustPilot}</a>
          <ReviewSlider></ReviewSlider>
      </section>
    </Reveal>
  )
}

export default Reviewsection