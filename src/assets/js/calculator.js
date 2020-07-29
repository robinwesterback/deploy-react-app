export default {
  calculateBusiness: (kpi) => ({
    roi: kpi.grossProfit - kpi.marketingInvestment,
    netRoi: kpi.netProfit - kpi.marketingInvestment
  }),

  calculateCampaign: (kpi) => ({
    roi: kpi.grossProfit - kpi.marketingInvestment,
    netRoi: kpi.netProfit - kpi.marketingInvestment
  }),
}