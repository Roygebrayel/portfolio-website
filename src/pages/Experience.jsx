import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
const Experience = () => {
  return (
    <div className='experience'>

      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2010-2014' 
        iconStyle={{ background: "#3e497a", color: "#fff" }} 
        icon={<SchoolIcon />}>
          <h3 className='vertical-time-line-element-title'> My Random high school </h3>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience