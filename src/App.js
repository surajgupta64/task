import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Dashboard & Leads
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/Layout/Sidebar'
import AllEnquiry from './components/Dashboard/AllEnquiry'
import FollowUps from './components/Dashboard/FollowUps'
import ReminderCall from './components/Dashboard/ReminderCall'
import PaymentCall from './components/Dashboard/PaymentCall'
import UpgradeCall from './components/Dashboard/UpgradeCall'
import RenewalCall from './components/Dashboard/RenewalCall'
import IrregularCall from './components/Dashboard/IrregularCall'
import InboundCall from './components/Dashboard/InboundCall'
import BdayAnnver from './components/Dashboard/BdayAnnver'
// Clients
import AllClients from './components/Clients/AllClients'
import ActiveClients from './components/Clients/ActiveClients'
import InActiveClients from './components/Clients/InActiveClients'
import Teacher from './components/Clients/Teacher'
import Personal from './components/Clients/Personal'
import PT from './components/Clients/PT'
import Deit from './components/Clients/Diet'
import ManageStaff from './components/HR/ManageStaff'
import ClientBiometric from './components/Clients/ClientBiometric'
import Email from './components/Marketing/Email'
import Sms from './components/Marketing/Sms'
import PushNotification from './components/Marketing/PushNotification'
import BiometricStaff from './components/HR/BiometricStaff'
import StaffBirthday from './components/HR/StaffBirthday'
import PTDashboard from './components/Training/PTDeshboard'
import ViewExercises from './components/Training/ViewExercises'
import WorkoutTemplates from './components/Training/WorkoutTemplates'
import MealPlan from './components/Training/MealPlan'
import Assessment from './components/Training/Assessment'
import Batch from './components/Clients/Batch'
import AddBatch from './components/Clients/AddBatch'
import Offers from './components/TReports/Offers'
import Discount from './components/TReports/Discount'
import LeadSource from './components/TReports/LeadSource'
import Referral from './components/TReports/Referral'
import SMSReport from './components/TReports/SMSReport'
import Loyalty from './components/TReports/Loyalty'
import AllInvoice from './components/finance/AllInvoice'
import PaidInvoice from './components/finance/PaidInvoice'
import ServiceReceipt from './components/finance/ServiceReceipt'
import CancelledInvoice from './components/finance/CancelledInvoice'
import WrittenOff from './components/finance/WrittenOff'
import Refund from './components/finance/Refund'
import Revenue from './components/finance/Revenue'
import PostpaidRevenue from './components/finance/PostpaidRevenue'
import Offer from './components/Marketing/Offer'
import Unqualified from './components/Marketing/Unqualified'
import EmployeePerformance from './components/Dashboard/EmplyoeePerformance'
import PTPerformance from './components/Dashboard/PTPerformance'
import CorporatePerformance from './components/Dashboard/CorporatePerformance'
import Trial from './components/Dashboard/Trial'
import CustomerReview from './components/Marketing/CustomerReview'
import Turf from './components/Inventory/Turf'
import Store from './components/Inventory/Store'
import StockReport from './components/Inventory/StockReport'
import ProductReorderAlertReport from './components/Inventory/ProductReorderAlertReport'
import POS from './components/Inventory/POS'
import CrossSellCall from './components/Dashboard/CrossSellCall'
import FeedbackCalls from './components/Dashboard/FeedbackCalls'
import CourtesyCall from './components/Dashboard/CourtesyCall'
import Upcoming from './components/Clients/Upcoming'
import GroupTraining from './components/Clients/GroupTraining'
import Referrers from './components/Clients/Referrers'
import IrregularMember from './components/Clients/IrregularMember'
import Gender from './components/Clients/Gender'
import RenewalsVSLeftClinet from './components/Clients/RenewalsVSLeftClinet'
import UpgradeReport from './components/Clients/UpgradeReport'
import CheckInOut from './components/Clients/CheckInOut'
import FreezeDateChange from './components/Clients/FreezeDateChange'
import ServiceTransferReport from './components/Clients/ServiceTransferReport'
import BatchReport from './components/Clients/BatchReport'
import BirthdayAnniversaryReport from './components/Clients/BirthdayAnniversaryReport'
import AttendanceRegister from './components/Clients/AttendanceRegister'
import AttendanceDetails from './components/Clients/AttendanceDetails'
import MembershipRetention from './components/Clients/MembershipRetention'
import CancellationReport from './components/Clients/CancellationReport'
import TransferReport from './components/Clients/TransferReport'
import SupportReport from './components/Clients/SupportReport'
import NewClient from './components/Clients/NewClient'
import RenewedClient from './components/Clients/RenewedClient'
import Membership from './components/Clients/Membership'
import EnquiryForm from './components/AddDetails/EnquiryForm'
import AllRight from './components/Master/AllRight'
import MembershipForm from './components/AddDetails/MembershipForm'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          } />
          <Route exact path='/all/enquiry' element={
            <Sidebar>
              <AllEnquiry />
            </Sidebar>
          } />
          <Route exact path='/followups' element={
            <Sidebar>
              <FollowUps />
            </Sidebar>
          } />
          <Route exact path='enquiryForm/form' element={
            <Sidebar>
              <EnquiryForm />
            </Sidebar>
          } />
          <Route exact path='membershipForm/form' element={
            <Sidebar>
              <MembershipForm />
            </Sidebar>
          } />



          <Route exact path='/trial' element={
            <Sidebar>
              <Trial />
            </Sidebar>
          } />
          <Route exact path='/followups/welcomecall' element={
            <Sidebar>
              <ReminderCall />
            </Sidebar>
          } />
          <Route exact path='/followups/paymentcall' element={
            <Sidebar>
              <PaymentCall />
            </Sidebar>
          } />
          <Route exact path='/followups/upgradecall' element={
            <Sidebar>
              <UpgradeCall />
            </Sidebar>
          } />
          <Route exact path='/followups/cross_sell' element={
            <Sidebar>
              <CrossSellCall />
            </Sidebar>
          } />
          <Route exact path='/followups/feedback' element={
            <Sidebar>
              <FeedbackCalls />
            </Sidebar>
          } />
          <Route exact path='/followups/renewalcall' element={
            <Sidebar>
              <RenewalCall />
            </Sidebar>
          } />
          <Route exact path='/followups/irregularcall' element={
            <Sidebar>
              <IrregularCall />
            </Sidebar>
          } />
          <Route exact path='/followups/inboundcall' element={
            <Sidebar>
              <InboundCall />
            </Sidebar>
          } />
          <Route exact path='/followups/courtesy' element={
            <Sidebar>
              <CourtesyCall />
            </Sidebar>
          } />
          <Route exact path='/followups/birthday&annversarycall' element={
            <Sidebar>
              <BdayAnnver />
            </Sidebar>
          } />
          {/* Clients Routes */}
          <Route exact path='/all/clients' element={
            <Sidebar>
              <AllClients />
            </Sidebar>
          } />
          <Route exact path='/active/clients' element={
            <Sidebar>
              <ActiveClients />
            </Sidebar>
          } />
          <Route exact path='/upcoming/clients' element={
            <Sidebar>
              <Upcoming />
            </Sidebar>
          } />
          <Route exact path='/inactive/clients' element={
            <Sidebar>
              <InActiveClients />
            </Sidebar>
          } />
          <Route exact path='/teacher/clients' element={
            <Sidebar>
              <Teacher />
            </Sidebar>
          } />
          <Route exact path='/personal/clients' element={
            <Sidebar>
              <Personal />
            </Sidebar>
          } />
          <Route exact path='/diet/clients' element={
            <Sidebar>
              <Deit />
            </Sidebar>
          } />

          <Route exact path='/group/clients' element={
            <Sidebar>
              <GroupTraining />
            </Sidebar>
          } />
          <Route exact path='/allBatch/clients' element={
            <Sidebar>
              <Batch />
            </Sidebar>
          } />
          <Route exact path='/referrers/clients' element={
            <Sidebar>
              <Referrers />
            </Sidebar>
          } />
          <Route exact path='/irregularMember/clients' element={
            <Sidebar>
              <IrregularMember />
            </Sidebar>
          } />
          <Route exact path='/gender/clients' element={
            <Sidebar>
              <Gender />
            </Sidebar>
          } />
          <Route exact path='/renewalsVSLeftClinet/clients' element={
            <Sidebar>
              <RenewalsVSLeftClinet />
            </Sidebar>
          } />
          <Route exact path='/upgradeReport/clients' element={
            <Sidebar>
              <UpgradeReport />
            </Sidebar>
          } />
          <Route exact path='/checkInOut/clients' element={
            <Sidebar>
              <CheckInOut />
            </Sidebar>
          } />
          <Route exact path='/freezeDateChange/clients' element={
            <Sidebar>
              <FreezeDateChange />
            </Sidebar>
          } />
          <Route exact path='/serviceTransferReport/clients' element={
            <Sidebar>
              <ServiceTransferReport />
            </Sidebar>
          } />
          <Route exact path='/batchReport/clients' element={
            <Sidebar>
              <BatchReport />
            </Sidebar>
          } />
          <Route exact path='/birthdayAnniversaryReport/clients' element={
            <Sidebar>
              <BirthdayAnniversaryReport />
            </Sidebar>
          } />
          <Route exact path='/attendanceRegister/clients' element={
            <Sidebar>
              <AttendanceRegister />
            </Sidebar>
          } />
          <Route exact path='/attendanceDetails/clients' element={
            <Sidebar>
              <AttendanceDetails />
            </Sidebar>
          } />
          <Route exact path='/membershipRetention/clients' element={
            <Sidebar>
              <MembershipRetention />
            </Sidebar>
          } />
          <Route exact path='/cancellationReport/clients' element={
            <Sidebar>
              <CancellationReport />
            </Sidebar>
          } />
          <Route exact path='/transferReport/clients' element={
            <Sidebar>
              <TransferReport />
            </Sidebar>
          } />
          <Route exact path='/supportReport/clients' element={
            <Sidebar>
              <SupportReport />
            </Sidebar>
          } />
          <Route exact path='/newClient/clients' element={
            <Sidebar>
              <NewClient />
            </Sidebar>
          } />
          <Route exact path='/renewedClient/clients' element={
            <Sidebar>
              <RenewedClient />
            </Sidebar>
          } />
          <Route exact path='/membership/clients' element={
            <Sidebar>
              <Membership />
            </Sidebar>
          } />

          <Route exact path='/addBatch/clients' element={
            <Sidebar>
              <AddBatch />
            </Sidebar>
          } />
          <Route exact path='/pt/clients' element={
            <Sidebar>
              <PT />
            </Sidebar>
          } />
          <Route exact path='/manageStaff/HR' element={
            <Sidebar>
              <ManageStaff />
            </Sidebar>
          } />
          <Route exact path='/attendanceRegister/HR' element={
            <Sidebar>
              <AttendanceRegister />
            </Sidebar>
          } />

          <Route exact path='/staffBiometric/HR' element={
            <Sidebar>
              <BiometricStaff />
            </Sidebar>
          } />
          <Route exact path='/staffBirthday/HR' element={
            <Sidebar>
              <StaffBirthday />
            </Sidebar>
          } />
          <Route exact path='/clientbiometric/clients' element={
            <Sidebar>
              <ClientBiometric />
            </Sidebar>
          } />
          <Route exact path='/email/marketing' element={
            <Sidebar>
              <Email />
            </Sidebar>
          } />
          <Route exact path='/sms/marketing' element={
            <Sidebar>
              <Sms />
            </Sidebar>
          } />
          <Route exact path='/pushnotification/marketing' element={
            <Sidebar>
              <PushNotification />
            </Sidebar>
          } />
          <Route exact path='/offer/marketing' element={
            <Sidebar>
              <Offer />
            </Sidebar>
          } />
          <Route exact path='/customer_Review/marketing' element={
            <Sidebar>
              <CustomerReview />
            </Sidebar>
          } />
          <Route exact path='/unqualified/marketing' element={
            <Sidebar>
              <Unqualified />
            </Sidebar>
          } />
          {/*inverntory */}
          <Route exact path="/turf/inverntory" element={
            <Sidebar>
              <Turf />
            </Sidebar>
          } />
          <Route exact path="/store/inverntory" element={
            <Sidebar>
              <Store />
            </Sidebar>
          } />
          <Route exact path="/pos/inverntory" element={
            <Sidebar>
              <POS />
            </Sidebar>
          } />
          <Route exact path="/stock_report/inverntory" element={
            <Sidebar>
              <StockReport />
            </Sidebar>
          } />
          <Route exact path="/product_reorder_alert_report/inverntory" element={
            <Sidebar>
              <ProductReorderAlertReport />
            </Sidebar>
          } />
          <Route exact path="/product_list/inverntory" element={
            <Sidebar>
              <ProductReorderAlertReport />
            </Sidebar>
          } />
          <Route exact path="/product_setting/inverntory" element={
            <Sidebar>
              <ProductReorderAlertReport />
            </Sidebar>
          } />
          <Route exact path='/ptDeshboard/training' element={
            <Sidebar>
              <PTDashboard />
            </Sidebar>
          } />

          <Route exact path='/viewExercises/training' element={
            <Sidebar>
              <ViewExercises />
            </Sidebar>
          } />
          <Route exact path='/workoutTemplates/training' element={
            <Sidebar>
              <WorkoutTemplates />
            </Sidebar>
          } />
          <Route exact path='/mealPlan/training' element={
            <Sidebar>
              <MealPlan />
            </Sidebar>
          } />
          <Route exact path='/assessment/training' element={
            <Sidebar>
              <Assessment />
            </Sidebar>
          } />
          <Route exact path='/offers/TReports' element={
            <Sidebar>
              <Offers />
            </Sidebar>
          } />
          <Route exact path='/discount/TReports' element={
            <Sidebar>
              <Discount />
            </Sidebar>
          } />
          <Route exact path='/leadSource/TReports' element={
            <Sidebar>
              <LeadSource />
            </Sidebar>
          } />
          <Route exact path='/referral/TReports' element={
            <Sidebar>
              <Referral />
            </Sidebar>
          } />
          <Route exact path='/smsReport/TReports' element={
            <Sidebar>
              <SMSReport />
            </Sidebar>
          } />
          <Route exact path='/loyalty/TReports' element={
            <Sidebar>
              <Loyalty />
            </Sidebar>
          } />

          <Route exact path='/allInvoice/finance' element={
            <Sidebar>
              <AllInvoice />
            </Sidebar>
          } />
          <Route exact path='/paidInvoice/finance' element={
            <Sidebar>
              <PaidInvoice />
            </Sidebar>
          } />
          <Route exact path='/cancelledInvoice/finance' element={
            <Sidebar>
              <CancelledInvoice />
            </Sidebar>
          } />
          <Route exact path='/serviceReceipt/finance' element={
            <Sidebar>
              <ServiceReceipt />
            </Sidebar>
          } />
          <Route exact path='/writtenOff/finance' element={
            <Sidebar>
              <WrittenOff />
            </Sidebar>
          } />
          <Route exact path='/refund/finance' element={
            <Sidebar>
              <Refund />
            </Sidebar>
          } />
          <Route exact path='/revenue/finance' element={
            <Sidebar>
              <Revenue />
            </Sidebar>
          } />
          <Route exact path='/postpaidRevenue/finance' element={
            <Sidebar>
              <PostpaidRevenue />
            </Sidebar>
          } />
          <Route exact path='/empDashboard/ptPerformance' element={
            <Sidebar>
              <PTPerformance />
            </Sidebar>
          } />
          <Route exact path='/empDashboard/empPerfomance' element={
            <Sidebar>
              <EmployeePerformance />
            </Sidebar>
          } />
          <Route exact path='/empDashboard/corPerformance' element={
            <Sidebar>
              <CorporatePerformance />
            </Sidebar>
          } />
          <Route exact path='/allright/master' element={
            <Sidebar>
              <AllRight />
            </Sidebar>
          } />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
