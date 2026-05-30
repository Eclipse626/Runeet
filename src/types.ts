export interface Runner {
  id: string;
  name: string;
  city: string;
  pace: string; // e.g. "4:30/km"
  paceSeconds: number; // to allow filtering/sorting by speed
  distance: string; // e.g. "5K", "10K", "Half Marathon", "Marathon"
  schedule: string; // "Morning", "Evening", "Lunch", "Weekend"
  goals: string[];
  avatarColor: string;
  avatarText: string;
  bio: string;
  safetyVerified: boolean;
}

export interface WaitlistSignup {
  email: string;
  name: string;
  pace: string;
  distance: string;
  schedule: string;
  ticketNumber: number;
  joinedAt: string;
}
