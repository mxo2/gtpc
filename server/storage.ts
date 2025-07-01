import { 
  users, inquiries, memberships, trainingBookings, consultancyBookings, photos,
  type User, type InsertUser, type Inquiry, type InsertInquiry, 
  type Membership, type InsertMembership, type TrainingBooking, type InsertTrainingBooking,
  type ConsultancyBooking, type InsertConsultancyBooking, type Photo, type InsertPhoto
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  
  createMembership(membership: InsertMembership): Promise<Membership>;
  getMemberships(): Promise<Membership[]>;
  
  createTrainingBooking(booking: InsertTrainingBooking): Promise<TrainingBooking>;
  getTrainingBookings(): Promise<TrainingBooking[]>;
  
  createConsultancyBooking(booking: InsertConsultancyBooking): Promise<ConsultancyBooking>;
  getConsultancyBookings(): Promise<ConsultancyBooking[]>;
  
  createPhoto(photo: InsertPhoto): Promise<Photo>;
  getPhotos(): Promise<Photo[]>;
  getActivePhotos(): Promise<Photo[]>;
  deletePhoto(id: number): Promise<void>;
  updatePhoto(id: number, updates: Partial<Photo>): Promise<Photo | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private memberships: Map<number, Membership>;
  private trainingBookings: Map<number, TrainingBooking>;
  private consultancyBookings: Map<number, ConsultancyBooking>;
  private photos: Map<number, Photo>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentMembershipId: number;
  private currentTrainingBookingId: number;
  private currentConsultancyBookingId: number;
  private currentPhotoId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.memberships = new Map();
    this.trainingBookings = new Map();
    this.consultancyBookings = new Map();
    this.photos = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentMembershipId = 1;
    this.currentTrainingBookingId = 1;
    this.currentConsultancyBookingId = 1;
    this.currentPhotoId = 1;
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
      company: insertMembership.company || null,
      phone: insertMembership.phone || null,
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

  async createTrainingBooking(insertTrainingBooking: InsertTrainingBooking): Promise<TrainingBooking> {
    const id = this.currentTrainingBookingId++;
    const booking: TrainingBooking = { 
      ...insertTrainingBooking, 
      id, 
      company: insertTrainingBooking.company || null,
      message: insertTrainingBooking.message || null,
      amount: 5999,
      status: "pending",
      createdAt: new Date() 
    };
    this.trainingBookings.set(id, booking);
    return booking;
  }

  async getTrainingBookings(): Promise<TrainingBooking[]> {
    return Array.from(this.trainingBookings.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createConsultancyBooking(insertConsultancyBooking: InsertConsultancyBooking): Promise<ConsultancyBooking> {
    const id = this.currentConsultancyBookingId++;
    const booking: ConsultancyBooking = { 
      ...insertConsultancyBooking, 
      id, 
      company: insertConsultancyBooking.company || null,
      message: insertConsultancyBooking.message || null,
      amount: 2500,
      status: "pending",
      createdAt: new Date() 
    };
    this.consultancyBookings.set(id, booking);
    return booking;
  }

  async getConsultancyBookings(): Promise<ConsultancyBooking[]> {
    return Array.from(this.consultancyBookings.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createPhoto(insertPhoto: InsertPhoto): Promise<Photo> {
    const id = this.currentPhotoId++;
    const photo: Photo = { 
      ...insertPhoto, 
      id, 
      description: insertPhoto.description || null,
      uploadedBy: insertPhoto.uploadedBy || null,
      isActive: insertPhoto.isActive || 1,
      createdAt: new Date() 
    };
    this.photos.set(id, photo);
    return photo;
  }

  async getPhotos(): Promise<Photo[]> {
    return Array.from(this.photos.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getActivePhotos(): Promise<Photo[]> {
    return Array.from(this.photos.values())
      .filter(photo => photo.isActive === 1)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async deletePhoto(id: number): Promise<void> {
    this.photos.delete(id);
  }
  
  async updatePhoto(id: number, updates: Partial<Photo>): Promise<Photo | undefined> {
    const photo = this.photos.get(id);
    if (!photo) return undefined;
    
    const updatedPhoto = { ...photo, ...updates };
    this.photos.set(id, updatedPhoto);
    return updatedPhoto;
  }
}

// Database storage implementation
import { eq, desc } from "drizzle-orm";
import { db } from "./db";

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries);
  }

  async createMembership(insertMembership: InsertMembership): Promise<Membership> {
    const [membership] = await db.insert(memberships).values(insertMembership).returning();
    return membership;
  }

  async getMemberships(): Promise<Membership[]> {
    return await db.select().from(memberships);
  }

  async createTrainingBooking(insertTrainingBooking: InsertTrainingBooking): Promise<TrainingBooking> {
    const [booking] = await db.insert(trainingBookings).values(insertTrainingBooking).returning();
    return booking;
  }

  async getTrainingBookings(): Promise<TrainingBooking[]> {
    return await db.select().from(trainingBookings);
  }

  async createConsultancyBooking(insertConsultancyBooking: InsertConsultancyBooking): Promise<ConsultancyBooking> {
    const [booking] = await db.insert(consultancyBookings).values(insertConsultancyBooking).returning();
    return booking;
  }

  async getConsultancyBookings(): Promise<ConsultancyBooking[]> {
    return await db.select().from(consultancyBookings);
  }

  async createPhoto(insertPhoto: InsertPhoto): Promise<Photo> {
    const [photo] = await db.insert(photos).values(insertPhoto).returning();
    return photo;
  }

  async getPhotos(): Promise<Photo[]> {
    return await db.select().from(photos);
  }

  async getActivePhotos(): Promise<Photo[]> {
    return await db.select().from(photos).where(eq(photos.isActive, 1)).orderBy(desc(photos.createdAt));
  }
  
  async deletePhoto(id: number): Promise<void> {
    await db.delete(photos).where(eq(photos.id, id));
  }
  
  async updatePhoto(id: number, updates: Partial<Photo>): Promise<Photo | undefined> {
    const [updated] = await db.update(photos).set(updates).where(eq(photos.id, id)).returning();
    return updated;
  }
}

export const storage = new DatabaseStorage();
