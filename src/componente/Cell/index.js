import React from 'react';
const Cell=props => {
    let renderCell = () => {
        if(props.data.isOpen){
            //
            return (
                <div className="cell open">
                    </div>
            )
        }else {
            //
            return(
                <div className="cell">
                    </div>
            );
        }
    }
    return renderCell();
};
export default  Cell;