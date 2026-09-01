import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="skills" style="padding:120px 0;border-top:1px solid rgba(255,255,255,0.04)">
      <div style="max-width:1200px;margin:0 auto;padding:0 24px">
        <div appReveal class="section-label" style="margin-bottom:16px">Skills</div>
        <h2 appReveal style="font-family:'Outfit',sans-serif;font-weight:700;font-size:clamp(32px,5vw,52px);color:#f0f0f5;margin:0 0 64px;letter-spacing:-0.02em">
          Technical stack
        </h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px">
          @for (cat of categories; track cat.title; let i = $index) {
            <div appReveal class="reveal glass"
              [style.animationDelay]="(i * 0.08) + 's'"
              style="border-radius:14px;padding:28px 28px 24px">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px">
                <div [style.background]="cat.color" [style.boxShadow]="'0 0 10px '+cat.color+'80'"
                  style="width:8px;height:8px;border-radius:50%"></div>
                <span style="font-family:'Outfit',sans-serif;font-weight:600;font-size:14px;color:#d1d5db;letter-spacing:0.03em;text-transform:uppercase">
                  {{cat.title}}
                </span>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:8px">
                @for (skill of cat.skills; track skill) {
                  <span class="skill-badge">{{skill}}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  categories = [
    { title: 'Frontend', color: '#dd0031', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'] },
    { title: 'Backend', color: '#512bd4', skills: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core'] },
    { title: 'Database', color: '#38a169', skills: ['SQL', 'PostgreSQL', 'MongoDB'] },
    { title: 'Tools', color: '#f59e0b', skills: ['Git', 'GitHub', 'Swagger', 'Docker'] },
    { title: 'Additional', color: '#8b5cf6', skills: ['Node.js', 'Express.js', 'MEAN Stack'] },
    { title: 'AI / RAG', color: '#6b7280', skills: ['Applied AI Projects', 'RAG Concepts'] },
  ];
}
