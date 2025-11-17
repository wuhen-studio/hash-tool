import { Component, signal, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HashService } from './services/hash.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NzInputModule, NzCardModule, NzButtonModule, NzIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private hashService = inject(HashService);
  private messageService = inject(NzMessageService);

  inputText = signal('');
  hashes = computed(() => this.hashService.computeHashes(this.inputText()));

  copy(text: string) {
    navigator.clipboard.writeText(text);
    this.messageService.success('✅ 复制成功！');
  }
}
