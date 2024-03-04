import React from 'react'
import classes from './MyWindow.module.scss'

type TypeMyWindowProp = {
    children: React.ReactNode;
    isWindow?: boolean;
    isBackground?: boolean;

    width?: string;
    height?: string;

    position?: string;
    top?: string | number;
    left?: string | number;
    right?: string | number;

    background?: string;
}

const MyWindow:React.FC<TypeMyWindowProp> = ({children, isWindow, isBackground, width, height, top, right, left, background}) => {
  return (
    <>
        { isWindow &&
            <>
                { isBackground ?
                    <>
                        <div className={classes.background}>  
                            </div>
                                <div 
                                className={classes.window} 
                                onClick={event => event.stopPropagation()} 
                                style={{
                                    width: width, 
                                    height: height, 

                                    position: 'fixed',
                                    top: top, 
                                    right: right,
                                    left: left,
                                    
                                    backgroundColor: background,
                                }}
                            >
                            <div className={classes.content__window}>
                                {children}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            </div>
                                <div 
                                className={classes.window} 
                                onClick={event => event.stopPropagation()} 
                                style={{
                                    width: width, 
                                    height: height, 

                                    position: 'fixed',
                                    top: top, 
                                    right: right,
                                    left: left,
                                    
                                    backgroundColor: background,
                                }}
                            >
                            <div className={classes.content__window}>
                                {children}
                            </div>
                        </div>
                    </>
                }
            </>
        }
    </>
  )
}

export default MyWindow

