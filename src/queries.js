import { useQuery } from 'react-query'
import axios from 'axios'

const headersObj = {
    "mode": "cors",
    "X-AUTH-APIKEY": "QsA5LABFfDo3IEQIOJ80QiLe7T6NVvES",
    "X-AUTH-USER-NAME": "eqorgadmin",
    "X-CORRELATION-ID": "1111111",
    "X-SESSION-ID": "1111111",
    "X-AUTH-ORG-ID": "10021", // newly added field
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS"
}

// test data
export const useTestQuery = () => useQuery('test', () => axios.get(process.env.GATSBY_TOTAL_USERS_API_URL, {'headers': headersObj}))

// metrics card list
const getUsers = () => axios.get(process.env.GATSBY_TOTAL_USERS_API_URL)
const getComms = () => axios.get(process.env.GATSBY_TOTAL_TWO_WAY_COMMS_API_URL)
const getReports = () => axios.get(process.env.GATSBY_TOTAL_REPORTS_API_URL)
const getNotifications = () => axios.get(process.env.GATSBY_TOTAL_NOTIFICATIONS_API_URL)

export const useUsersQuery = () => useQuery('users', getUsers)
export const useCommsQuery = () => useQuery('comms', getComms)
export const useReportsQuery = () => useQuery('reports', getReports)
export const useNotificationsQuery = () => useQuery('notifications', getNotifications)


// order cards
const getTotalOrders = () => axios.get(process.env.GATSBY_TOTAL_ORDERS_API_URL)
const getCancelledOrders = () => axios.get(process.env.GATSBY_CANCELLED_ORDERS_API_URL)

export const useTotalOrdersQuery = () => useQuery('totalOrders', getTotalOrders)
export const useCancelledOrdersQuery = () => useQuery('cancelledOrders', getCancelledOrders)


// combo chart
const getInitialData = () => axios.get(process.env.GATSBY_SMART_HANDS_ORDERS_API_URL)
const getSmartHands = () => axios.get(process.env.GATSBY_SMART_HANDS_ORDERS_API_URL)
const getCrossConnect = () => axios.get(process.env.CROSS_CONNECT_ORDERS_API_URL)
const getFabricPort = () => axios.get(process.env.GATSBY_FABRIC_PORT_ORDERS_API_URL)
const getEquinixConnect = () => axios.get(process.env.GATSBY_EQUINIX_CONNECT_API_URL)
const getInternetExchange = () => axios.get(process.env.GATSBY_INTERNET_EXCHANGE_API_URL)
const getMetroConnect = () => axios.get(process.env.GATSBY_METRO_CONNECT_API_URL)

export const useInitialDataQuery = () => useQuery('initialData', getInitialData)
export const useSmartHandsQuery = () => useQuery('smartHands', getSmartHands)
export const useCrossConnectQuery = () => useQuery('crossConnect', getCrossConnect)
export const useFabricPortQuery = () => useQuery('fabricPort', getFabricPort)
export const useEquinixConnectQuery = () => useQuery('equinixConnect', getEquinixConnect)
export const useInternetExchangeQuery = () => useQuery('internetExchange', getInternetExchange)
export const useMetroConnectQuery = () => useQuery('metroConnect', getMetroConnect)