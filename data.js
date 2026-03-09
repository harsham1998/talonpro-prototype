// Mock Data for TalonPro Portal

// Guests
const guests = [
    {
        id: 1,
        firstName: 'SanskarTesting',
        lastName: 'PenTest0307',
        phone: '985758555444993',
        email: 'sanskar@test.com',
        caseId: '447451',
        unitId: '373275',
        status: 'Active',
        checkIn: '2025-07-01',
        checkOut: '2025-07-21',
        coordinator: 'John Smith',
        adjuster: 'ABC Insurance',
        room: '101',
        nights: 20,
        priority: 'Normal'
    },
    {
        id: 2,
        firstName: 'Maria',
        lastName: 'Garcia',
        phone: '555-0102',
        email: 'maria.garcia@email.com',
        caseId: '447452',
        unitId: '373276',
        status: 'Active',
        checkIn: '2025-07-05',
        checkOut: '2025-07-25',
        coordinator: 'Sarah Johnson',
        adjuster: 'XYZ Insurance',
        room: '205',
        nights: 20,
        priority: 'High'
    },
    {
        id: 3,
        firstName: 'James',
        lastName: 'Wilson',
        phone: '555-0103',
        email: 'j.wilson@email.com',
        caseId: '447453',
        unitId: '373277',
        status: 'Pending',
        checkIn: '2025-07-10',
        checkOut: '2025-08-01',
        coordinator: 'Mike Davis',
        adjuster: 'DEF Insurance',
        room: '302',
        nights: 22,
        priority: 'Normal'
    },
    {
        id: 4,
        firstName: 'Lisa',
        lastName: 'Anderson',
        phone: '555-0104',
        email: 'l.anderson@email.com',
        caseId: '447454',
        unitId: '373278',
        status: 'Active',
        checkIn: '2025-06-28',
        checkOut: '2025-07-18',
        coordinator: 'John Smith',
        adjuster: 'GHI Insurance',
        room: '104',
        nights: 20,
        priority: 'Urgent'
    }
];

// Messages
const messages = [
    {
        id: 1,
        guestId: 1,
        sender: 'guest',
        content: 'Hi, the heater in my unit is not working properly.',
        timestamp: '2025-07-12 10:30 AM',
        channel: 'SMS',
        category: 'Maintenance',
        sentiment: 'negative'
    },
    {
        id: 2,
        guestId: 1,
        sender: 'coordinator',
        content: 'Thank you for letting us know. I\'ve contacted maintenance and they will visit your unit today between 2-4 PM.',
        timestamp: '2025-07-12 10:45 AM',
        channel: 'SMS',
        category: 'Maintenance',
        sentiment: 'positive'
    },
    {
        id: 3,
        guestId: 1,
        sender: 'guest',
        content: 'Great, thank you! Also, can I get a copy of my lease agreement?',
        timestamp: '2025-07-12 11:00 AM',
        channel: 'SMS',
        category: 'Document Request',
        sentiment: 'positive'
    },
    {
        id: 4,
        guestId: 1,
        sender: 'coordinator',
        content: 'Of course! I\'ll email you a copy within the next hour.',
        timestamp: '2025-07-12 11:10 AM',
        channel: 'SMS',
        category: 'Document Request',
        sentiment: 'positive'
    },
    {
        id: 5,
        guestId: 1,
        sender: 'guest',
        content: 'Due to the repair delays, I might need to extend my stay by 3 days.',
        timestamp: '2025-07-13 09:15 AM',
        channel: 'Email',
        category: 'Extension',
        sentiment: 'neutral'
    }
];

// Tasks
const tasks = [
    {
        id: 1,
        title: 'Schedule maintenance for heater repair',
        caseId: '447451',
        guestName: 'SanskarTesting PenTest0307',
        assignedTo: 'John Smith',
        dueDate: '2025-07-12',
        status: 'Completed',
        priority: 'High'
    },
    {
        id: 2,
        title: 'Send lease agreement copy',
        caseId: '447451',
        guestName: 'SanskarTesting PenTest0307',
        assignedTo: 'John Smith',
        dueDate: '2025-07-12',
        status: 'Completed',
        priority: 'Medium'
    },
    {
        id: 3,
        title: 'Process stay extension request',
        caseId: '447451',
        guestName: 'SanskarTesting PenTest0307',
        assignedTo: 'John Smith',
        dueDate: '2025-07-14',
        status: 'In Progress',
        priority: 'Medium'
    },
    {
        id: 4,
        title: 'Verify insurance approval',
        caseId: '447452',
        guestName: 'Maria Garcia',
        assignedTo: 'Sarah Johnson',
        dueDate: '2025-07-15',
        status: 'Pending',
        priority: 'High'
    },
    {
        id: 5,
        title: 'Welcome call for new guest',
        caseId: '447453',
        guestName: 'James Wilson',
        assignedTo: 'Mike Davis',
        dueDate: '2025-07-10',
        status: 'Pending',
        priority: 'Low'
    },
    {
        id: 6,
        title: 'Follow up on missing documents',
        caseId: '447454',
        guestName: 'Lisa Anderson',
        assignedTo: 'John Smith',
        dueDate: '2025-07-08',
        status: 'Overdue',
        priority: 'Urgent'
    }
];

// Documents
const documents = [
    {
        id: 1,
        name: 'Insurance_Approval_447451.pdf',
        caseId: '447451',
        guestName: 'SanskarTesting PenTest0307',
        category: 'Insurance',
        uploadedBy: 'John Smith',
        uploadDate: '2025-07-01',
        size: '1.2 MB'
    },
    {
        id: 2,
        name: 'Lease_Agreement_447451.pdf',
        caseId: '447451',
        guestName: 'SanskarTesting PenTest0307',
        category: 'Lease Agreement',
        uploadedBy: 'System',
        uploadDate: '2025-07-01',
        size: '850 KB'
    },
    {
        id: 3,
        name: 'ID_Copy_447451.jpg',
        caseId: '447451',
        guestName: 'SanskarTesting PenTest0307',
        category: 'ID Document',
        uploadedBy: 'Guest',
        uploadDate: '2025-07-02',
        size: '2.4 MB'
    },
    {
        id: 4,
        name: 'Insurance_Card_447452.pdf',
        caseId: '447452',
        guestName: 'Maria Garcia',
        category: 'Insurance',
        uploadedBy: 'Sarah Johnson',
        uploadDate: '2025-07-05',
        size: '950 KB'
    }
];

// Receipts
const receipts = [
    {
        id: 1,
        guestId: 1,
        vendor: 'Walmart',
        amount: 156.78,
        date: '2025-07-08',
        status: 'Approved',
        category: 'Groceries'
    },
    {
        id: 2,
        guestId: 1,
        vendor: 'CVS Pharmacy',
        amount: 45.32,
        date: '2025-07-10',
        status: 'Pending',
        category: 'Medical'
    },
    {
        id: 3,
        guestId: 1,
        vendor: 'Target',
        amount: 89.99,
        date: '2025-07-11',
        status: 'Under Review',
        category: 'Household'
    }
];

// Templates
const templates = [
    {
        id: 1,
        name: 'Welcome Message',
        category: 'Welcome Message',
        subject: 'Welcome to Your Temporary Housing',
        body: `Dear {guest_name},

Welcome to your temporary accommodation! We're pleased to have you stay with us.

Your check-in details:
• Unit Number: {unit_number}
• Check-in Date: {check_in_date}
• Check-out Date: {check_out_date}

If you have any questions or need assistance, please don't hesitate to contact your coordinator {coordinator_name} at {coordinator_phone}.

We hope you have a comfortable stay!

Best regards,
TalonPro Team`,
        lastUpdated: '2025-06-15'
    },
    {
        id: 2,
        name: 'Check-in Instructions',
        category: 'Check-in Instructions',
        subject: 'Your Check-in Details',
        body: `Hello {guest_name},

Your check-in is scheduled for {check_in_date}. Here are the details you'll need:

Unit Number: {unit_number}
Check-in Time: 3:00 PM
Parking: Available on-site

Please ensure you have your ID and any required documentation ready.

Looking forward to welcoming you!

{coordinator_name}`,
        lastUpdated: '2025-06-20'
    },
    {
        id: 3,
        name: 'Check-out Reminder',
        category: 'Check-out Reminder',
        subject: 'Upcoming Check-out Reminder',
        body: `Dear {guest_name},

This is a friendly reminder that your check-out date is approaching on {check_out_date}.

Please ensure:
✓ All personal belongings are packed
✓ Keys are returned to the office
✓ Unit is left in good condition

Thank you for staying with us. Safe travels!

{coordinator_name}
TalonPro Team`,
        lastUpdated: '2025-06-18'
    },
    {
        id: 4,
        name: 'Document Request',
        category: 'Document Request',
        subject: 'Required Documents for Your Case',
        body: `Hi {guest_name},

To complete your case setup, we need the following documents:

• Copy of Insurance Authorization
• Photo ID
• Proof of Loss (if applicable)

You can upload these documents through the portal or email them directly to me.

Thanks for your cooperation!

{coordinator_name}`,
        lastUpdated: '2025-06-22'
    }
];

// Automation Rules
const automationRules = [
    {
        id: 1,
        name: 'Welcome message on check-in',
        trigger: 'Check-in date reached',
        action: 'Send Welcome Message template',
        status: 'Active',
        lastRun: '2025-07-01 09:00 AM'
    },
    {
        id: 2,
        name: 'Check-out reminder 48 hours before',
        trigger: '2 days before check-out',
        action: 'Send Check-out Reminder template',
        status: 'Active',
        lastRun: '2025-07-05 08:00 AM'
    },
    {
        id: 3,
        name: 'Auto-assign to available coordinator',
        trigger: 'New case created',
        action: 'Assign to coordinator with lowest case count',
        status: 'Active',
        lastRun: '2025-07-06 11:30 AM'
    },
    {
        id: 4,
        name: 'Escalate urgent maintenance requests',
        trigger: 'Message contains "emergency" or "urgent"',
        action: 'Create high-priority task and notify supervisor',
        status: 'Active',
        lastRun: '2025-07-07 02:15 PM'
    }
];

// Recent Activity
const recentActivity = [
    {
        type: 'message',
        description: 'New message from SanskarTesting PenTest0307',
        timestamp: '5 minutes ago',
        icon: 'fa-comment',
        color: 'blue'
    },
    {
        type: 'task',
        description: 'Task "Schedule maintenance" completed',
        timestamp: '1 hour ago',
        icon: 'fa-check-circle',
        color: 'green'
    },
    {
        type: 'document',
        description: 'Document uploaded by Maria Garcia',
        timestamp: '2 hours ago',
        icon: 'fa-file-upload',
        color: 'purple'
    },
    {
        type: 'case',
        description: 'New case created for James Wilson',
        timestamp: '3 hours ago',
        icon: 'fa-folder-plus',
        color: 'yellow'
    },
    {
        type: 'receipt',
        description: 'Receipt approved for Lisa Anderson',
        timestamp: '4 hours ago',
        icon: 'fa-receipt',
        color: 'green'
    }
];

// AI Case Summaries (Mock AI-generated content)
const aiCaseSummaries = [
    {
        guestId: 1,
        summary: `• Guest reported heater issue on Oct 12
• Technician scheduled for Oct 13
• Stay extended 3 days due to repair delay
• Lease agreement provided to guest
• Overall sentiment: Satisfied with coordinator response`,
        version: 1
    },
    {
        guestId: 1,
        summary: `• Maintenance request for heating system received
• Service completed same day
• Additional extension approved for 3 days
• Documentation requests fulfilled promptly
• Guest communication: Professional and cooperative`,
        version: 2
    }
];

// AI Suggested Replies
const aiSuggestedReplies = [
    "We are coordinating with the vendor and will update you shortly.",
    "The stay extension has been approved. I'll send you the updated details.",
    "Your receipt has been received and is under review by our team.",
    "Thank you for your patience. The maintenance team will arrive between 2-4 PM today.",
    "I've sent the requested documents to your email. Please let me know if you need anything else.",
    "We're working on resolving this issue as quickly as possible and will keep you informed."
];

// AI Follow-up Recommendations
const aiFollowUpRecommendations = [
    {
        icon: 'fa-tools',
        text: 'Follow up with vendor on heater repair status',
        priority: 'high'
    },
    {
        icon: 'fa-paper-plane',
        text: 'Send status update to insurance adjuster',
        priority: 'medium'
    },
    {
        icon: 'fa-receipt',
        text: 'Check receipt approval status from finance team',
        priority: 'medium'
    },
    {
        icon: 'fa-calendar-check',
        text: 'Confirm extension dates with property manager',
        priority: 'low'
    }
];

// Unassigned Guests (no coordinator assigned)
const unassignedGuests = [
    {
        id: 101,
        firstName: 'Robert',
        lastName: 'Chen',
        phone: '555-0201',
        email: 'r.chen@email.com',
        caseId: '447501',
        checkIn: '2025-07-20',
        status: 'Pending',
        urgency: 'High',
        daysUntilCheckIn: 2
    },
    {
        id: 102,
        firstName: 'Emily',
        lastName: 'Rodriguez',
        phone: '555-0202',
        email: 'emily.r@email.com',
        caseId: '447502',
        checkIn: '2025-07-18',
        status: 'Active',
        urgency: 'Urgent',
        daysUntilCheckIn: 0
    },
    {
        id: 103,
        firstName: 'Michael',
        lastName: 'Thompson',
        phone: '555-0203',
        email: 'm.thompson@email.com',
        caseId: '447503',
        checkIn: '2025-07-25',
        status: 'Pending',
        urgency: 'Medium',
        daysUntilCheckIn: 7
    }
];

// Unresponded Messages
const unrespondedMessages = [
    {
        id: 201,
        guestId: 2,
        guestName: 'Maria Garcia',
        caseId: '447452',
        message: 'Can someone help me with the AC? It\'s not cooling properly.',
        timestamp: '2 hours ago',
        timestampFull: '2025-07-18 12:30 PM',
        priority: 'High',
        category: 'Maintenance'
    },
    {
        id: 202,
        guestId: 4,
        guestName: 'Lisa Anderson',
        caseId: '447454',
        message: 'I need a copy of my insurance authorization form.',
        timestamp: '4 hours ago',
        timestampFull: '2025-07-18 10:15 AM',
        priority: 'Medium',
        category: 'Document Request'
    },
    {
        id: 203,
        guestId: 3,
        guestName: 'James Wilson',
        caseId: '447453',
        message: 'When will my unit be ready for check-in?',
        timestamp: '6 hours ago',
        timestampFull: '2025-07-18 08:45 AM',
        priority: 'High',
        category: 'Check-in'
    },
    {
        id: 204,
        guestId: 101,
        guestName: 'Robert Chen',
        caseId: '447501',
        message: 'Is parking included with my unit?',
        timestamp: '1 day ago',
        timestampFull: '2025-07-17 03:20 PM',
        priority: 'Low',
        category: 'General Inquiry'
    },
    {
        id: 205,
        guestId: 102,
        guestName: 'Emily Rodriguez',
        caseId: '447502',
        message: 'The toilet in my unit is leaking. Please send maintenance ASAP!',
        timestamp: '3 hours ago',
        timestampFull: '2025-07-18 11:00 AM',
        priority: 'Urgent',
        category: 'Maintenance'
    }
];

// Enhanced Guests (for new guest list view)
const enhancedGuests = [
    {
        id: 1,
        firstName: 'Sarah',
        lastName: 'Alves',
        email: 'Sarahalves928@gmail.com',
        phone: '+14252081527',
        status: 'Arrival',
        arrivalDate: '03/17/2025',
        departingDate: '03/08/2026',
        guestId: '058940084-442569',
        room: '0',
        division: 'Division - Insurance',
        hotelCoordinator: 'Jake Shivetts',
        housingCoordinator: 'Toni Westfall',
        customerCare: 'Jennifer Cobb',
        stayType: 'Hotel',
        monthlyRent: '0.00',
        thdStatus: 'Move Out',
        hasMultipleStays: true,
        relatedStays: 3
    },
    {
        id: 2,
        firstName: 'Maria',
        lastName: 'Garcia',
        email: 'maria.garcia@email.com',
        phone: '+1-555-0102',
        status: 'Active',
        arrivalDate: '07/05/2025',
        departingDate: '07/25/2025',
        guestId: '447452-276',
        room: '205',
        division: 'Division - Property',
        hotelCoordinator: null,
        housingCoordinator: 'Sarah Johnson',
        customerCare: 'Jennifer Cobb',
        stayType: 'Apartment',
        monthlyRent: '2500.00',
        thdStatus: 'Move IN',
        hasMultipleStays: false,
        relatedStays: 1
    },
    {
        id: 3,
        firstName: 'James',
        lastName: 'Wilson',
        email: 'j.wilson@email.com',
        phone: '+1-555-0103',
        status: 'Checked Out',
        arrivalDate: '06/10/2025',
        departingDate: '07/01/2025',
        guestId: '447453-277',
        room: '302',
        division: 'Division - Insurance',
        hotelCoordinator: null,
        housingCoordinator: 'Mike Davis',
        customerCare: 'Alex Martinez',
        stayType: 'Apartment',
        monthlyRent: '3200.00',
        thdStatus: 'Checked Out',
        hasMultipleStays: true,
        relatedStays: 2
    },
    {
        id: 4,
        firstName: 'Lisa',
        lastName: 'Anderson',
        email: 'l.anderson@email.com',
        phone: '+1-555-0104',
        status: 'Active',
        arrivalDate: '06/28/2025',
        departingDate: '07/18/2025',
        guestId: '447454-278',
        room: '104',
        division: 'Division - Insurance',
        hotelCoordinator: null,
        housingCoordinator: 'John Smith',
        customerCare: 'Jennifer Cobb',
        stayType: 'Apartment',
        monthlyRent: '2800.00',
        thdStatus: 'Move IN',
        hasMultipleStays: false,
        relatedStays: 1
    }
];

// Timeline Events
const timelineEvents = [
    {
        type: 'message',
        title: 'Guest sent message',
        description: 'Requested stay extension due to repair delays',
        timestamp: '2025-07-13 09:15 AM',
        user: 'SanskarTesting PenTest0307'
    },
    {
        type: 'task',
        title: 'Task completed',
        description: 'Sent lease agreement copy to guest',
        timestamp: '2025-07-12 11:30 AM',
        user: 'John Smith'
    },
    {
        type: 'document',
        title: 'Document uploaded',
        description: 'Lease_Agreement_447451.pdf',
        timestamp: '2025-07-12 11:25 AM',
        user: 'John Smith'
    },
    {
        type: 'message',
        title: 'Coordinator sent message',
        description: 'Confirmed maintenance visit between 2-4 PM',
        timestamp: '2025-07-12 10:45 AM',
        user: 'John Smith'
    },
    {
        type: 'message',
        title: 'Guest reported issue',
        description: 'Heater not working properly in unit',
        timestamp: '2025-07-12 10:30 AM',
        user: 'SanskarTesting PenTest0307'
    },
    {
        type: 'receipt',
        title: 'Receipt uploaded',
        description: 'Target purchase - $89.99',
        timestamp: '2025-07-11 03:20 PM',
        user: 'SanskarTesting PenTest0307'
    },
    {
        type: 'case',
        title: 'Case created',
        description: 'New temporary housing case opened',
        timestamp: '2025-07-01 09:00 AM',
        user: 'System'
    }
];
