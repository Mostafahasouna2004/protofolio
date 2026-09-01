import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-flow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="font-family:'JetBrains Mono',monospace;display:flex;flex-direction:column;align-items:center;gap:0;user-select:none">
      @for (node of nodes; track node.label; let i = $index) {
        <div style="display:flex;flex-direction:column;align-items:center">
          <div [style.background]="'rgba('+node.rgb+',0.1)'"
            [style.border]="'1px solid '+node.color+'40'"
            [style.animationDelay]="(i * 0.6) + 's'"
            style="display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:16px;padding:16px 32px;text-align:center;min-width:160px;animation:node-pulse 3s ease-in-out infinite">
            <span [style.color]="node.color" style="font-size:22px">{{node.icon}}</span>
            <span style="font-size:15px;font-weight:600;color:#f0f0f5;margin-top:4px">{{node.label}}</span>
            <span style="font-size:11px;color:#6b7280;margin-top:2px">{{node.sub}}</span>
          </div>
          @if (i < nodes.length - 1) {
            <div style="display:flex;flex-direction:column;align-items:center;height:48px;position:relative">
              <div style="width:1px;flex:1;background:linear-gradient(to bottom,rgba(34,211,238,0.5),rgba(34,211,238,0.15))"></div>
              <div [style.animationDelay]="(i * 0.6) + 's'"
                style="position:absolute;top:40%;width:6px;height:6px;border-radius:50%;background:#22d3ee;animation:pulse-dot 1.5s ease-in-out infinite"></div>
            </div>
          }
        </div>
      }
    </div>
  `,
})
export class ArchitectureFlowComponent {
  nodes = [
    { label: 'Angular', sub: 'Frontend', color: '#dd0031', rgb: '221,0,49', icon: '◈' },
    { label: 'REST API', sub: 'Interface', color: '#22d3ee', rgb: '34,211,238', icon: '⇄' },
    { label: '.NET', sub: 'Backend', color: '#512bd4', rgb: '81,43,212', icon: '◆' },
    { label: 'Database', sub: 'Persistence', color: '#38a169', rgb: '56,161,105', icon: '◉' },
  ];
}
