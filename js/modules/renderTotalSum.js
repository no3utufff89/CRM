
const getTotalPrice = (data, name) => {
    let total = 0;
    total = data.reduce((previousSum, product) => {
        if (product.discont === false) {
            product.discont = 0;
        }
        let sum = product.count * product.price;
        sum -= (sum * product.discont) / 100;
        product.sum = sum;
        return (previousSum + sum);
    }, 0);
    return total;

}
export const renderTotalSum = (data, {allProductsCost}) => {
    allProductsCost.innerHTML = getTotalPrice(data);
};