import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer style="padding:32px 24px;border-top:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;flex-wrap:wrap;gap:16px">
      <div>
        <div style="font-family:'Outfit',sans-serif;font-weight:700;font-size:18px;color:#f0f0f5;letter-spacing:0.05em">
          MH<span style="color:#22d3ee">.</span>
        </div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#4b5563;margin-top:4px">
          Full Stack Developer — Angular &amp; .NET
        </div>
      </div>
      <div style="display:flex;gap:16px">
        @for (link of links; track link.label) {
          <a [href]="link.href" [attr.aria-label]="link.label"
            (mouseenter)="onEnter($event)" (mouseleave)="onLeave($event)"
            style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);color:#6b7280;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:13px;transition:background 0.2s,border-color 0.2s,color 0.2s">
            {{link.icon}}
          </a>
        }
      </div>
      <div style="font-family:'Inter',sans-serif;font-size:12px;color:#374151">
        © {{year}} Mostafa Hasouna. All rights reserved.
      </div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
  links = [
    { label: 'GitHub', href: '#', icon: '⌥' },
    { label: 'LinkedIn', href: '#', icon: 'in' },
    { label: 'Email', href: 'mailto:mostafahasouna8@gmail.com', icon: '✉' },
  ];
  onEnter(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.background = 'rgba(34,211,238,0.1)';
    el.style.borderColor = 'rgba(34,211,238,0.3)';
    el.style.color = '#22d3ee';
  }
  onLeave(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.background = 'rgba(255,255,255,0.04)';
    el.style.borderColor = 'rgba(255,255,255,0.07)';
    el.style.color = '#6b7280';
  }
}
