import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertMembershipSchema, insertTrainingBookingSchema, insertConsultancyBookingSchema, insertPhotoSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const created = await storage.createInquiry(inquiry);
      res.json(created);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit inquiry" });
      }
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  // Membership signup
  app.post("/api/membership", async (req, res) => {
    try {
      const membership = insertMembershipSchema.parse(req.body);
      const created = await storage.createMembership(membership);
      res.json(created);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create membership" });
      }
    }
  });

  // Get all memberships (for admin purposes)
  app.get("/api/memberships", async (req, res) => {
    try {
      const memberships = await storage.getMemberships();
      res.json(memberships);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch memberships" });
    }
  });

  // Training booking
  app.post("/api/training-booking", async (req, res) => {
    try {
      const booking = insertTrainingBookingSchema.parse(req.body);
      const created = await storage.createTrainingBooking(booking);
      res.json(created);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create training booking" });
      }
    }
  });

  // Get all training bookings (for admin purposes)
  app.get("/api/training-bookings", async (req, res) => {
    try {
      const bookings = await storage.getTrainingBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch training bookings" });
    }
  });

  // Consultancy booking
  app.post("/api/consultancy-booking", async (req, res) => {
    try {
      const booking = insertConsultancyBookingSchema.parse(req.body);
      const created = await storage.createConsultancyBooking(booking);
      res.json(created);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create consultancy booking" });
      }
    }
  });

  // Get all consultancy bookings (for admin purposes)
  app.get("/api/consultancy-bookings", async (req, res) => {
    try {
      const bookings = await storage.getConsultancyBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consultancy bookings" });
    }
  });

  // Photo upload/create
  app.post("/api/photos", async (req, res) => {
    try {
      const photo = insertPhotoSchema.parse(req.body);
      const created = await storage.createPhoto(photo);
      res.json(created);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create photo" });
      }
    }
  });

  // Get all photos
  app.get("/api/photos", async (req, res) => {
    try {
      const photos = await storage.getPhotos();
      res.json(photos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch photos" });
    }
  });

  // Get active photos (for public gallery)
  app.get("/api/photos/active", async (req, res) => {
    try {
      const photos = await storage.getActivePhotos();
      res.json(photos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch active photos" });
    }
  });

  // Delete photo
  app.delete("/api/photos/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deletePhoto(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete photo" });
    }
  });

  // Update photo
  app.patch("/api/photos/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const photo = await storage.updatePhoto(id, req.body);
      if (!photo) {
        return res.status(404).json({ message: "Photo not found" });
      }
      res.json(photo);
    } catch (error) {
      res.status(500).json({ message: "Failed to update photo" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
