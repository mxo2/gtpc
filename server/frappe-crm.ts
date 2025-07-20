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
  status?: string;
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
      
      // Only include valid fields for Frappe Lead
      const payload = {
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
      // Lead created successfully
      return result.data;
    } catch (error) {
      console.error('Error creating lead in Frappe CRM:', error);
      // Don't throw - we don't want to break the form submission if CRM is down
      return null;
    }
  }

  async createLeadFromInquiry(inquiry: InsertInquiry): Promise<any> {
    const leadData: Partial<FrappeLead> = {
      lead_name: `${inquiry.firstName} ${inquiry.lastName} - ${inquiry.serviceInterest}`,
      email_id: inquiry.email,
      company_name: `GTPC Inquiry: ${inquiry.serviceInterest}`,
      status: 'Open'
    };

    return this.createLead(leadData);
  }

  async createLeadFromMembership(membership: InsertMembership): Promise<any> {
    const leadData: Partial<FrappeLead> = {
      lead_name: `${membership.firstName} ${membership.lastName} - Membership`,
      email_id: membership.email,
      mobile_no: membership.phone || undefined,
      company_name: membership.company || 'GTPC Membership Application',
      status: 'Open'
    };

    return this.createLead(leadData);
  }

  async createLeadFromTraining(booking: InsertTrainingBooking): Promise<any> {
    const leadData: Partial<FrappeLead> = {
      lead_name: `${booking.firstName} ${booking.lastName} - Training ${booking.trainingType}`,
      email_id: booking.email,
      mobile_no: booking.phone,
      company_name: booking.company || 'GTPC Training Booking',
      status: 'Open'
    };

    return this.createLead(leadData);
  }

  async createLeadFromConsultancy(booking: InsertConsultancyBooking): Promise<any> {
    const leadData: Partial<FrappeLead> = {
      lead_name: `${booking.firstName} ${booking.lastName} - Consultancy ${booking.consultancyTopic}`,
      email_id: booking.email,
      mobile_no: booking.phone,
      company_name: booking.company || 'GTPC Consultancy Booking',
      status: 'Open'
    };

    return this.createLead(leadData);
  }
}

// Initialize with your Frappe CRM credentials
export const frappeCRM = new FrappeCRMService({
  apiKey: '065b37817f49ea2',
  apiSecret: '99f2d036af12e32',
  baseUrl: 'https://my.gtpcglobal.com'
});