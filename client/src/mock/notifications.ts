export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'match' | 'workshop' | 'application' | 'update';
  unread: boolean;
  actionUrl?: string;
}

export const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "New Internship Match Found",
    message: "3 new internships match your profile in Bengaluru",
    time: "2 hours ago",
    type: "match",
    unread: true,
    actionUrl: "/dashboard"
  },
  {
    id: 2,
    title: "Career Workshop: Resume Building",
    message: "Join our upcoming workshop on December 15th at 2:00 PM",
    time: "1 day ago",
    type: "workshop",
    unread: true,
    actionUrl: "/awareness"
  },
  {
    id: 3,
    title: "Application Status Update",
    message: "Your application for TCS Data Science Intern has been shortlisted",
    time: "3 days ago",
    type: "application",
    unread: false
  },
  {
    id: 4,
    title: "Interview Preparation Workshop",
    message: "Don't miss our mock interview session this Friday",
    time: "1 week ago",
    type: "workshop",
    unread: true,
    actionUrl: "/awareness"
  },
  {
    id: 5,
    title: "New Skill Development Course",
    message: "Machine Learning fundamentals course now available",
    time: "2 weeks ago",
    type: "update",
    unread: false,
    actionUrl: "/awareness"
  },
  {
    id: 6,
    title: "Internship Application Reminder",
    message: "Deadline approaching for Flipkart UI/UX Designer position",
    time: "3 weeks ago",
    type: "application",
    unread: false
  }
];
