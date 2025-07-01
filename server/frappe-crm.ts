import { InsertInquiry, InsertMembership, InsertTrainingBooking, InsertConsultancyBooking } from "@shared/schema";

interface FrappeCRMConfig {
  apiKey: string;
  apiSecret: string;
  baseUrl: string;
}

interface FrappeLead {
  lead_name: string;
  email_id?: string;
  mobile_no?: string;
  company_name?: string;
  source?: string;
  status?: string;
  notes?: string;
}

class FrappeCRMService {
  private config: FrappeCRMConfig;

  constructor(config: FrappeCRMConfig) {
    this.config = config;
  }

  private getAuthHeaders(): Record<string, string> {
    return {
      'Authorization': `token ${this.config.apiKey}:${this.config.apiSecret}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  async createLead(leadData: Partial<FrappeLead>): Promise<any> {
    try {
      const url = `${this.config.baseUrl}/api/resource/Lead`;
      
      const payload = {
        status: 'Open',
        source: 'Website',
        ...leadData
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Frappe CRM API Error:', errorText);
        throw new Error(`Failed to create lead in Frappe CRM: ${response.status}`);
      }

      const result = await response.json();
      console.log('Lead created successfully in Frappe CRM:', result.data?.name);
      return result.data;
    } catch (error) {
      console.error('Error creating lead in Frappe CRM:', error);
      // Don't throw - we don't want to break the form submission if CRM is down
      return null;
    }
  }

  async createLeadFromInquiry(inquiry: InsertInquiry): Promise<any> {
    const leadData: Partial<FrappeLead> = {
      lead_name: `${inquiry.firstName} ${inquiry.lastName}`,
      email_id: inquiry.email,
      notes: `Service Interest: ${inquiry.serviceInterest}\nMessage: ${inquiry.message}\nType: General Inquiry`
    };

    return this.createLead(leadData);
  }

  async createLeadFromMembership(membership: InsertMembership): Promise<any> {
    const leadData: Partial<FrappeLead> = {
      lead_name: `${membership.firstName} ${membership.lastName}`,
      email_id: membership.email,
      mobile_no: membership.phone || undefined,
      company_name: membership.company || undefined,
      notes: `Type: Membership Application\nCompany: ${membership.company || 'Not provided'}\nPhone: ${membership.phone || 'Not provided'}\nPaid: ₹2999`
    };

    return this.createLead(leadData);
  }

  async createLeadFromTraining(booking: InsertTrainingBooking): Promise<any> {
    const leadData: Partial<FrappeLead> = {
      lead_name: `${booking.firstName} ${booking.lastName}`,
      email_id: booking.email,
      mobile_no: booking.phone,
      company_name: booking.company || undefined,
      notes: `Type: Training Booking\nTraining Type: ${booking.trainingType}\nDate: ${booking.preferredDate}\nCompany: ${booking.company || 'Not provided'}\nMessage: ${booking.message || 'No additional message'}\nPaid: ₹5999`
    };

    return this.createLead(leadData);
  }

  async createLeadFromConsultancy(booking: InsertConsultancyBooking): Promise<any> {
    const leadData: Partial<FrappeLead> = {
      lead_name: `${booking.firstName} ${booking.lastName}`,
      email_id: booking.email,
      mobile_no: booking.phone,
      company_name: booking.company || undefined,
      notes: `Type: Consultancy Booking\nTopic: ${booking.consultancyTopic}\nDate: ${booking.preferredDate}\nTime: ${booking.preferredTime}\nCompany: ${booking.company || 'Not provided'}\nMessage: ${booking.message || 'No additional message'}\nPaid: ₹2500`
    };

    return this.createLead(leadData);
  }
}

// Initialize with your Frappe CRM credentials
export const frappeCRM = new FrappeCRMService({
  apiKey: 'ff3003a4a524995',
  apiSecret: 'a7dc60dee526800',
  baseUrl: 'https://my.gtpcglobal.com'
});