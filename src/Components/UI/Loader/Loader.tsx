import React from 'react';
import clss from './Loader.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const MyLoader = () => {
    const text = useSelector((state: RootState) => state.languageSlice.items.components?.loader.text)
    return (
        <div className={clss.root}>
            <div className={clss.rotate}>
                <div className={clss.text__loader}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default MyLoader;