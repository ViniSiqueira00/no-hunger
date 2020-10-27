import React from 'react';

function ProgressBar() {
     return (
          <div className="progress-bar">
               <div className="progress">
                    <div className="labels">
                         <p>01.</p>
                         <p>02.</p>
                         <p>03.</p>
                         <p>04.</p>
                    </div>
                    <div className="bars">
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                    </div>
               </div>
          </div>
     );
}

export default ProgressBar;