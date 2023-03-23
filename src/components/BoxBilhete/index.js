import React from 'react';
import moment from 'moment';

export default function BoxBilhete({numero, data, status}) {
    let statusDeVenda = '';
    let dataFormatada = "";
    
    if(status){
        dataFormatada = moment(data).format('DD/MM/YYYY')  
        statusDeVenda = "Vendido"
    }else {
        statusDeVenda = "Pendente"
    }
    
           
	return (
        <div className='conteinerBilhetes'>  
            {status ? (
                <div className='boxBilheteVendido'>
                    <i class="mdi mdi-12px mdi-spin mdi-star"></i><span>&ensp;{parseInt(numero).toString().padStart(5, '0')}&ensp;</span> <br/>                   
                    <span className='styleTextoVendido'>{statusDeVenda} {dataFormatada}</span>
                </div>
                )
                :(<div className='boxBilhete'>
                    <i class="mdi mdi-12px mdi-flip-h mdi-account-alert"></i><span>&ensp;{parseInt(numero).toString().padStart(5, '0')}&ensp;</span> <br/>                   
                    <span className='styleTextoPendente'>{statusDeVenda} {dataFormatada}</span>
                </div>
                ) 
            }                     
        </div>        
	);    
}