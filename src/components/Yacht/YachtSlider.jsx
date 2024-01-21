import {useRef, useEffect, useState} from 'react';
import YachtImages from './YachtImages';
import './yacht.css';
import {motion} from 'framer-motion';
import '../Functions/Scroll';

const YachtSlider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    console.log(YachtImages);

  return (
    <div className='YachtSlider'>
        <div className='YachtSlider2'>
            <motion.div ref={carousel} className='carousel'>
                    <motion.div drag="x" dragConstraints={{ right:0, left: -width}}  className='inner-carousel'>
                        {YachtImages.map(( item, image) => {
                            return(
                                <motion.div className='item' key={image}>
                                    <img src={item.src}  alt='' />
                                    <p className='TreasureYacht'>{item.text}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default YachtSlider;