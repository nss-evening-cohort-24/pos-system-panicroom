import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrderDetails = (obj) => {
  clearDom();
  let domString = '';
  const total = obj.orderItems.reduce((prev, next) => prev + next.item_price, 0);
  console.warn(total);

  domString = `
  <h1 id="subTotal">Total: $${total.toFixed(2)}</h1>
  `;
  if (obj.orderItems.length < 1) {
    domString += '<p>This order is empty!</p>';
  } else {
    obj.orderItems.forEach((item) => {
      domString += `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${item.item_name}</h5>
          <p class="card-text bold">${item.item_price}</p>
          <i id="edit-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>`;
    });
  }

  domString += `
    <button type="button" class="btn btn-primary">Add Item</button>
    <button type="button" class="btn btn-secondary">Go to Payment</button>
    `;
  renderToDom('#view-container', domString);
};

export default viewOrderDetails;
