import { Cart } from '../cart';

export function RightPanel() {
  return (
    <div>
      <h2>Cart</h2>
      <button className="b1">CheckOut</button>
      <div>
        <Cart />
      </div>
    </div>
  );
}
