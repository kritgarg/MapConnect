import { create } from 'zustand';

const mockProfiles = [
  {
    id: 1,
    name: 'Alex Johnson',
    photo: 'https://i.pravatar.cc/300?img=1',
    description: 'Senior UI Designer',
    role: 'UI/UX designer passionate about creating intuitive user experiences for web and mobile applications.',
    location: 'San Francisco, CA',
    coordinates: [-122.4194, 37.7749],
    skills: ['User Experience', 'Wireframing', '+1'],
  },
  {
    id: 2,
    name: 'Maya Rodriguez',
    photo: 'https://i.pravatar.cc/300?img=2',
    description: 'Lead Developer',
    role: 'Full stack developer with expertise in React, Node.js, and cloud architecture.',
    location: 'Austin, TX',
    coordinates: [-97.7431, 30.2672],
    skills: ['React', 'Node.js', '+1'],
  },
  {
    id: 3,
    name: 'Jamal Washington',
    photo: 'https://i.pravatar.cc/300?img=3',
    description: 'Data Science Lead',
    role: 'Data scientist specializing in machine learning and AI solutions for business intelligence.',
    location: 'Boston, MA',
    coordinates: [-71.0589, 42.3601],
    skills: ['Machine Learning', 'Data Analysis', '+1'],
  },
  {
    id: 4,
    name: 'Sofia Chen',
    photo: 'https://i.pravatar.cc/300?img=4',
    description: 'Senior Product Manager',
    role: 'Product manager with experience leading cross-functional teams and launching successful tech products.',
    location: 'Seattle, WA',
    coordinates: [-122.3321, 47.6062],
    skills: ['Product Strategy', 'User Research', '+1'],
  },
  {
    id: 5,
    name: 'Omar Patel',
    photo: 'https://i.pravatar.cc/300?img=5',
    description: 'Security Engineer',
    role: 'Cybersecurity specialist focusing on application security and penetration testing.',
    location: 'Chicago, IL',
    coordinates: [-87.6298, 41.8781],
    skills: ['Penetration Testing', 'Network Security', '+1'],
  },
  {
    id: 6,
    name: 'Emma Wilson',
    photo: 'https://i.pravatar.cc/300?img=6',
    description: 'Growth Marketing Manager',
    role: 'Marketing strategist specializing in growth hacking and digital marketing campaigns.',
    location: 'New York, NY',
    coordinates: [-74.0059, 40.7128],
    skills: ['Growth Hacking', 'Content Strategy', '+1'],
  },
];

const useProfileStore = create((set) => ({
  profiles: mockProfiles,
  addProfile: (profile) =>
    set((state) => ({
      profiles: [...state.profiles, { ...profile, id: Math.max(...state.profiles.map(p => p.id)) + 1 }],
    })),
  updateProfile: (updatedProfile) =>
    set((state) => ({
      profiles: state.profiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      ),
    })),
  deleteProfile: (profileId) =>
    set((state) => ({
      profiles: state.profiles.filter((profile) => profile.id !== profileId),
    })),
}));

export default useProfileStore; 