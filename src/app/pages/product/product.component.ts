import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { ProductModalComponent } from 'src/app/shared/components/product-modal/product-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product$!: Observable<IProduct>;
  isAdmin: boolean = false;
  userId!: number;
  addToCartLoading: boolean = false;
  ngUnSubscribe: Subject<void> = new Subject<void>();

  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {

    this.isAdmin = this.userService.checkUserType;
    this.userId = this.userService.getUserId || 0;
  }

  ngOnInit(): void {
    this.fetchProduct();
  }

  ngOnDestroy(): void {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

  fetchProduct(): void {
    const productId: number = this.activeRoute.snapshot.params.id;
    this.product$ = this.productService.fetchProduct(productId);
  }

  addToCard(product: IProduct): void {
    this.addToCartLoading = true;
    this.cartService.addToCard(this.userId, product.id)
      .subscribe(() => {
        this._notifyMsg('Product has added to cart');
        this.addToCartLoading = false;
      }, () => this.addToCartLoading = false);
  }

  private _notifyMsg(text: string): void {
    this.snackBar.open(text, 'Ok', {
      duration: 6000,
    });
  }

  editProduct(product: IProduct): void {
    this.openModal('add', product)
      .subscribe((result: string) => {
        if (result === 'updated') {
          this.fetchProduct();
        }
      });
  }

  deleteProduct(id: number): void {
    this.openModal('delete')
      .subscribe((result: string) => {
        if (result === 'delete') {
          this.productService.deleteProduct(id).subscribe(() => {
            this._notifyMsg('Product deleted successfully');
            this.router.navigate(['/']);
          });
        }
      });
  }

  openModal(option: 'add' | 'delete', data?: IProduct): Observable<any> {
    return this.dialog.open(ProductModalComponent,
      { panelClass: 'product-modal', data: { option, data } })
      .afterClosed()
      .pipe(takeUntil(this.ngUnSubscribe));
  }

  goBack(): void {
    this.location.back();
  }
}
