import React from 'react'

function Item({handleColor,id,price,name,img}) {

    const changeColor = (e)=>{
        handleColor(e.target.id)
    }

    const itemStyle = {
        // margin:'10px',
        position:'relative',
        minWidth:'300px',
        
        height:'500px',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        // padding: '5%'
    }

    const imgStyle = {
        // position:'absolute',
        width: '40%',
        height: '70%',
        // top: '10%',
        // left: '0',
        objectFit: 'contain'
    }

    const priceStyle = {
        alignSelf:'end',
        marginRight:'10px'
    }

    const nameStyle = {
        alignSelf:'start',
        marginLeft:'10px',
    }
    return (
        <div  style={itemStyle}>
            <div onMouseOver={changeColor} id={id} 
            style={{
                cursor: 'pointer',
                // backgroundColor:'none',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0'
            }}></div>
            <h2 style={priceStyle}>{price}</h2>
            <img style={imgStyle} src={img} alt="" />
            <h3 style={nameStyle}>{name}</h3>
        </div>
    )
}

export default Item
