import React, { useState } from 'react';


const Openings = () => {
    const [show,setShow]=useState(false);
    const [soon,setSoon]=useState(false);
  return (
    <div className='bg-orange-200 p-3'>
      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-bold">Opening Positions</h1>
      </div>

      <div className="px-4">
        <div className="bg-white text-black p-6 rounded-lg shadow-md w-full cursor-pointer">
           {show ? (<div>
                <h2 className="text-xl font-semibold mb-2">Business Development Executive (BDE) - Telecalling</h2>
                <p className="mb-4">Location: Chennai, Bangalore | Full-time</p>
                <p className="mb-4">Proactively reach out to potential clients through calls and other communication channels.</p>
                {show&& 
                <div>
                    <h1>Job Details</h1>
                    <ul>
                        <li> Explain the services and offerings to generate interest and schedule follow-ups.</li>
                        <li>Maintain a database of leads and update status regularly in the CRM.</li>
                        <li>Achieve weekly and monthly targets as assigned.</li>
                    </ul>
                    <h1>Key Skills Required</h1>
                    <h1>Experience</h1>
                    <ul>
                        <li>Excellent communication and interpersonal skills.</li>
                        <li>Persuasion and negotiation skills.</li>
                        <li>Basic knowledge of CRM tools is a plus.</li>
                    </ul>
                    <p>0-2 years in a similar role.</p>
                </div>}
                <div className="flex items-center justify-between mt-4">
                    <p className="text-blue-600 hover:underline cursor-pointer" onClick={()=>setShow(!show)}> {show ? "Hide" : "Show More"}</p>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Apply Now
                    </button>
                </div>
            </div>):<h1 className="text-4xl font-bold mb-2 text-center animate__animated  animate__flash animate__infinite ">Comming Soon....</h1>}
        </div>
      </div>
    </div>
  );
};

export default Openings;
