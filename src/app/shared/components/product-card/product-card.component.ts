import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { UserService } from '../../services/user/user.service';
import { takeUntil } from 'rxjs/operators';
import { ProductModalComponent } from 'src/app/shared/components/product-modal/product-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Output() productClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() productDeleted: EventEmitter<void> = new EventEmitter<void>();
  ngUnSubscribe: Subject<void> = new Subject<void>();
  isAdmin = false;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private productService: ProductService) {
    this.isAdmin = this.userService.checkUserType;
  }

  viewProduct(): void {
    this.productClicked.emit(this.product.id);
  }

  deleteProduct(): void {
    this.dialog.open(ProductModalComponent,
      { panelClass: 'product-modal', data: { option: 'delete' } })
      .afterClosed()
      .pipe(takeUntil(this.ngUnSubscribe))
      .subscribe((result: string) => {
        if (result === 'delete') {
          this.productService.deleteProduct(this.product.id).subscribe(() => {
            this.snackBar.open('Product deleted successfully', 'Ok', { duration: 4000 });
            this.productDeleted.emit();
          });
        }
      });
  }
}
