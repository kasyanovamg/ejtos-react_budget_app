import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency  } = useContext(AppContext);
    const [show, onShow] = useState(false);
    const onCurrencyChange = (e) => {
        const value = e.target.getAttribute('value')
        return  dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <div className="m-1 dropdown">
  <button onClick={() => onShow(!show)} className={`btn btn-success dropdown-toggle ${show ? "show" : ""}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Currency ({currency})
  </button>
  <ul style={{background: '#7cc8a4'}} className={`dropdown-menu ${show ? "show" : ""}`}>
    <li onClick={onCurrencyChange} ><a value="$" className="dropdown-item" >$ Dollar</a></li>
    <li onClick={onCurrencyChange} ><a value="£" className="dropdown-item" >£ Pound</a></li>
    <li onClick={onCurrencyChange} ><a value="€" className="dropdown-item" >€ Euro</a></li>
    <li onClick={onCurrencyChange} ><a value="₹" className="dropdown-item" >₹ Ruppee</a></li>
  </ul>
</div>
        </div>
    );
};
export default Currency;