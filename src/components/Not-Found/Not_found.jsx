import React from 'react';
import './Not_found.css';
import notFound from '../assest/404.png';

const Not_found = () => {
  return (
    <div>
      <div class="not-found">
        <div class="box">
            <img src={notFound} />
            <p>Oops! Location not found!</p>
        </div>
      </div>
    </div>
  )
}

export default Not_found
