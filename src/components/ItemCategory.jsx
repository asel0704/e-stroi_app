import React from 'react'

const ItemCategory = ({ nodes }) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{
                display: 'inline-block',
                marginTop: "5px",
                marginBot: "10px",
                color: "black"
            }}>{nodes.name}</span>
            <span style={{
                display: 'inline-block',
                width: "29px", height: "28px",
                borderRadius: "50%",
                paddingTop:'5px',
                textAlign: "center",
                backgroundColor: "#FCF3CF",
                marginTop: "10px",
                marginBot: "10px",
                color: "black"
            }}>{nodes.childCount ? nodes.childCount: 0}</span>
        </div>
    )
}

export default ItemCategory