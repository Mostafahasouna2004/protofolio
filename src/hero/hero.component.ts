import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureFlowComponent } from './architecture-flow.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ArchitectureFlowComponent],
  template: `
    <section id="home"
      style="min-height:100vh;display:flex;align-items:center;padding-top:100px;padding-bottom:80px;position:relative;overflow:hidden">

      <div style="position:absolute;top:20%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(34,211,238,0.05) 0%,transparent 70%);pointer-events:none"></div>

      <div style="max-width:1200px;margin:0 auto;padding:0 24px;width:100%">
        <div class="hero-grid" style="display:grid;grid-template-columns:1fr auto;gap:80px;align-items:center">
          <div>
            <div class="section-label animate-fade-up" style="margin-bottom:20px">Full Stack Developer</div>
            <h1 class="animate-fade-up delay-100"
              style="font-family:'Outfit',sans-serif;font-weight:800;font-size:clamp(48px,8vw,88px);line-height:1.05;letter-spacing:-0.02em;margin:0 0 20px;color:#f0f0f5">
              Hi, I'm Mostafa Hasouna.
            </h1>
            <h2 class="animate-fade-up delay-200"
              style="font-family:'Outfit',sans-serif;font-weight:500;font-size:clamp(20px,3vw,28px);color:#22d3ee;margin:0 0 24px;letter-spacing:-0.01em">
              Angular &amp; .NET Full Stack Developer
            </h2>
            <p class="animate-fade-up delay-300"
              style="font-family:'Inter',sans-serif;font-size:17px;line-height:1.7;color:#9ca3af;max-width:520px;margin:0 0 40px">
              I build modern, scalable web applications from frontend to backend — combining Angular's power with .NET's robustness.
            </p>
            <div class="animate-fade-up delay-400" style="display:flex;gap:16px;flex-wrap:wrap">
              <button class="btn-primary" (click)="scrollTo('projects')">
                View My Work <span style="font-size:18px">→</span>
              </button>
              <button class="btn-ghost" (click)="scrollTo('contact')">Let's Connect</button>
            </div>

            <div class="animate-fade-up delay-500" style="display:flex;gap:10px;margin-top:48px;flex-wrap:wrap">
              @for (tag of tags; track tag) {
                <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6b7280;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:6px;padding:4px 10px">
                  {{tag}}
                </span>
              }
            </div>
          </div>

          <div class="animate-fade-in delay-400" style="display:flex;justify-content:center">
            <app-architecture-flow></app-architecture-flow>
          </div>
        </div>
      </div>

      <div style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;animation:fadeIn 1s 1s ease both">
        <span style="font-size:11px;color:#4b5563;font-family:'JetBrains Mono',monospace;letter-spacing:0.1em">SCROLL</span>
        <div style="width:1px;height:40px;background:linear-gradient(to bottom,#4b5563,transparent)"></div>
      </div>

      <style>
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      </style>
    </section>
  `,
})
export class HeroComponent {
  tags = ['Angular', 'TypeScript', '.NET', 'ASP.NET Core', 'REST APIs'];
  scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
}
