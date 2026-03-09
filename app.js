// Main JavaScript for TalonPro Portal

// Modal Functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// Dashboard Functions
function loadRecentActivity() {
    const container = document.getElementById('recentActivity');
    if (!container) return;

    const iconColors = {
        blue: 'bg-blue-100 text-blue-600',
        green: 'bg-green-100 text-green-600',
        purple: 'bg-purple-100 text-purple-600',
        yellow: 'bg-yellow-100 text-yellow-600',
        red: 'bg-red-100 text-red-600'
    };

    container.innerHTML = recentActivity.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${iconColors[activity.color]}">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="flex-1">
                <p class="font-medium text-gray-800">${activity.description}</p>
                <p class="text-sm text-gray-500">${activity.timestamp}</p>
            </div>
        </div>
    `).join('');
}

function loadMyTasks() {
    const tbody = document.getElementById('myTasksTable');
    if (!tbody) return;

    const myTasks = tasks.filter(task => task.status !== 'Completed').slice(0, 5);

    const statusClasses = {
        'Pending': 'badge-yellow',
        'In Progress': 'badge-blue',
        'Completed': 'badge-green',
        'Overdue': 'badge-red'
    };

    tbody.innerHTML = myTasks.map(task => `
        <tr>
            <td>${task.title}</td>
            <td>${task.caseId}</td>
            <td>${task.dueDate}</td>
            <td><span class="badge ${statusClasses[task.status]}">${task.status}</span></td>
            <td>
                <button class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadUnassignedCoordinators() {
    const container = document.getElementById('unassignedCoordinators');
    if (!container) return;

    const urgencyClasses = {
        'Urgent': 'badge-red',
        'High': 'badge-orange',
        'Medium': 'badge-yellow',
        'Low': 'badge-gray'
    };

    container.innerHTML = unassignedGuests.map(guest => `
        <div class="border border-orange-200 bg-orange-50 rounded-lg p-3 hover:bg-orange-100 transition-colors cursor-pointer">
            <div class="flex items-start justify-between mb-2">
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-800">${guest.firstName} ${guest.lastName}</h4>
                    <p class="text-sm text-gray-600">Case ID: ${guest.caseId}</p>
                </div>
                <span class="badge ${urgencyClasses[guest.urgency]} text-xs">${guest.urgency}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">
                    <i class="fas fa-calendar-alt mr-1"></i>
                    Check-in: ${guest.checkIn}
                </span>
                <button onclick="assignCoordinator('${guest.caseId}')" class="text-blue-600 hover:text-blue-800 font-medium">
                    <i class="fas fa-user-plus mr-1"></i>
                    Assign
                </button>
            </div>
            ${guest.daysUntilCheckIn <= 2 ? `<div class="mt-2 text-xs text-red-600 font-medium"><i class="fas fa-exclamation-triangle mr-1"></i>Check-in in ${guest.daysUntilCheckIn} days!</div>` : ''}
        </div>
    `).join('');
}

function loadUnrespondedMessages() {
    const container = document.getElementById('unrespondedMessages');
    if (!container) return;

    const priorityClasses = {
        'Urgent': 'badge-red',
        'High': 'badge-orange',
        'Medium': 'badge-yellow',
        'Low': 'badge-gray'
    };

    container.innerHTML = unrespondedMessages.map(msg => `
        <div class="border border-red-200 bg-red-50 rounded-lg p-3 hover:bg-red-100 transition-colors cursor-pointer">
            <div class="flex items-start justify-between mb-2">
                <div class="flex-1">
                    <h4 class="font-semibold text-gray-800">${msg.guestName}</h4>
                    <p class="text-xs text-gray-600 mb-1">Case ID: ${msg.caseId} • ${msg.timestamp}</p>
                    <p class="text-sm text-gray-700 line-clamp-2">${msg.message}</p>
                </div>
                <span class="badge ${priorityClasses[msg.priority]} text-xs ml-2">${msg.priority}</span>
            </div>
            <div class="flex items-center justify-between mt-2">
                <span class="badge badge-purple text-xs">${msg.category}</span>
                <button onclick="respondToMessage('${msg.id}')" class="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    <i class="fas fa-reply mr-1"></i>
                    Respond
                </button>
            </div>
        </div>
    `).join('');
}

function assignCoordinator(caseId) {
    alert(`Opening coordinator assignment for case ${caseId}...\n(This would open a modal to assign a coordinator)`);
}

function respondToMessage(messageId) {
    alert(`Opening message response for message ${messageId}...\n(This would navigate to the Messages tab or open a quick reply modal)`);
}

// Guest List Functions
function loadGuestList() {
    const tbody = document.getElementById('guestListTable');
    if (!tbody) return;

    const statusClasses = {
        'Active': 'badge-green',
        'Pending': 'badge-yellow',
        'Checked Out': 'badge-gray'
    };

    tbody.innerHTML = guests.map(guest => `
        <tr>
            <td class="font-medium">${guest.firstName} ${guest.lastName}</td>
            <td>${guest.phone}</td>
            <td>${guest.caseId}</td>
            <td><span class="badge ${statusClasses[guest.status]}">${guest.status}</span></td>
            <td>${guest.checkIn}</td>
            <td>${guest.checkOut}</td>
            <td>${guest.coordinator}</td>
            <td>
                <a href="guest-detail.html?id=${guest.id}" class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-eye"></i>
                </a>
            </td>
        </tr>
    `).join('');
}

// Guest Detail Functions
function loadGuestSidebar() {
    const container = document.getElementById('guestSidebar');
    if (!container) return;

    container.innerHTML = guests.map((guest, index) => `
        <div class="guest-sidebar-item ${index === 0 ? 'active' : ''}" onclick="selectGuest(${guest.id})">
            <div class="flex items-center justify-between mb-1">
                <p class="font-medium text-gray-800">${guest.firstName} ${guest.lastName}</p>
                <span class="badge badge-${guest.status === 'Active' ? 'green' : 'yellow'} text-xs">${guest.status}</span>
            </div>
            <p class="text-sm text-gray-600">Case: ${guest.caseId}</p>
        </div>
    `).join('');
}

function selectGuest(guestId) {
    document.querySelectorAll('.guest-sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Load guest details here
    loadGuestDetail(guestId);
}

function loadGuestDetail(guestId) {
    const guest = guests.find(g => g.id === (guestId || 1));
    if (!guest) return;

    // Update header information
    const nameEl = document.getElementById('guestName');
    const caseIdEl = document.getElementById('caseId');
    const unitIdEl = document.getElementById('unitId');
    const coordinatorEl = document.getElementById('coordinator');

    if (nameEl) nameEl.textContent = `${guest.firstName} ${guest.lastName}`;
    if (caseIdEl) caseIdEl.textContent = guest.caseId;
    if (unitIdEl) unitIdEl.textContent = guest.unitId;
    if (coordinatorEl) coordinatorEl.textContent = guest.coordinator;

    // Load AI Summary
    loadAICaseSummary(guest.id);
}

// AI Features
function loadAICaseSummary(guestId) {
    // This would be where we display AI-generated case summary
    // For now, it's handled in the guest detail page HTML
    const summary = aiCaseSummaries.find(s => s.guestId === guestId);
    return summary ? summary.summary : 'No summary available';
}

let currentSummaryVersion = 1;
function regenerateAISummary() {
    const summaryText = document.getElementById('aiSummaryText');
    if (!summaryText) return;

    // Show loading state
    summaryText.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div> Generating summary...';

    // Simulate AI generation delay
    setTimeout(() => {
        currentSummaryVersion = currentSummaryVersion === 1 ? 2 : 1;
        const summary = aiCaseSummaries.find(s => s.guestId === 1 && s.version === currentSummaryVersion);
        summaryText.textContent = summary.summary;
    }, 1500);
}

function generateAIReply() {
    const container = document.getElementById('aiReplySuggestions');
    if (!container) return;

    container.classList.remove('hidden');
    container.innerHTML = `
        <div class="ai-suggestion-box">
            <div class="flex items-center justify-between mb-3">
                <h4 class="font-semibold text-gray-800">
                    <span class="ai-badge mr-2">AI</span>
                    Suggested Replies
                </h4>
                <button onclick="closeAIReplies()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="space-y-2">
                ${aiSuggestedReplies.slice(0, 3).map(reply => `
                    <div class="ai-suggestion-item" onclick="selectAIReply(this)">
                        <p class="text-sm text-gray-700">${reply}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function closeAIReplies() {
    const container = document.getElementById('aiReplySuggestions');
    if (container) container.classList.add('hidden');
}

function selectAIReply(element) {
    const replyText = element.querySelector('p').textContent;
    const messageInput = document.querySelector('textarea[placeholder*="Type your message"]');
    if (messageInput) {
        messageInput.value = replyText;
    }
    closeAIReplies();
}

// Message Functions
function loadMessages() {
    const container = document.getElementById('messageThread');
    if (!container) return;

    const guestMessages = messages.filter(m => m.guestId === 1);

    container.innerHTML = guestMessages.map(message => `
        <div class="message-bubble ${message.sender}">
            <div class="flex items-center space-x-2 mb-1 ${message.sender === 'coordinator' ? 'justify-end' : ''}">
                <span class="badge badge-purple text-xs">${message.category}</span>
                ${message.sender === 'guest' ? `<span class="sentiment-indicator sentiment-${message.sentiment}">${message.sentiment}</span>` : ''}
            </div>
            <div class="message-content">
                <p>${message.content}</p>
            </div>
            <div class="message-meta ${message.sender === 'coordinator' ? 'text-right' : ''}">
                ${message.timestamp} • ${message.channel}
            </div>
        </div>
    `).join('');

    // Add AI reply suggestions container
    const aiSuggestionsDiv = document.createElement('div');
    aiSuggestionsDiv.id = 'aiReplySuggestions';
    aiSuggestionsDiv.className = 'hidden mt-4';
    container.appendChild(aiSuggestionsDiv);
}

// Task Functions
function loadGuestTasks() {
    const tbody = document.getElementById('guestTasksTable');
    if (!tbody) return;

    const guestTasks = tasks.filter(task => task.caseId === '447451');

    const statusClasses = {
        'Pending': 'badge-yellow',
        'In Progress': 'badge-blue',
        'Completed': 'badge-green',
        'Overdue': 'badge-red'
    };

    const priorityClasses = {
        'Low': 'badge-gray',
        'Medium': 'badge-blue',
        'High': 'badge-yellow',
        'Urgent': 'badge-red'
    };

    tbody.innerHTML = guestTasks.map(task => `
        <tr>
            <td>${task.title}</td>
            <td>${task.assignedTo}</td>
            <td>${task.dueDate}</td>
            <td><span class="badge ${statusClasses[task.status]}">${task.status}</span></td>
            <td><span class="badge ${priorityClasses[task.priority]}">${task.priority}</span></td>
        </tr>
    `).join('');
}

function loadAllTasks(filter = 'all') {
    const tbody = document.getElementById('tasksTable');
    if (!tbody) return;

    let filteredTasks = tasks;

    if (filter === 'me') {
        filteredTasks = tasks.filter(t => t.assignedTo === 'John Smith');
    } else if (filter === 'overdue') {
        filteredTasks = tasks.filter(t => t.status === 'Overdue');
    } else if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.status === 'Completed');
    }

    const statusClasses = {
        'Pending': 'badge-yellow',
        'In Progress': 'badge-blue',
        'Completed': 'badge-green',
        'Overdue': 'badge-red'
    };

    const priorityClasses = {
        'Low': 'badge-gray',
        'Medium': 'badge-blue',
        'High': 'badge-yellow',
        'Urgent': 'badge-red'
    };

    tbody.innerHTML = filteredTasks.map(task => `
        <tr>
            <td class="font-medium">${task.title}</td>
            <td>${task.caseId}</td>
            <td>${task.assignedTo}</td>
            <td>${task.dueDate}</td>
            <td><span class="badge ${statusClasses[task.status]}">${task.status}</span></td>
            <td><span class="badge ${priorityClasses[task.priority]}">${task.priority}</span></td>
            <td>
                <button class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Document Functions
function loadGuestDocuments() {
    const tbody = document.getElementById('guestDocumentsTable');
    if (!tbody) return;

    const guestDocs = documents.filter(doc => doc.caseId === '447451');

    tbody.innerHTML = guestDocs.map(doc => `
        <tr>
            <td><i class="fas fa-file-pdf text-red-500 mr-2"></i>${doc.name}</td>
            <td><span class="badge badge-blue">${doc.category}</span></td>
            <td>${doc.uploadedBy}</td>
            <td>${doc.uploadDate}</td>
            <td>
                <button class="text-blue-600 hover:text-blue-800 mr-2">
                    <i class="fas fa-download"></i>
                </button>
                <button class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadAllDocuments() {
    const tbody = document.getElementById('documentsTable');
    if (!tbody) return;

    tbody.innerHTML = documents.map(doc => `
        <tr>
            <td><i class="fas fa-file-pdf text-red-500 mr-2"></i>${doc.name}</td>
            <td>${doc.caseId}</td>
            <td><span class="badge badge-blue">${doc.category}</span></td>
            <td>${doc.uploadedBy}</td>
            <td>${doc.uploadDate}</td>
            <td>${doc.size}</td>
            <td>
                <button class="text-blue-600 hover:text-blue-800 mr-2">
                    <i class="fas fa-download"></i>
                </button>
                <button class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Receipt Functions
function loadGuestReceipts() {
    const tbody = document.getElementById('guestReceiptsTable');
    if (!tbody) return;

    const statusClasses = {
        'Approved': 'badge-green',
        'Pending': 'badge-yellow',
        'Under Review': 'badge-blue',
        'Rejected': 'badge-red'
    };

    tbody.innerHTML = receipts.map(receipt => `
        <tr>
            <td>${receipt.vendor}</td>
            <td>$${receipt.amount.toFixed(2)}</td>
            <td>${receipt.date}</td>
            <td><span class="badge ${statusClasses[receipt.status]}">${receipt.status}</span></td>
            <td>
                <button onclick="showAIExtraction(${receipt.id})" class="text-purple-600 hover:text-purple-800 mr-2" title="View AI Extraction">
                    <i class="fas fa-magic"></i>
                </button>
                <button class="text-blue-600 hover:text-blue-800">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function showAIExtraction(receiptId) {
    const receipt = receipts.find(r => r.id === receiptId);
    if (!receipt) return;

    alert(`AI Extracted Data:

Vendor: ${receipt.vendor}
Amount: $${receipt.amount.toFixed(2)}
Date: ${receipt.date}
Category: ${receipt.category}

This data was automatically extracted from the receipt image using AI.`);
}

// Timeline Functions
function loadGuestTimeline() {
    const container = document.getElementById('guestTimeline');
    if (!container) return;

    const iconMap = {
        'message': 'fa-comment',
        'task': 'fa-check-circle',
        'document': 'fa-file-upload',
        'receipt': 'fa-receipt',
        'case': 'fa-folder-plus'
    };

    container.innerHTML = timelineEvents.map(event => `
        <div class="timeline-item">
            <div class="timeline-content">
                <div class="flex items-start justify-between mb-2">
                    <div class="flex items-center">
                        <i class="fas ${iconMap[event.type]} text-blue-600 mr-2"></i>
                        <h4 class="font-semibold text-gray-800">${event.title}</h4>
                    </div>
                    <span class="text-xs text-gray-500">${event.timestamp}</span>
                </div>
                <p class="text-sm text-gray-600">${event.description}</p>
                <p class="text-xs text-gray-500 mt-1">by ${event.user}</p>
            </div>
        </div>
    `).join('');
}

// Template Functions
function loadTemplates() {
    const tbody = document.getElementById('templatesTable');
    if (!tbody) return;

    tbody.innerHTML = templates.map(template => `
        <tr>
            <td class="font-medium">${template.name}</td>
            <td><span class="badge badge-blue">${template.category}</span></td>
            <td>${template.subject}</td>
            <td>${template.lastUpdated}</td>
            <td>
                <button class="text-blue-600 hover:text-blue-800 mr-2">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="text-red-600 hover:text-red-800">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadTemplateList() {
    const container = document.getElementById('templateList');
    if (!container) return;

    container.innerHTML = templates.map(template => `
        <div class="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer" onclick="previewTemplate(${template.id})">
            <p class="font-medium text-gray-800">${template.name}</p>
            <p class="text-xs text-gray-500">${template.category}</p>
        </div>
    `).join('');
}

function previewTemplate(templateId) {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;

    const previewContainer = document.getElementById('templatePreview');
    if (previewContainer) {
        previewContainer.innerHTML = `
            <h4 class="font-semibold mb-2">${template.subject}</h4>
            <div class="text-sm text-gray-700 whitespace-pre-wrap">${template.body}</div>
        `;
    }
}

// Automation Rules Functions
function loadAutomationRules() {
    const tbody = document.getElementById('rulesTable');
    if (!tbody) return;

    const statusClasses = {
        'Active': 'badge-green',
        'Inactive': 'badge-gray',
        'Paused': 'badge-yellow'
    };

    tbody.innerHTML = automationRules.map(rule => `
        <tr>
            <td class="font-medium">${rule.name}</td>
            <td>${rule.trigger}</td>
            <td>${rule.action}</td>
            <td><span class="badge ${statusClasses[rule.status]}">${rule.status}</span></td>
            <td class="text-sm text-gray-600">${rule.lastRun}</td>
            <td>
                <button class="text-blue-600 hover:text-blue-800 mr-2">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="text-gray-600 hover:text-gray-800 mr-2">
                    <i class="fas fa-pause"></i>
                </button>
                <button class="text-red-600 hover:text-red-800">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// AI Follow-up Recommendations (for guest detail page)
function loadAIRecommendations() {
    const container = document.getElementById('aiRecommendations');
    if (!container) return;

    const priorityColors = {
        'high': 'text-red-600',
        'medium': 'text-yellow-600',
        'low': 'text-gray-600'
    };

    container.innerHTML = aiFollowUpRecommendations.map(rec => `
        <div class="flex items-start space-x-2 p-2 hover:bg-purple-50 rounded-lg cursor-pointer">
            <i class="fas ${rec.icon} ${priorityColors[rec.priority]} mt-1"></i>
            <p class="text-sm text-gray-700">${rec.text}</p>
        </div>
    `).join('');
}

// Form submission handlers
document.addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const modalParent = form.closest('.modal');

    if (modalParent) {
        // Show success message
        alert('Saved successfully! (Demo mode - no data was actually saved)');

        // Close modal
        modalParent.classList.remove('active');

        // Reset form
        form.reset();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('TalonPro Portal loaded successfully');
});
