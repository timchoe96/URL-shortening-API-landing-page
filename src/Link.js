import React,{useState} from 'react';

const Link = ({original,shortened}) => {

    const [color,setColor] = useState({buttonColor:'',
                                     buttonText:'Copy'
                                                        })



    const buttonChange = () => {
        setColor({buttonColor:'hsl(257, 27%, 26%)',
                    buttonText:'Copied!'
    })
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = shortened;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    }

    return(
        <div className='link'>
        <div className='originalLink'>{original}</div>
        <div className='rightSide'>
            <div className='shortenedLink'>{shortened}</div>
            <button onClick={buttonChange} style={{background:color.buttonColor}}>{color.buttonText}</button>
        </div>
        </div>
    )
}

export default Link;