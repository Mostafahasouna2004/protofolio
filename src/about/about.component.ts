import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="about" style="padding:120px 0;border-top:1px solid rgba(255,255,255,0.04)">
      <div style="max-width:1200px;margin:0 auto;padding:0 24px">
        <div appReveal class="section-label" style="margin-bottom:16px">About</div>
        <h2 appReveal style="font-family:'Outfit',sans-serif;font-weight:700;font-size:clamp(32px,5vw,52px);color:#f0f0f5;margin:0 0 64px;letter-spacing:-0.02em">
          Who I am
        </h2>

        <div class="about-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start">
          <div appReveal class="reveal-left">
            <div style="display:flex;gap:32px;align-items:flex-start;margin-bottom:32px;flex-wrap:wrap">
              <div style="width:120px;height:120px;border-radius:16px;overflow:hidden;border:2px solid rgba(34,211,238,0.3);flex-shrink:0;animation:glow-pulse 3s ease-in-out infinite">
                <img src="assets/me.jpg" alt="Mostafa Hasouna — Full Stack Developer"
                  style="width:100%;height:100%;object-fit:cover;object-position:top" />
              </div>
              <div>
                <div style="font-family:'Outfit',sans-serif;font-weight:700;font-size:24px;color:#f0f0f5">Mostafa Hasouna</div>
                <div style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#22d3ee;margin-top:4px">Full Stack Developer</div>
                <div style="font-size:14px;color:#6b7280;margin-top:8px;font-family:'Inter',sans-serif">Angular · .NET · REST APIs</div>
              </div>
            </div>
            <p style="font-family:'Inter',sans-serif;font-size:16px;line-height:1.8;color:#9ca3af;margin:0 0 20px">
              I'm a Full Stack Developer with a strong foundation in Angular on the frontend and .NET on the backend. I enjoy building complete web applications — from crafting responsive, component-driven UIs to designing RESTful APIs and working with relational and non-relational databases.
            </p>
            <p style="font-family:'Inter',sans-serif;font-size:16px;line-height:1.8;color:#9ca3af;margin:0">
              My focus is on scalable, maintainable software that solves real business problems. I care about clean architecture, clear API contracts, and user experiences that feel right.
            </p>
          </div>

          <div appReveal class="reveal-right">
            <div class="glass" style="border-radius:16px;padding:32px">
              <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#22d3ee;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px">
                Developer Profile
              </div>
              <div style="display:flex;flex-direction:column;gap:20px">
                @for (item of profileSummary; track item.label) {
                  <div style="padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.05)">
                    <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#4b5563;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px">{{item.label}}</div>
                    <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#d1d5db">{{item.value}}</div>
                  </div>
                }
              </div>
              <div style="margin-top:24px">
                <a href="mailto:mostafahasouna8@gmail.com"
                  (mouseenter)="onLinkEnter($event)" (mouseleave)="onLinkLeave($event)"
                  style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.15);color:#22d3ee;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:13px;transition:background 0.2s">
                  <span>✉</span> mostafahasouna8&#64;gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>@media (max-width:768px){ .about-grid { grid-template-columns:1fr !important; gap:40px !important; } }</style>
    </section>
  `,
})
export class AboutComponent {
  profileSummary = [
    { label: 'Frontend', value: 'Angular / TypeScript' },
    { label: 'Backend', value: '.NET / ASP.NET Core' },
    { label: 'Database', value: 'SQL / PostgreSQL / MongoDB' },
    { label: 'Tools', value: 'Git / GitHub / Swagger / Docker' },
  ];
  onLinkEnter(e: MouseEvent) { (e.currentTarget as HTMLElement).style.background = 'rgba(34,211,238,0.12)'; }
  onLinkLeave(e: MouseEvent) { (e.currentTarget as HTMLElement).style.background = 'rgba(34,211,238,0.06)'; }
}
