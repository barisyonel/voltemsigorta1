'use client'
import { useState } from 'react'

export default function InsuranceFAQ({ items = [] }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: null,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: null,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="insurance-details__faq">
            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                {items.map((item, index) => (
                    <div 
                        key={index}
                        className={isActive.key === index + 1 ? "accrodion active" : "accrodion"} 
                        onClick={() => handleToggle(index + 1)}
                    >
                        <div className="accrodion-title">
                            <h4>{item.question}</h4>
                        </div>
                        <div className="accrodion-content">
                            <div className="inner">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
