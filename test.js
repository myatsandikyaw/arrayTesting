//Prototype - myFilter
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const p=[20,30,60].myFilter((n => n >= 20))
console.log(p);

const orders = [
  { id: 1, customer: "Aung", city: "Yangon", total: 25000, status: "paid" },
  { id: 2, customer: "Su", city: "Mandalay", total: 12000, status: "pending" },
  { id: 3, customer: "Kyaw", city: "Yangon", total: 40000, status: "paid" },
  { id: 4, customer: "Mya", city: "Mandalay", total: 8000, status: "cancelled" },
];

//Get all customer names with map
const customername = orders.map(cus => cus.customer);
console.log(customername);

//Get orders with status "pending" with filter
const pendingOrder = orders.filter(o => o.status === "pending");
console.log(pendingOrder);

//Get names of orders with status "paid" with filter
const paidOrder = orders.filter(o => o.status === "paid").map(o=>o.customer);
console.log(paidOrder);

//Find order with id
const idsearch = orders.find( i => i.id === 1);
console.log(idsearch);

//Get total of all orders with reduce
const t = orders.reduce((sum,order) => sum + order.total,0);
console.log(t)

//Get total of all orders with city with reduce
const c = orders.reduce((r, o)=> {
    if (!r[o.city]){
        r[o.city] = 0;
    }
    r[o.city] += o.total;
    return  r;},{});
console.log(c);

//Get sorted orders by total with sort
const sortOrder = [...orders].sort((a,b) => a.total - b.total);
console.log(sortOrder);

