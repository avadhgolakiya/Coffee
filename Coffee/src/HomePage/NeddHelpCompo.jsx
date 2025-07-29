import React from 'react'
import './Home.css'
import './MediaQurey.css';
import HelpContactCompo from './HelpContactCompo';

const NeddHelpCompo = () => {
  return (
    <div className='need-Help-Compo'>
            <h1 className='NeddHelpText'>Need Help?</h1>
            <div className='conatct-boxes-sec-5'>
                <HelpContactCompo title="General Inquiries" contact="+1 (212) 555-0198"/>
                <HelpContactCompo title="Customer Support" contact="+1 (718) 555-0243"/>
                <HelpContactCompo title="General Email" contact="hello@bhaus.com"/>
                <HelpContactCompo title="Support Email" contact="support@bhaus.com"/>

            </div>
    </div>
  )
}

export default NeddHelpCompo
