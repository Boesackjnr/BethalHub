export type OpportunityCategory = 'Tender' | 'RFQ' | 'Job' | 'Learnership' | 'Internship' | 'Community Project' | 'Training';

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  description: string;
  category: OpportunityCategory;
  deadline: string;
  location: string;
  contactDetails: string;
  attachmentUrl?: string;
  createdAt: string;
  status: 'open' | 'closed' | 'draft';
}

export interface Business {
  id: string;
  name: string;
  logoUrl?: string;
  description: string;
  category: string;
  website?: string;
  social?: Record<string, string>;
  location: string;
  contact: string;
  verified: boolean;
  ownerId: string;
}

export interface CommunityNotice {
  id: string;
  title: string;
  content: string;
  type: 'Municipal' | 'Water/Electricity' | 'Announcement' | 'Event' | 'Public Update';
  createdAt: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface AppUser {
  uid: string;
  email: string;
  displayName: string;
  role: 'user' | 'admin';
  businessId?: string;
  createdAt: string;
}
