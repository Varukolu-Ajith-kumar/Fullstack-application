
// import { useState } from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { Checkbox } from '@/components/ui/checkbox'
// import { Badge } from '@/components/ui/badge'
// import { Check, User, Mail, Settings, FileCheck } from 'lucide-react'

// const initialData = {
//   step1: { firstName: '', lastName: '', dateOfBirth: '', gender: '' },
//   step2: { email: '', phone: '', address: '', city: '' },
//   step3: { notifications: false, newsletter: false, theme: '', language: '' },
//   step4: { terms: false, privacy: false }
// }

// const steps = [
//   { id: 1, title: 'Personal Info', description: 'Basic personal information', icon: User },
//   { id: 2, title: 'Contact Details', description: 'Contact information', icon: Mail },
//   { id: 3, title: 'Preferences', description: 'Account preferences', icon: Settings },
//   { id: 4, title: 'Review', description: 'Review and confirm', icon: FileCheck }
// ]

// export default function MultiStepWizard() {
//   const [currentStep, setCurrentStep] = useState(1)
//   const [completedSteps, setCompletedSteps] = useState([])
//   const [formData, setFormData] = useState(initialData)

//   const updateFormData = (step, data) => {
//     setFormData(prev => ({
//       ...prev,
//       [step]: { ...prev[step], ...data }
//     }))
//   }

//   const isStepValid = (stepNumber) => {
//     switch (stepNumber) {
//       case 1:
//         return !!(formData.step1.firstName && formData.step1.lastName && formData.step1.dateOfBirth && formData.step1.gender)
//       case 2:
//         return !!(formData.step2.email && formData.step2.phone && formData.step2.address && formData.step2.city)
//       case 3:
//         return !!(formData.step3.theme && formData.step3.language)
//       case 4:
//         return !!(formData.step4.terms && formData.step4.privacy)
//       default:
//         return false
//     }
//   }

//   const handleSaveStep = () => {
//     if (isStepValid(currentStep)) {
//       if (!completedSteps.includes(currentStep)) {
//         setCompletedSteps(prev => [...prev, currentStep])
//       }
//       if (currentStep < steps.length) {
//         setCurrentStep(currentStep + 1)
//       }
//     }
//   }

//   const handleStepClick = (stepNumber) => {
//     setCurrentStep(stepNumber)
//   }

//   const getStepStatus = (stepNumber) => {
//     if (completedSteps.includes(stepNumber)) return 'completed'
//     if (stepNumber === currentStep) return 'current'
//     return 'pending'
//   }

//   const getStepColor = (status) => {
//     switch (status) {
//       case 'completed': return 'bg-green-500 text-white border-green-500'
//       case 'current': return 'bg-yellow-500 text-white border-yellow-500'
//       default: return 'bg-gray-200 text-gray-600 border-gray-300'
//     }
//   }

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <User className="h-5 w-5" />
//                 Personal Information
//               </CardTitle>
//               <CardDescription>Please provide your basic personal details</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="firstName">First Name</Label>
//                   <Input
//                     id="firstName"
//                     value={formData.step1.firstName}
//                     onChange={(e) => updateFormData('step1', { firstName: e.target.value })}
//                     placeholder="Enter your first name"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="lastName">Last Name</Label>
//                   <Input
//                     id="lastName"
//                     value={formData.step1.lastName}
//                     onChange={(e) => updateFormData('step1', { lastName: e.target.value })}
//                     placeholder="Enter your last name"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="dateOfBirth">Date of Birth</Label>
//                 <Input
//                   id="dateOfBirth"
//                   type="date"
//                   value={formData.step1.dateOfBirth}
//                   onChange={(e) => updateFormData('step1', { dateOfBirth: e.target.value })}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="gender">Gender</Label>
//                 <Select value={formData.step1.gender} onValueChange={(value) => updateFormData('step1', { gender: value })}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select your gender" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                     <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </CardContent>
//           </Card>
//         )

//       case 2:
//         return (
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Mail className="h-5 w-5" />
//                 Contact Details
//               </CardTitle>
//               <CardDescription>How can we reach you?</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email Address</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={formData.step2.email}
//                   onChange={(e) => updateFormData('step2', { email: e.target.value })}
//                   placeholder="Enter your email address"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone Number</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   value={formData.step2.phone}
//                   onChange={(e) => updateFormData('step2', { phone: e.target.value })}
//                   placeholder="Enter your phone number"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="address">Address</Label>
//                 <Textarea
//                   id="address"
//                   value={formData.step2.address}
//                   onChange={(e) => updateFormData('step2', { address: e.target.value })}
//                   placeholder="Enter your full address"
//                   rows={3}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="city">City</Label>
//                 <Input
//                   id="city"
//                   value={formData.step2.city}
//                   onChange={(e) => updateFormData('step2', { city: e.target.value })}
//                   placeholder="Enter your city"
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         )

//       case 3:
//         return (
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Settings className="h-5 w-5" />
//                 Preferences
//               </CardTitle>
//               <CardDescription>Customize your account settings</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="notifications"
//                     checked={formData.step3.notifications}
//                     onCheckedChange={(checked) => updateFormData('step3', { notifications: checked })}
//                   />
//                   <Label htmlFor="notifications">Enable email notifications</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="newsletter"
//                     checked={formData.step3.newsletter}
//                     onCheckedChange={(checked) => updateFormData('step3', { newsletter: checked })}
//                   />
//                   <Label htmlFor="newsletter">Subscribe to newsletter</Label>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="theme">Theme Preference</Label>
//                 <Select value={formData.step3.theme} onValueChange={(value) => updateFormData('step3', { theme: value })}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select theme" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="light">Light</SelectItem>
//                     <SelectItem value="dark">Dark</SelectItem>
//                     <SelectItem value="system">System</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="language">Language</Label>
//                 <Select value={formData.step3.language} onValueChange={(value) => updateFormData('step3', { language: value })}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select language" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="en">English</SelectItem>
//                     <SelectItem value="es">Spanish</SelectItem>
//                     <SelectItem value="fr">French</SelectItem>
//                     <SelectItem value="de">German</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </CardContent>
//           </Card>
//         )

//       case 4:
//         return (
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <FileCheck className="h-5 w-5" />
//                 Review & Confirm
//               </CardTitle>
//               <CardDescription>Please review your information and accept the terms</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-4">
//                 <div className="p-4 bg-gray-50 rounded-lg">
//                   <h4 className="font-semibold mb-2">Personal Information</h4>
//                   <p className="text-sm text-gray-600">
//                     {formData.step1.firstName} {formData.step1.lastName} • {formData.step1.gender} • {formData.step1.dateOfBirth}
//                   </p>
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-lg">
//                   <h4 className="font-semibold mb-2">Contact Details</h4>
//                   <p className="text-sm text-gray-600">
//                     {formData.step2.email} • {formData.step2.phone}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {formData.step2.address}, {formData.step2.city}
//                   </p>
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-lg">
//                   <h4 className="font-semibold mb-2">Preferences</h4>
//                   <p className="text-sm text-gray-600">
//                     Theme: {formData.step3.theme} • Language: {formData.step3.language}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Notifications: {formData.step3.notifications ? 'Enabled' : 'Disabled'} • 
//                     Newsletter: {formData.step3.newsletter ? 'Subscribed' : 'Not subscribed'}
//                   </p>
//                 </div>
//               </div>
//               <div className="space-y-4 pt-4 border-t">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="terms"
//                     checked={formData.step4.terms}
//                     onCheckedChange={(checked) => updateFormData('step4', { terms: checked })}
//                   />
//                   <Label htmlFor="terms" className="text-sm">
//                     I agree to the <span className="text-blue-600 underline cursor-pointer">Terms of Service</span>
//                   </Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="privacy"
//                     checked={formData.step4.privacy}
//                     onCheckedChange={(checked) => updateFormData('step4', { privacy: checked })}
//                   />
//                   <Label htmlFor="privacy" className="text-sm">
//                     I agree to the <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>
//                   </Label>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )

//       default:
//         return null
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="mb-8">
//         <div className="flex items-center justify-between">
//           {steps.map((step, index) => {
//             const status = getStepStatus(step.id)
//             const Icon = step.icon
//             return (
//               <div key={step.id} className="flex items-center">
//                 <div
//                   className={`flex items-center cursor-pointer transition-all duration-200 ${index < steps.length - 1 ? 'flex-1' : ''}`}
//                   onClick={() => handleStepClick(step.id)}
//                 >
//                   <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-200 ${getStepColor(status)} hover:scale-105`}>
//                     {status === 'completed' ? (
//                       <Check className="h-6 w-6" />
//                     ) : (
//                       <Icon className="h-6 w-6" />
//                     )}
//                   </div>
//                   <div className="ml-3">
//                     <div className="flex items-center gap-2">
//                       <p className={`text-sm font-medium ${
//                         status === 'current' ? 'text-yellow-600' :
//                         status === 'completed' ? 'text-green-600' : 'text-gray-500'
//                       }`}>
//                         {step.title}
//                       </p>
//                       {status === 'completed' && (
//                         <Badge variant="secondary" className="bg-green-100 text-green-800">
//                           Completed
//                         </Badge>
//                       )}
//                       {status === 'current' && (
//                         <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
//                           Current
//                         </Badge>
//                       )}
//                     </div>
//                     <p className="text-xs text-gray-500">{step.description}</p>
//                   </div>
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div className={`flex-1 h-0.5 mx-4 ${completedSteps.includes(step.id) ? 'bg-green-500' : 'bg-gray-300'}`} />
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <div className="mb-8">{renderStepContent()}</div>

//       <div className="flex justify-between">
//         <Button
//           variant="outline"
//           onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
//           disabled={currentStep === 1}
//         >
//           Previous
//         </Button>
//         <div className="flex gap-2">
//           {currentStep < steps.length ? (
//             <Button
//               onClick={handleSaveStep}
//               disabled={!isStepValid(currentStep)}
//               className="bg-blue-600 hover:bg-blue-700"
//             >
//               Save & Continue
//             </Button>
//           ) : (
//             <Button
//               onClick={() => {
//                 if (isStepValid(currentStep)) {
//                   setCompletedSteps(prev => [...prev, currentStep])
//                   alert('Account setup completed successfully!')
//                 }
//               }}
//               disabled={!isStepValid(currentStep)}
//               className="bg-green-600 hover:bg-green-700"
//             >
//               Complete Setup
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import Crud from "./Crud";


function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        React + Node.js + MongoDB CRUD
      </h1>
      <Crud />
    </div>
  );
}

export default App;
