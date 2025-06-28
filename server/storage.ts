import { users, inquiries, memberships, type User, type InsertUser, type Inquiry, type InsertInquiry, type Membership, type InsertMembership } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  
  createMembership(membership: InsertMembership): Promise<Membership>;
  getMemberships(): Promise<Membership[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private memberships: Map<number, Membership>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentMembershipId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.memberships = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentMembershipId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date() 
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createMembership(insertMembership: InsertMembership): Promise<Membership> {
    const id = this.currentMembershipId++;
    const membership: Membership = { 
      ...insertMembership, 
      id, 
      createdAt: new Date() 
    };
    this.memberships.set(id, membership);
    return membership;
  }

  async getMemberships(): Promise<Membership[]> {
    return Array.from(this.memberships.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
