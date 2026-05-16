/* ===== STATIC SERVICES DATA ===== */
const SERVICES_DATA = {
  'Property Registration': {
    description: 'Register your property ownership at the Sub-Registrar office. We handle all documentation and appointments.',
    category: 'Registration',
    fields: [
      { name: 'surveyNumber', label: 'Survey / Khasra Number', type: 'text', required: true },
      { name: 'propertyValue', label: 'Property Value (INR)', type: 'text', required: true },
      { name: 'sellerName', label: 'Seller Full Name', type: 'text', required: true },
      { name: 'buyerName', label: 'Buyer Full Name', type: 'text', required: true },
      { name: 'registrationDate', label: 'Preferred Registration Date', type: 'date', required: false }
    ],
    documents: [
      { name: 'Aadhaar Card (Buyer)', required: true },
      { name: 'Aadhaar Card (Seller)', required: true },
      { name: 'PAN Card (Both Parties)', required: true },
      { name: 'Sale Agreement / Draft Deed', required: true },
      { name: 'Property Tax Receipt (Latest)', required: true },
      { name: 'Encumbrance Certificate', required: false },
      { name: 'NOC from Society / Bank', required: false }
    ]
  },
  'Rental Agreement': {
    description: 'Draft, notarize, and register rental or lease agreements for residential or commercial properties.',
    category: 'Rental',
    fields: [
      { name: 'tenantName', label: 'Tenant Full Name', type: 'text', required: true },
      { name: 'monthlyRent', label: 'Monthly Rent (INR)', type: 'text', required: true },
      { name: 'leaseDuration', label: 'Lease Duration (Months)', type: 'text', required: true },
      { name: 'securityDeposit', label: 'Security Deposit (INR)', type: 'text', required: true },
      { name: 'commencementDate', label: 'Commencement Date', type: 'date', required: true }
    ],
    documents: [
      { name: 'Aadhaar Card (Owner)', required: true },
      { name: 'Aadhaar Card (Tenant)', required: true },
      { name: 'Property Ownership Documents', required: true },
      { name: 'Recent Utility Bill', required: false },
      { name: 'Passport Size Photos (Both)', required: false }
    ]
  },
  'Encumbrance Certificate': {
    description: 'Obtain official certificate confirming your property is free from legal dues and mortgages.',
    category: 'Certificates',
    fields: [
      { name: 'surveyNumber', label: 'Survey / Khasra Number', type: 'text', required: true },
      { name: 'periodFrom', label: 'Period From (Year)', type: 'text', required: true },
      { name: 'periodTo', label: 'Period To (Year)', type: 'text', required: true },
      { name: 'purpose', label: 'Purpose of EC', type: 'text', required: false }
    ],
    documents: [
      { name: 'Aadhaar Card', required: true },
      { name: 'Property Title Documents', required: true },
      { name: 'Application Form (Signed)', required: true }
    ]
  },
  'Property Mutation': {
    description: 'Transfer property records to the new owner\'s name in municipal / revenue records.',
    category: 'Transfer',
    fields: [
      { name: 'previousOwner', label: 'Previous Owner Name', type: 'text', required: true },
      { name: 'newOwner', label: 'New Owner Name', type: 'text', required: true },
      { name: 'mutationReason', label: 'Reason (Sale / Inheritance / Gift)', type: 'text', required: true }
    ],
    documents: [
      { name: 'Sale Deed / Gift Deed / Will', required: true },
      { name: 'Aadhaar Card (New Owner)', required: true },
      { name: 'Death Certificate (if Inheritance)', required: false },
      { name: 'Legal Heir Certificate (if applicable)', required: false },
      { name: 'Property Tax Receipts (Latest 3 yrs)', required: true }
    ]
  },
  'Property Tax Payment': {
    description: 'Clear property tax dues and obtain official receipts from the municipal corporation.',
    category: 'Tax',
    fields: [
      { name: 'propertyId', label: 'Property ID / Katha Number', type: 'text', required: true },
      { name: 'financialYear', label: 'Financial Year', type: 'text', required: true },
      { name: 'taxAmount', label: 'Approximate Tax Amount (INR)', type: 'text', required: false }
    ],
    documents: [
      { name: 'Previous Year Tax Receipt', required: true },
      { name: 'Aadhaar Card', required: true },
      { name: 'Property Ownership Proof', required: false }
    ]
  },
  'Society NOC': {
    description: 'Obtain No Objection Certificate from your housing society for sale, mortgage, or renovation.',
    category: 'NOC',
    fields: [
      { name: 'societyName', label: 'Society Name', type: 'text', required: true },
      { name: 'flatNumber', label: 'Flat / Unit Number', type: 'text', required: true },
      { name: 'nocPurpose', label: 'Purpose of NOC', type: 'text', required: true }
    ],
    documents: [
      { name: 'Aadhaar Card', required: true },
      { name: 'Society Membership Proof', required: true },
      { name: 'Application Letter', required: true },
      { name: 'Share Certificate', required: false }
    ]
  },
  'Legal Title Verification': {
    description: 'Comprehensive legal check of property ownership history and clear title verification.',
    category: 'Legal',
    fields: [
      { name: 'yearsVerification', label: 'Years of History to Verify', type: 'text', required: true },
      { name: 'loanPurpose', label: 'Purpose (Loan / Purchase / Investment)', type: 'text', required: false }
    ],
    documents: [
      { name: 'All Available Sale Deeds (Chain)', required: true },
      { name: 'Encumbrance Certificate', required: true },
      { name: 'Property Tax Receipts', required: true },
      { name: 'Aadhaar Card', required: true },
      { name: 'Khata Certificate', required: false }
    ]
  },
  'Property Valuation': {
    description: 'Get a certified market valuation report from government-approved valuers.',
    category: 'Valuation',
    fields: [
      { name: 'valuationPurpose', label: 'Purpose (Loan / Sale / Insurance)', type: 'text', required: true },
      { name: 'propertyType', label: 'Property Type', type: 'text', required: true }
    ],
    documents: [
      { name: 'Property Title Documents', required: true },
      { name: 'Recent Property Tax Receipt', required: true },
      { name: 'Floor Plan / Layout Plan', required: false },
      { name: 'Aadhaar Card', required: true }
    ]
  }
};

const SERVICE_NAMES = Object.keys(SERVICES_DATA);

/* ===== INIT DEFAULT DATA ===== */
function initData() {
  if (localStorage.getItem('ps_initialized')) return;

  const users = [
    { id: 1, name: 'Admin', email: 'admin@gmail.com', role: 'admin', isFirstTime: false },
    { id: 2, name: 'Rahul Sharma', email: 'user@gmail.com', role: 'user', isFirstTime: false }
  ];

  const properties = [
    {
      id: 1, userId: 2, name: 'Sharma Residence',
      ownerName: 'Rahul Sharma', address: '204, Green Valley Apartments, MG Road',
      type: 'Residential', area: '1450 sq ft', surveyNumber: 'SY/204/MG/BLR',
      village: 'Koramangala', taluka: 'Bangalore South', district: 'Bangalore Urban',
      state: 'Karnataka', pincode: '560034', createdAt: '2026-04-10'
    }
  ];

  const serviceRequests = [
    {
      id: 1, userId: 2, propertyId: 1, serviceType: 'Property Registration',
      status: 'in_progress',
      statusHistory: [
        { status: 'requested', date: '2026-04-12', note: 'Application submitted successfully' },
        { status: 'started', date: '2026-04-14', note: 'Documents received and verified by our team' },
        { status: 'in_progress', date: '2026-04-18', note: 'Processing at Sub-Registrar Office, Koramangala' }
      ],
      details: { surveyNumber: 'SY/204/MG/BLR', propertyValue: '75,00,000', sellerName: 'Mohan Kumar', buyerName: 'Rahul Sharma' },
      documents: ['Aadhaar Card (Buyer)', 'Aadhaar Card (Seller)', 'PAN Card (Both Parties)', 'Sale Agreement / Draft Deed', 'Property Tax Receipt (Latest)'],
      appliedAt: '2026-04-12', updatedAt: '2026-04-18'
    }
  ];

  localStorage.setItem('ps_users', JSON.stringify(users));
  localStorage.setItem('ps_properties', JSON.stringify(properties));
  localStorage.setItem('ps_service_requests', JSON.stringify(serviceRequests));
  localStorage.setItem('ps_next_id', '20');
  localStorage.setItem('ps_initialized', 'true');
}

/* ===== CRUD HELPERS ===== */
function getUsers() { return JSON.parse(localStorage.getItem('ps_users') || '[]'); }
function getProperties() { return JSON.parse(localStorage.getItem('ps_properties') || '[]'); }
function getServiceRequests() { return JSON.parse(localStorage.getItem('ps_service_requests') || '[]'); }
function saveUsers(u) { localStorage.setItem('ps_users', JSON.stringify(u)); }
function saveProperties(p) { localStorage.setItem('ps_properties', JSON.stringify(p)); }
function saveServiceRequests(r) { localStorage.setItem('ps_service_requests', JSON.stringify(r)); }

function getNextId() {
  const id = parseInt(localStorage.getItem('ps_next_id') || '20');
  localStorage.setItem('ps_next_id', String(id + 1));
  return id;
}

function getCurrentUser() {
  const id = localStorage.getItem('ps_current_user');
  if (!id) return null;
  return getUsers().find(u => u.id == id) || null;
}
function setCurrentUser(userId) { localStorage.setItem('ps_current_user', String(userId)); }
function logout() { localStorage.removeItem('ps_current_user'); window.location.href = 'index.html'; }

function getUserProperties(userId) { return getProperties().filter(p => p.userId == userId); }
function getUserServiceRequests(userId) { return getServiceRequests().filter(r => r.userId == userId); }
function getPropertyById(id) { return getProperties().find(p => p.id == id); }
function getServiceRequestById(id) { return getServiceRequests().find(r => r.id == id); }
function getUserById(id) { return getUsers().find(u => u.id == id); }

/* Email-based auth */
function findOrCreateUserByEmail(email) {
  const users = getUsers();
  let u = users.find(x => x.email && x.email.toLowerCase() === email.toLowerCase());
  if (!u) {
    u = { id: getNextId(), name: '', email: email.toLowerCase(), role: 'user', isFirstTime: true };
    users.push(u); saveUsers(users);
  }
  return u;
}

function addProperty(data) {
  const list = getProperties();
  const p = { id: getNextId(), ...data, createdAt: today() };
  list.push(p); saveProperties(list); return p;
}

function addServiceRequest(data) {
  const list = getServiceRequests();
  const r = {
    id: getNextId(), ...data, status: 'requested',
    statusHistory: [{ status: 'requested', date: today(), note: 'Application submitted successfully' }],
    appliedAt: today(), updatedAt: today()
  };
  list.push(r); saveServiceRequests(list); return r;
}

function updateServiceStatus(requestId, newStatus, note) {
  const list = getServiceRequests();
  const r = list.find(x => x.id == requestId);
  if (r) {
    r.status = newStatus;
    r.statusHistory.push({ status: newStatus, date: today(), note: note || '' });
    r.updatedAt = today();
    saveServiceRequests(list);
  }
}

function updateUser(userId, updates) {
  const users = getUsers();
  const i = users.findIndex(u => u.id == userId);
  if (i !== -1) { users[i] = { ...users[i], ...updates }; saveUsers(users); return users[i]; }
}

/* ===== DISPLAY HELPERS ===== */
function today() { return new Date().toISOString().split('T')[0]; }
function statusLabel(s) {
  return { requested: 'Requested', started: 'Started', in_progress: 'In Progress', completed: 'Completed' }[s] || s;
}
function statusBadge(s) {
  return `<span class="status-badge status-${s}">${statusLabel(s)}</span>`;
}
function initials(name) {
  if (!name) return '?';
  return name.trim().split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}
function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* Run init */
initData();
