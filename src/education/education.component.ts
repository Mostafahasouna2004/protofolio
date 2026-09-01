import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="education" style="padding:120px 0;border-top:1px solid rgba(255,255,255,0.04)">
      <div style="max-width:1200px;margin:0 auto;padding:0 24px">
        <div appReveal class="section-label" style="margin-bottom:16px">Education</div>
        <h2 appReveal style="font-family:'Outfit',sans-serif;font-weight:700;font-size:clamp(32px,5vw,52px);color:#f0f0f5;margin:0 0 64px;letter-spacing:-0.02em">
          Training &amp; growth
        </h2>
        <div class="edu-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:64px">
          <div appReveal class="reveal-left">
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#4b5563;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:24px">Formal Training</div>
            <div style="display:flex;flex-direction:column;gap:16px">
              @for (t of training; track t.institution) {
                <div class="glass" style="border-radius:12px;padding:20px 24px">
                  <div style="display:flex;align-items:center;gap:12px">
                    <span style="font-size:20px">{{t.icon}}</span>
                    <div>
                      <div style="font-family:'Outfit',sans-serif;font-weight:600;font-size:16px;color:#f0f0f5">{{t.institution}}</div>
                      <div style="font-family:'Inter',sans-serif;font-size:14px;color:#22d3ee;margin-top:2px">{{t.course}}</div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <div appReveal class="reveal-right">
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#4b5563;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:24px">Developer Journey</div>
            <div style="position:relative;padding-left:32px">
              <div style="position:absolute;left:8px;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,rgba(34,211,238,0.5),rgba(34,211,238,0.05))"></div>
              @for (j of journey; track j.step; let i = $index; let last = $last) {
                <div [style.paddingBottom]="last ? '0' : '20px'" style="position:relative">
                  <div [style.background]="last ? '#22d3ee' : '#1f2937'"
                    [style.border]="'1.5px solid '+(last ? '#22d3ee' : 'rgba(255,255,255,0.15)')"
                    style="position:absolute;left:-28px;top:6px;width:8px;height:8px;border-radius:50%"></div>
                  <div [style.color]="last ? '#22d3ee' : '#d1d5db'"
                    style="font-family:'Outfit',sans-serif;font-weight:600;font-size:14px">{{j.step}}</div>
                  <div style="font-family:'Inter',sans-serif;font-size:12px;color:#6b7280;margin-top:2px">{{j.detail}}</div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <style>@media (max-width:768px){ .edu-grid { grid-template-columns:1fr !important; gap:40px !important; } }</style>
    </section>
  `,
})
export class EducationComponent {
  training = [
    { institution: 'Digital Egypt Initiative', course: 'Frontend Development with Angular', icon: '🇪🇬' },
    { institution: 'NTI', course: 'MEAN Stack', icon: '⚡' },
    { institution: 'Route', course: 'ASP.NET Track', icon: '◆' },
  ];
  journey = [
    { step: 'Frontend Foundation', detail: 'HTML · CSS · JavaScript' },
    { step: 'Angular', detail: 'Components · Services · Routing · Modules' },
    { step: 'MEAN Stack', detail: 'MongoDB · Express · Angular · Node.js' },
    { step: 'ASP.NET / .NET', detail: 'C# · Entity Framework · REST APIs' },
    { step: 'Full Stack Development', detail: 'End-to-end application architecture' },
    { step: 'Real-world Applications', detail: 'Production-grade projects' },
    { step: 'Al-Hijaz — Current Project', detail: 'Solo full-stack platform' },
  ];
}
