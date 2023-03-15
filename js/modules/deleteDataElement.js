const deleteDataElement = (productId,data) => {
    const index = data.findIndex(item => item.id === productId);
    data.splice(index,1);
    console.log(data)
}
export  default deleteDataElement;