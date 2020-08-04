export default {
  calculateBusiness: (kpi) => ({
    roi: kpi.grossProfit - kpi.marketingInvestment,
    netRoi: kpi.netProfit - kpi.marketingInvestment,
    roiRate: kpi.grossProfit / kpi.marketingInvestment * 100,
    netRoiRate: kpi.netProfit / kpi.marketingInvestment * 100,
    CAC: kpi.marketingInvestment / kpi.newCustomersAcquired,
    LTVCAC: kpi.LTV / (kpi.marketingInvestment / kpi.newCustomersAcquired)
  }),

  calculateCampaign: (kpi) => ({
    roi: kpi.grossProfit - kpi.marketingInvestment,
    netRoi: kpi.netProfit - kpi.marketingInvestment,
    roiRate: kpi.grossProfit / kpi.marketingInvestment * 100,
    netRoiRate: kpi.netProfit / kpi.marketingInvestment * 100,
    CAC: kpi.marketingInvestment / kpi.newCustomersAcquired,
    LTVCAC: kpi.LTV / (kpi.marketingInvestment / kpi.newCustomersAcquired)
  }),
}