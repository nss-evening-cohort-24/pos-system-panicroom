import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOpenOrders = (array) => {
  clearDom();
  const openOrders = array.filter((item) => item.orderStatus === 'open');
  let domString = '';
  if (openOrders.length < 1) {
    domString += '<p>No Open Orders Found</p>';
  } else {
    openOrders.forEach((obj) => {
      domString += `
        <div class="card" id="order-card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${obj.customerName}</h5>
            <ul>Order Status: ${obj.orderStatus}</ul>
            <ul>${obj.phoneNumber}</ul>
            <ul>${obj.email}</ul>
            <ul>${obj.orderType}</ul>
            <button type="button" id="view-details-btn--${obj.firebaseKey}" class="btn btn-success">View</button>
            <button type="button" id="edit-details-btn--${obj.firebaseKey}" class="btn btn-primary">Edit</button>
            <button type="button" id="delete-order-btn--${obj.firebaseKey}" class="btn btn-danger">Delete</button>
          </div>
        </div>
      `;
    });
  }
  renderToDom('#card-container', domString);
};

export default viewOpenOrders;
