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
          {/* Leads Routes */}
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
          <Route exact path='/remindercall/welcomecall' element={
            <Sidebar>
              <ReminderCall />
            </Sidebar>
          } />
          <Route exact path='/remindercall/paymentcall' element={
            <Sidebar>
              <PaymentCall />
            </Sidebar>
          } />
          <Route exact path='/remindercall/upgradecall' element={
            <Sidebar>
              <UpgradeCall />
            </Sidebar>
          } />
          <Route exact path='/remindercall/renewalcall' element={
            <Sidebar>
              <RenewalCall />
            </Sidebar>
          } />
          <Route exact path='/remindercall/irregularcall' element={
            <Sidebar>
              <IrregularCall />
            </Sidebar>
          } />
          <Route exact path='/remindercall/inboundcall' element={
            <Sidebar>
              <InboundCall />
            </Sidebar>
          } />
          <Route exact path='/remindercall/birthday&annversarycall' element={
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
        </Routes>
      </BrowserRouter>
    </>
  )
}
 
export default App;
