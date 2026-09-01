import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="contact" style="padding:120px 0 80px;border-top:1px solid rgba(255,255,255,0.04);position:relative;overflow:hidden">
      <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:700px;height:400px;border-radius:50%;background:radial-gradient(ellipse,rgba(34,211,238,0.04) 0%,transparent 70%);pointer-events:none"></div>
      <div style="max-width:1200px;margin:0 auto;padding:0 24px;text-align:center">
        <div appReveal class="section-label" style="margin-bottom:16px">Contact</div>
        <h2 appReveal style="font-family:'Outfit',sans-serif;font-weight:800;font-size:clamp(36px,6vw,72px);color:#f0f0f5;margin:0 0 20px;letter-spacing:-0.02em;line-height:1.1">
          Let's Build Something<br /><span style="color:#22d3ee">Great.</span>
        </h2>
        <p appReveal style="font-family:'Inter',sans-serif;font-size:18px;color:#6b7280;max-width:480px;margin:0 auto 56px;line-height:1.6">
          Have a project, idea, or opportunity? Let's talk.
        </p>
        <div appReveal style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:40px">
          <a href="mailto:mostafahasouna8@gmail.com" class="btn-primary"><span>✉</span> Email Me</a>
          <a href="tel:01004640036" class="btn-ghost"><span>📞</span> Call Me</a>
        </div>
        <div appReveal style="display:flex;justify-content:center;gap:32px;flex-wrap:wrap">
          @for (item of contactItems; track item.label) {
            <a [href]="item.href" style="text-decoration:none;display:flex;flex-direction:column;gap:4px">
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#4b5563;letter-spacing:0.08em;text-transform:uppercase">{{item.label}}</span>
              <span (mouseenter)="onEnter($event)" (mouseleave)="onLeave($event)"
                style="font-family:'JetBrains Mono',monospace;font-size:14px;color:#22d3ee;transition:color 0.2s">{{item.value}}</span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  contactItems = [
    { label: 'Email', value: 'mostafahasouna8@gmail.com', href: 'mailto:mostafahasouna8@gmail.com' },
    { label: 'Phone', value: '01004640036', href: 'tel:01004640036' },
  ];
  onEnter(e: MouseEvent) { (e.currentTarget as HTMLElement).style.color = '#38e8ff'; }
  onLeave(e: MouseEvent) { (e.currentTarget as HTMLElement).style.color = '#22d3ee'; }
}
