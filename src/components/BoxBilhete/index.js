import React from 'react';
import moment from 'moment';

export default function BoxBilhete({numero, data}) {
    var isValidDate = moment(data).isValid(), dataFormatada = '';

    if (isValidDate) {
        dataFormatada = 'Vendido: ' + '\n' + moment(data).format('DD/MM/YYYY')  
    } else {
        dataFormatada = 'Pendente'
    } 
    
           
	return (
        <div className='conteinerBilhetes'>  
            {isValidDate ? (
                <div className='boxBilheteVendido'>
                    <i class="mdi mdi-12px mdi-spin mdi-star"></i><span>&ensp;{parseInt(numero).toString().padStart(5, '0')}&ensp;</span> <br/>                   
                    <span className='styleTextoVendido'>{dataFormatada}</span>
                </div>
                )
                :(<div className='boxBilhete'>
                    <i class="mdi mdi-12px mdi-flip-h mdi-account-alert"></i><span>&ensp;{parseInt(numero).toString().padStart(5, '0')}&ensp;</span> <br/>                   
                    <span className='styleTextoPendente'>{dataFormatada}</span>
                </div>
                ) 
            }                     
        </div>        
	);    
}