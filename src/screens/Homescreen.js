import React from 'react';
import Pizza from '../components/Pizza';
import pizzas from '../pizzasdata';

export default function Homescreen() {
  return (
    <div>
      <div className='row'>
        {pizzas.map((pizza, index) => (
          <div key={index} className='col-md-4'>
            <div className='m-3' >
              <Pizza pizza={pizza} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
