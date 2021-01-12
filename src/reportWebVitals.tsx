/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  getLCP,
  getFID,
  getCLS,
  getFCP,
  getTTFB,
  ReportHandler,
} from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler | undefined) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  }
}

export default reportWebVitals
