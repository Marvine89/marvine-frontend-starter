import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Output('onClick') clicked: EventEmitter<number> = new EventEmitter<number>();
  isAdmin: boolean = false;

  constructor(private userService: UserService) {
    this.isAdmin = this.userService.checkUserType;
  }

  viewProduct(): void {
    this.clicked.emit(this.product.id);
  }

  deleteProduct(): void { }
}
