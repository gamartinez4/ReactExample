import React, { useState, useEffect} from 'react';
import {useHistory} from "react-router";
import { useParams } from 'react-router-dom';

function Home() {
    let history=useHistory()
    const {dat1,dat2} = useParams()



    const siNulo=(dato)=>{
        if(dato===undefined || dato===""){
            return "*"
        }
        else return dato
    }

  return (
    <div>
      <p>los parametros son {siNulo(dat1)} y {siNulo(dat2)} </p>
      <button onClick={() => history.push('/about',{ detail: 'ESTE STRING'})}>
        Click me
      </button>
    </div>
  );
}

export default Home