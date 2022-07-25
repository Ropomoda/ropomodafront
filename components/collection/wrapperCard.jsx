import React from 'react'
import styles from './styles.module.scss';

function WrapperCard({ children, className = '' }) {
    return (
        <div className={`${className} ${styles["wrapper-card"]} py-4 pr-5 sm:rounded-3xl relative`}>
            {children}
        </div>
    )
}

export default WrapperCard