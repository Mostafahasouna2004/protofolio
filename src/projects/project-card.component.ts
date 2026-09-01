import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

export interface Project {
  number: string;
  title: string;
  subtitle: string;
  role: string;
  type: string;
  stack: string[];
  description: string;
  highlights: string[];
  workflow?: string[];
  badge?: string;
  delay?: number;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <div appReveal class="reveal project-card" [style.animationDelay]="(project.delay || 0) + 's'">
      <div style="padding:28px 32px 0;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
        <div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
            <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#4b5563">{{project.number}}</span>
            @if (project.badge) {
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#22d3ee;background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.25);border-radius:6px;padding:2px 8px">
                {{project.badge}}
              </span>
            }
          </div>
          <h3 style="font-family:'Outfit',sans-serif;font-weight:700;font-size:22px;color:#f0f0f5;margin:0;letter-spacing:-0.01em">{{project.title}}</h3>
          <div style="font-family:'Inter',sans-serif;font-size:14px;color:#6b7280;margin-top:4px">{{project.subtitle}}</div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#9ca3af;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:6px;padding:3px 10px">{{project.role}}</span>
          <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#9ca3af;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:6px;padding:3px 10px">{{project.type}}</span>
        </div>
      </div>

      <div style="padding:24px 32px;border-top:1px solid rgba(255,255,255,0.05);margin-top:20px">
        <p style="font-family:'Inter',sans-serif;font-size:15px;line-height:1.75;color:#9ca3af;margin:0 0 24px">{{project.description}}</p>

        @if (project.workflow) {
          <div style="margin-bottom:24px">
            <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#4b5563;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px">Workflow</div>
            <div style="display:flex;align-items:center;flex-wrap:wrap;gap:0">
              @for (step of project.workflow; track step; let i = $index) {
                <span style="display:flex;align-items:center;gap:0">
                  <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#22d3ee;background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.2);border-radius:6px;padding:4px 10px;white-space:nowrap">{{step}}</span>
                  @if (i < project.workflow!.length - 1) {
                    <span style="color:#4b5563;padding:0 4px;font-size:12px">→</span>
                  }
                </span>
              }
            </div>
          </div>
        }

        <div style="margin-bottom:24px">
          <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#4b5563;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px">Key Contributions</div>
          <ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px">
            @for (h of project.highlights; track h) {
              <li style="display:flex;align-items:flex-start;gap:10px">
                <span style="color:#22d3ee;margin-top:2px;flex-shrink:0">▸</span>
                <span style="font-family:'Inter',sans-serif;font-size:14px;color:#9ca3af;line-height:1.5">{{h}}</span>
              </li>
            }
          </ul>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px">
          @for (t of project.stack; track t) {
            <span class="skill-badge" style="font-size:12px">{{t}}</span>
          }
        </div>

        <div style="padding-top:16px;border-top:1px solid rgba(255,255,255,0.05)">
          <span style="font-family:'Outfit',sans-serif;font-size:13px;color:#4b5563;font-style:italic">Case Study — Coming Soon</span>
        </div>
      </div>
    </div>
  `,
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
