import React, { useState, useRef } from 'react';
import calculator from '../assets/calculator';

export default function BusinessROICalculator({setResult}) {
  const [businesses, setBusinesses] = useState([])
  const [addBusinessError, setAddBusinessError] = useState()
  const addNewForm = useRef()

  // getBusiness(name) finds the items to every business.
  const getBusiness = (name) => businesses.find((item) => item.name === name)

  // clear() clears and resets addNewForm, Result and Businesses.
  const clear = () => {
      addNewForm.current.reset()
      setResult([])
      setBusinesses([])
  }

  // calculateResult(items) runs calculateBusiness function based on the value of the items in business.
  const calculateResult = (items) => {


    const results = items.map((business) => ({
      name: business.name,
      result: calculator.calculateBusiness(business.kpi)
    }))
    setResult(results)  
  }

  // addBusiness(event) adds a business on event with name and pre-defined kpi's. 
  // It calls for setAddBusinessError if a business with the same name is added.
  // Each time you add a business you also reset the business input and calculate results.
  const addBusiness = (event) => {
    event.preventDefault()
    const name = event.target.businessName.value

    if (getBusiness(name)) {
      setAddBusinessError(`${name} is already added.`)
      return
    }

    const newBusiness = {
      name,
      kpi: {
        grossProfit: 0,
        netProfit: 0,
        marketingInvestment: 0,
        LTV: 0,
        newCustomersAcquired: 0,
      }
    }
    
    const newBusinesses = [...businesses, newBusiness]
    
    setBusinesses(newBusinesses)
    calculateResult(newBusinesses)
    addNewForm.current.reset()
  }

  // onBusinessFormChanged(event) takes the value of every business kpi 
  // and calculate results on form change (when you add numbers to the kpi:s).
  const onBusinessFormChanged = (event) => {
    const business = getBusiness(event.target.form.name)
    const field = event.target.name
    const value = Number(event.target.value)

    const newBusinesses = businesses.map((item) => {
      if (item.name === business.name) {
        return {
          name: business.name,
          kpi: { ...business.kpi, [field]: value }
        }
      }

      return item
    })

    setBusinesses(newBusinesses)
    calculateResult(newBusinesses)
  }

  return (
    <div>
      <form ref={addNewForm} onSubmit={addBusiness}>
        <label htmlFor="businessName">
          Business name:
          
          <br></br>
          <input
            type="text"
            id="businessName"
            name="businessName"
            className={addBusinessError ? 'has-error' : ''}
            required
            onChange={() => setAddBusinessError(null)} />
        </label>

        {addBusinessError && (
          <span className="input-error-message">{addBusinessError}</span>
        )}

        <button type="submit">Add business</button>
      </form>

      {businesses.map((business, i) => (
        <form 
          key={i} 
          name={business.name} 
          onChange={onBusinessFormChanged}
          onSubmit={(e) => e.preventDefault()}>

          <h3>{"Business: " + business.name}</h3>

          <label htmlFor="grossProfit">
            Gross profit:

            <input
              type="number"
              id="grossProfit"
              name="grossProfit"
              defaultValue={business.kpi.grossProfit} />
          </label>

          <label htmlFor="netProfit">
            Net profit:

            <input
              type="number"
              id="netProfit"
              name="netProfit"
              defaultValue={business.kpi.netProfit} />
          </label>

          <label htmlFor="marketingInvestment">
            Marketing investment:

            <input
              type="number"
              id="marketingInvestment"
              name="marketingInvestment"
              defaultValue={business.kpi.marketingInvestment} />
          </label>
        </form>
      ))}

      <button type="button" onClick={clear}>Clear Businesses</button>
    </div>
  )
}