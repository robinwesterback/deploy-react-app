import React, { useState, useRef } from 'react';
import calculator from '../assets/js/calculator';

export default function CampaignROICalculator({setResult}) {
  const [campaigns, setCampaigns] = useState([])
  const [addCampaignError, setAddCampaignError] = useState()
  const addNewForm = useRef()

  // getCampaign(name) finds the items to every campaign.
  const getCampaign = (name) => campaigns.find((item) => item.name === name)

  // clear() clears and resets addNewForm, Result and Campaigns.
  const clear = () => {
    addNewForm.current.reset()
    setResult([])
    setCampaigns([])
  }

  // calculateResult(items) runs calculateCampaign function based on the value of the items in campaign.
  const calculateResult = (items) => {
    const results = items.map((campaign) => ({
      name: campaign.name,
      result: calculator.calculateCampaign(campaign.kpi)
    }))

    setResult(results)
  }

  // addCampaign(event) adds a campaign on event with name and pre-defined kpi's. 
  // It calls for setAddCampaignError if a campaign with the same name is added.
  // Each time you add a campaign you also reset the add campaign input and calculate results.
  const addCampaign = (event) => {
    event.preventDefault()
    const name = event.target.campaignName.value

    if (getCampaign(name)) {
      setAddCampaignError(`${name} is already added.`)
      return
    }

    const newCampaign = {
      name,
      kpi: {
        grossProfit: 0,
        netProfit: 0,
        marketingInvestment: 0,
        LTV: 0,
        newCustomersAcquired: 0,
      }
    }

    const newCampaigns = [...campaigns, newCampaign]

    setCampaigns(newCampaigns)
    calculateResult(newCampaigns)
    addNewForm.current.reset()
  }

  // onCampaignFormChanged(event) takes the value of every campaign kpi 
  // and calculate results on form change (when you add numbers to the kpi:s).
  const onCampaignFormChanged = (event) => {
    const campaign = getCampaign(event.target.form.name)
    const field = event.target.name
    const value = Number(event.target.value)

    const newCampaigns = campaigns.map((item) => {
      if (item.name === campaign.name) {
        return {
          name: campaign.name,
          kpi: { ...campaign.kpi, [field]: value }
        }
      }

      return item
    })

    setCampaigns(newCampaigns)
    calculateResult(newCampaigns)
  }

  return (
    <div>
      <form ref={addNewForm} onSubmit={addCampaign}>
        <label htmlFor="campaignName">
          Name

          <input
            type="text"
            id="campaignName"
            name="campaignName"
            className={addCampaignError ? 'has-error' : ''}
            required
            onChange={() => setAddCampaignError(null)} />
        </label>

        {addCampaignError && (
          <span className="input-error-message">{addCampaignError}</span>
        )}

        <button type="submit">Add</button>
      </form>

      {campaigns.map((campaign, i) => (
        <form
          key={i}
          name={campaign.name}
          onChange={onCampaignFormChanged}
          onSubmit={(e) => e.preventDefault()}>
 
          <h3>{"Campaign: " + campaign.name}</h3>

          <label htmlFor="grossProfit">
            Gross profit

            <input
              type="number"
              id="grossProfit"
              name="grossProfit"
              defaultValue={campaign.kpi.grossProfit} />
          </label>

          <label htmlFor="netProfit">
            Net profit

            <input
              type="number"
              id="netProfit"
              name="netProfit"
              defaultValue={campaign.kpi.netProfit} />
          </label>

          <label htmlFor="marketingInvestment">
            Marketing investment

            <input
              type="number"
              id="marketingInvestment"
              name="marketingInvestment"
              defaultValue={campaign.kpi.marketingInvestment} />
          </label>
        </form>
      ))}

      <button type="button" onClick={clear}>Clear</button>
    </div>
  )
}