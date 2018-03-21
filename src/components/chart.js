import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default ({params}) => {
    
    return (
            <div>
                <Sparklines height={120} width={180} data={params.data}>
                    <SparklinesLine color={params.color} />
                </Sparklines>
            </div>
    );
}