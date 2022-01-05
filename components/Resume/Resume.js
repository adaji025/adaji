import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { Education, Work } from '../../Libs/ResumeData'
import styles from './Resume.module.css'

export default function Resume() {
    return (
        <div>
            <div className="container text-center pb-2">
                <h1 className='text-white pt-5'><span className='fw-lighter'>My </span> Resume</h1>
                <div className="green-vertL mx-auto"></div>
            </div>
            <div className="container pt-3 pb-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="py-3 text-white">Education</h2>
                     {
                            Education.map((item, index) => {
                                return(
                                    <div className={`card w-sm-75 m-2 ${styles.card}`} key={index}>
                                        <div className="card-body">
                                            <span className="d-block card-text gt-regular my-2 text-white"> <span className='pe-2'><FaCalendarAlt /></span>{item.date}</span>
                                            <h5 className={`condensedbold ${styles.title}`}>{item.title}</h5>
                                            <span className={`d-block text-lighter text-secondary gt-medium ${styles.description}`}>{item.description}</span>
                                            <span className={`d-block py-2 gt-bold text-secondary ${styles.institution}`}>{item.institution}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-6">
                    <h2 className="py-3 text-white">Work</h2>
                         {
                            Work.map((item, index) => {
                                return(
                                    <div className={`card w-sm-75 m-2 ${styles.card}`} key={index}>
                                        <div className="card-body">
                                            <span className="d-block card-text gt-regular my-2 text-white"> <span className='pe-2'><FaCalendarAlt /></span>{item.date}</span>
                                            <h5 className={`condensedbold ${styles.title}`}>{item.title}</h5>
                                            <span className={`d-block text-lighter text-secondary gt-medium ${styles.description}`}>{item.description}</span>
                                            <span className={`d-block py-2 gt-bold text-secondary ${styles.institution}`}>{item.institution}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
