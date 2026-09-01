import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';
import { ProjectCardComponent, Project } from './project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective, ProjectCardComponent],
  template: `
    <section id="projects" style="padding:120px 0;border-top:1px solid rgba(255,255,255,0.04)">
      <div style="max-width:1200px;margin:0 auto;padding:0 24px">
        <div appReveal class="section-label" style="margin-bottom:16px">Projects</div>
        <h2 appReveal style="font-family:'Outfit',sans-serif;font-weight:700;font-size:clamp(32px,5vw,52px);color:#f0f0f5;margin:0 0 64px;letter-spacing:-0.02em">
          What I've built
        </h2>
        <div class="projects-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(540px,1fr));gap:24px">
          @for (project of projects; track project.number) {
            <app-project-card [project]="project"></app-project-card>
          }
        </div>
      </div>
      <style>@media (max-width:640px){ .projects-grid { grid-template-columns:1fr !important; } }</style>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      number: '01', badge: 'Current Project', title: 'Al-Hijaz', subtitle: 'Hajj & Umrah Travel Platform',
      role: 'Solo Full Stack Developer', type: 'Full Stack',
      stack: ['Angular', 'TypeScript', '.NET', 'ASP.NET Core', 'REST API', 'SQL'],
      description: 'A full-stack Hajj and Umrah travel platform designed to manage the customer journey — from discovering packages and submitting booking requests to travel preparation and journey tracking. Built solo from architecture to deployment.',
      workflow: ['Package', 'Booking', 'Visa', 'Flight', 'Hotel', 'Journey'],
      highlights: ['Hajj & Umrah package management with full booking lifecycle', 'Visa workflow and flight/hotel reservation handling', 'Role-based access control and authentication system', 'Customer journey tracking and company operations dashboard', 'Real-time notifications across user roles'],
      delay: 0,
    },
    {
      number: '02', badge: 'Graduation Project', title: 'MentorX', subtitle: 'Smart Educational Platform',
      role: 'Frontend Developer', type: 'Web Application',
      stack: ['Angular', 'TypeScript', 'REST APIs', 'UI/UX', 'Responsive Design'],
      description: 'An educational platform serving teachers, students, and parents with course management, progress tracking, quizzes, assignments, and role-specific dashboards. My role focused on frontend architecture and API integration.',
      highlights: ['Frontend architecture for three user roles: Teacher, Student, Parent', 'Dashboard development with real-time data from REST APIs', 'Responsive UI across mobile and desktop', 'Component-driven Angular module structure', 'Full user flow implementation and state management'],
      delay: 0.1,
    },
    {
      number: '03', title: 'E-Commerce Platform', subtitle: 'Full Stack E-Commerce',
      role: 'Full Stack Developer', type: 'Web Application',
      stack: ['Angular', '.NET', 'REST API', 'Database'],
      description: 'A full-stack e-commerce application. Details and case study content to be added — this is a placeholder for the live project documentation.',
      highlights: ['Full stack implementation from frontend to backend', 'Product catalog and cart management', 'Order processing and user authentication'],
      delay: 0.2,
    },
    {
      number: '04', title: 'Nutrition Platform', subtitle: 'Health & Nutrition Application',
      role: 'Developer', type: 'Web Application',
      stack: ['Web Technologies', 'REST API'],
      description: 'A nutrition-focused web application. This is a placeholder for the project details — full case study and technical documentation to be added when the project is ready to showcase.',
      highlights: ['Nutrition tracking and management features', 'User-focused interface design', 'Backend integration for data persistence'],
      delay: 0.3,
    },
  ];
}
