import React from 'react';
import './App.css';

import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <div>
        <SiteHeader logoName="ROI Calculator" />

        <main className="body">
          <section>
            <h1>The ROI calculator</h1>
            <p>
              Define your KPI:s and calculate the results of your business or marketing investment. 
            </p>
          </section>

          <section>
            <div>
              <h2>Add a business</h2>
              <p className="orange-bold">Add a business by naming it to start defining your KPI:s.</p>
              BusinessROICalculator
            </div>

            <div>
              <h2>Add a campaign</h2>
              <p className="orange-bold">Add a campaign by naming it to start defining your KPI:s.</p>
              Campaign ROI Calculator
            </div>
          </section>  

          <section>
            <h2>Calculate your ROI</h2>
            <p className="orange-bold">
                Get your results based on the KPI:s you have added by clicking the button below. 
                Just change the KPI:s or add more investments to calculate new results.
            </p>
            
            <div>
              ResultSection
            </div>

            <div>
              Campaign Results
            </div>
          </section>  

          <section>
            <h2>Support</h2>
            <p className="orange-bold">
              If you're in need of support? Do you want to feedback on any KPI:s or functionalities that you feel are missing?
              Contact us via the form below! 
            </p>
            SiteContact
          </section>
        </main>

        <footer>
          <div>
            <h3>Megapixel Group ROI Calculator</h3>
          </div>
            <h4>Stockholm, Sweden</h4>
            <h4>+46 8 189 880</h4>
            <br></br>
            <h4>Marbella, Spain</h4>
            <h4>info@megapixelab.se</h4>
            <h6>
              Did you know that Megapixel is offering marketing services?
              <br></br>
              <a href="https://www.megapixelab.se/" target="_blank">https://www.megapixelab.se/</a>
            </h6>
          <div>
          </div>
          <nav>
            <p>copyright</p>
            <p>privacy policy</p>
          </nav>
        </footer>
    </div>
  );
}

export default App;
