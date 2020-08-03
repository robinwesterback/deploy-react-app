import React, {useState} from 'react';
import './App.css';

import SiteHeader from './components/SiteHeader';
import SiteContact from './components/SiteContact';
import SiteFooter from './components/SiteFooter';
import BusinessROICalculator from './containers/BusinessROICalculator';
import CampaignROICalculator from './containers/CampaignROICalculator';

function App() {
  const [businessResults, setBusinessResults] = useState([])
  const [campaignResults, setCampaignResults] = useState([])

  return (
    <div>
        <SiteHeader logoName="ROI Calculator" />

        <main className="body">
          <section id="home">
            <h1>The ROI calculator</h1>
            <p>
              Define your KPI:s and calculate the results of your business or marketing investment. 
            </p>
          </section>

          <section>
            <div id="business">
              <h2>Add a business</h2>
              <p className="orange-bold">Add a business by naming it to start defining your KPI:s.</p>
              <BusinessROICalculator setResult={setBusinessResults} />
            </div>

            <div id="campaign">
              <h2>Add a campaign</h2>
              <p className="orange-bold">Add a campaign by naming it to start defining your KPI:s.</p>
              <CampaignROICalculator setResult={setCampaignResults} />
            </div>
          </section>  

          <section id="roi">
            <h2>Calculate your ROI</h2>
            <p className="orange-bold">
                Get your results based on the KPI:s you have added by clicking the button below. 
                Just change the KPI:s or add more investments to calculate new results.
            </p>
            
            <div>
              {businessResults.length > 0 &&
                <ResultSection
                  title="Business results"
                  results={businessResults} />}
            </div>

            <div>
              {campaignResults.length > 0 &&
            <ResultSection
              title="Campaign result"
              results={campaignResults} />}
            </div>
          </section>  

          <section id="support">
            <h2>Support</h2>
            <p className="orange-bold">
              If you're in need of support? Do you want to feedback on any KPI:s or functionalities that you feel are missing?
              Contact us via the form below! 
            </p>
            <SiteContact/>
          </section>
        </main>

        <SiteFooter/>
    </div>
  );
}

const ResultSection = ({title, results}) => (
  <div>
    <h3>{title}</h3>

    {results.map((item, i) => (
      <div key={i}>
        <h4>{item.name}</h4>

        <span>ROI: {item.result.roi}</span>
        <span>Net ROI: {item.result.netRoi}</span>
      </div>
    ))}
  </div>
)

export default App;
