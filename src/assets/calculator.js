export default {
  calculateBusiness: (kpi) => ({
    roi: kpi.grossProfit - kpi.marketingInvestment,
    netRoi: kpi.netProfit - kpi.marketingInvestment
  })
}