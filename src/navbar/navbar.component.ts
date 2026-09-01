import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [style.padding]="scrolled() ? '12px 0' : '20px 0'"
      [style.background]="scrolled() ? 'rgba(8,8,15,0.85)' : 'transparent'"
      [style.backdropFilter]="scrolled() ? 'blur(20px)' : 'none'"
      [style.webkitBackdropFilter]="scrolled() ? 'blur(20px)' : 'none'"
      [style.borderBottom]="scrolled() ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'"
      style="position:fixed;top:0;left:0;right:0;z-index:100;transition:all 0.4s cubic-bezier(0.22,1,0.36,1)">
      <div style="max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between">
        <button (click)="scrollTo('home')"
          style="font-family:'Outfit',sans-serif;font-weight:800;font-size:22px;letter-spacing:0.08em;color:#f0f0f5;background:none;border:none;cursor:pointer;padding:0">
          MH<span style="color:#22d3ee">.</span>
        </button>

        <nav style="display:flex;gap:4px;align-items:center" class="hidden md:flex">
          @for (link of navLinks; track link) {
            <button (click)="scrollTo(link)"
              (mouseenter)="onNavEnter($event)"
              (mouseleave)="onNavLeave($event)"
              style="font-family:'Inter',sans-serif;font-size:14px;font-weight:500;color:#9ca3af;background:none;border:none;cursor:pointer;padding:6px 14px;border-radius:8px;transition:color 0.2s,background 0.2s">
              {{link}}
            </button>
          }
          <a href="mailto:mostafahasouna8@gmail.com" class="btn-primary"
            style="padding:8px 20px;font-size:14px;margin-left:8px">Let's Talk</a>
        </nav>

        <button (click)="menuOpen.set(!menuOpen())" aria-label="Toggle menu"
          class="md:hidden"
          style="background:none;border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 10px;cursor:pointer;color:#f0f0f5;display:flex;flex-direction:column;gap:4px">
          <span [style.transform]="menuOpen() ? 'rotate(45deg) translate(4px, 4px)' : 'none'"
            style="display:block;width:20px;height:1.5px;background:#f0f0f5;border-radius:2px;transition:all 0.25s"></span>
          <span [style.opacity]="menuOpen() ? '0' : '1'"
            style="display:block;width:20px;height:1.5px;background:#f0f0f5;border-radius:2px;transition:all 0.25s"></span>
          <span [style.transform]="menuOpen() ? 'rotate(-45deg) translate(4px, -4px)' : 'none'"
            style="display:block;width:20px;height:1.5px;background:#f0f0f5;border-radius:2px;transition:all 0.25s"></span>
        </button>
      </div>

      @if (menuOpen()) {
        <div style="position:absolute;top:100%;left:0;right:0;background:rgba(8,8,15,0.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.06);padding:16px 24px 24px;display:flex;flex-direction:column;gap:4px;animation:fadeIn 0.2s ease">
          @for (link of navLinks; track link) {
            <button (click)="scrollTo(link)"
              style="font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#9ca3af;background:none;border:none;cursor:pointer;padding:12px 0;text-align:left;border-bottom:1px solid rgba(255,255,255,0.04)">
              {{link}}
            </button>
          }
          <a href="mailto:mostafahasouna8@gmail.com" class="btn-primary" style="margin-top:12px;justify-content:center">
            Let's Talk
          </a>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);
  navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 40); }

  scrollTo(id: string) {
    this.menuOpen.set(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }

  onNavEnter(e: MouseEvent) {
    const btn = e.currentTarget as HTMLElement;
    btn.style.color = '#f0f0f5';
    btn.style.background = 'rgba(255,255,255,0.05)';
  }
  onNavLeave(e: MouseEvent) {
    const btn = e.currentTarget as HTMLElement;
    btn.style.color = '#9ca3af';
    btn.style.background = 'transparent';
  }
}
