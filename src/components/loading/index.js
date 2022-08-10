import React from 'react';
import loadinggif from './assets/loadinggif.gif'

const Loading = ({loading}) => {
    if (loading) {
        return <div className='appLoading'>
            <div className='gif-loading-content'>
                <img src={loadinggif}/>
            </div>
            
        </div>
    }}

export default Loading;