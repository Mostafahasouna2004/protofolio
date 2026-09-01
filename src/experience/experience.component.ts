import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="experience" style="padding:120px 0;border-top:1px solid rgba(255,255,255,0.04)">
      <div style="max-width:1200px;margin:0 auto;padding:0 24px">
        <div appReveal class="section-label" style="margin-bottom:16px">Experience</div>
        <h2 appReveal style="font-family:'Outfit',sans-serif;font-weight:700;font-size:clamp(32px,5vw,52px);color:#f0f0f5;margin:0 0 64px;letter-spacing:-0.02em">
          Project experience
        </h2>
        <div style="position:relative;padding-left:48px">
          <div class="timeline-line"></div>
          @for (item of items; track item.title; let i = $index; let last = $last) {
            <div appReveal class="reveal"
              [style.paddingBottom]="last ? '0' : '48px'"
              [style.transitionDelay]="(i * 0.1) + 's'"
              style="position:relative">
              <div [style.background]="item.status === 'In Progress' ? '#22d3ee' : '#1f2937'"
                [style.borderColor]="item.status === 'In Progress' ? '#22d3ee' : 'rgba(255,255,255,0.15)'"
                [style.boxShadow]="item.status === 'In Progress' ? '0 0 12px rgba(34,211,238,0.5)' : 'none'"
                style="position:absolute;left:-40px;top:6px;width:10px;height:10px;border-radius:50%;border:2px solid"></div>
              <div class="glass" style="border-radius:12px;padding:24px 28px">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:12px">
                  <div>
                    <h3 style="font-family:'Outfit',sans-serif;font-weight:600;font-size:18px;color:#f0f0f5;margin:0 0 4px">{{item.title}}</h3>
                    <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#22d3ee">{{item.role}} · {{item.type}}</div>
                  </div>
                  <span [style.color]="item.status === 'In Progress' ? '#22d3ee' : '#6b7280'"
                    [style.background]="item.status === 'In Progress' ? 'rgba(34,211,238,0.1)' : 'rgba(255,255,255,0.04)'"
                    [style.border]="'1px solid '+(item.status === 'In Progress' ? 'rgba(34,211,238,0.25)' : 'rgba(255,255,255,0.07)')"
                    style="font-family:'JetBrains Mono',monospace;font-size:11px;border-radius:6px;padding:3px 10px;white-space:nowrap">{{item.status}}</span>
                </div>
                <p style="font-family:'Inter',sans-serif;font-size:14px;line-height:1.7;color:#9ca3af;margin:0 0 12px">{{item.description}}</p>
                <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#4b5563">{{item.stack}}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  items = [
    { title: 'Al-Hijaz — Full Stack Development', role: 'Solo Full Stack Developer', type: 'Solo Project', stack: 'Angular · .NET · REST API · Database', description: 'Independently architecting and developing a complete Hajj & Umrah travel platform, handling the entire stack from UI components to API design and database management.', status: 'In Progress' },
    { title: 'MentorX — Educational Platform', role: 'Frontend Developer', type: 'Graduation Project', stack: 'Angular · TypeScript · REST APIs', description: 'Led frontend development for a multi-role educational platform, building teacher, student, and parent interfaces with Angular and integrating with backend REST APIs.', status: 'Completed' },
    { title: 'E-Commerce Platform', role: 'Full Stack Developer', type: 'Project', stack: 'Angular · .NET', description: 'Developed a full-stack e-commerce application applying Angular and .NET skills.', status: 'Completed' },
    { title: 'Nutrition Platform', role: 'Developer', type: 'Project', stack: 'Web Technologies', description: 'Developed a nutrition management application with focus on user experience and data management.', status: 'Completed' },
  ];
}
