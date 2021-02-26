import React from 'react'
import { Bola, BolaContent } from '../styles'

function Bolilla({num}) {
    return (
        <div>
<Bola>
    <BolaContent>
        {num && num}
    </BolaContent>
</Bola>            
        </div>
    )
}

export default Bolilla
