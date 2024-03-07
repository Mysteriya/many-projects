import React from 'react';
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/store';
import { removeItem } from '../../redux/slices/imageSlice/imageSlice';
import { useSelector } from 'react-redux';

interface IImageProps {
    id: number;
    url: string;
}

const Image: React.FC<IImageProps> = ({id, url}) => {
    const dispatch = useAppDispatch()
    const { loading } = useSelector((state: RootState) => state.languageSlice.items.page!.receivingPictures)

    const {ref, inView} = useInView({
        threshold: 0.1
    })

    return (
        <div className='img' ref={ref}>
            {inView ?
                <>
                    <Link to={`/going/img/${id}`}>
                        <img src={url}/>
                    </Link>
                    <button onClick={() => dispatch(removeItem(id))}><svg height="18px" version="1.1" viewBox="0 0 14 18" width="14px" xmlns="http://www.w3.org/2000/svg" ><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-299.000000, -129.000000)"><g id="delete" transform="translate(299.000000, 129.000000)"><path d="M1,16 C1,17.1 1.9,18 3,18 L11,18 C12.1,18 13,17.1 13,16 L13,4 L1,4 L1,16 L1,16 Z M14,1 L10.5,1 L9.5,0 L4.5,0 L3.5,1 L0,1 L0,3 L14,3 L14,1 L14,1 Z" id="Shape"/></g></g></g></svg></button>
                </>
                :
                <>
                    <div style={{width:600, height:600}}>
                        <h1 style={{textAlign: "center"}}>{loading}</h1>
                    </div>
                </>
            }
        </div>
    );
};

export default Image;