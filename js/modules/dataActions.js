import { createRow } from "./builder.js";
import {renderTotalSum} from "./renderTotalSum.js";

const URL = `https://pastoral-suave-minnow.glitch.me/api/goods`;
const headers = {
    'Content-Type': 'application/json'
}
// Получение данных

export const getItems = async () => {
    try {
        const items = await fetch(URL, {
            method: 'GET',
            headers: headers,
        });
        const data = await items.json();
        return data;
    } catch (err) {
        console.log(`При загрузке произошла ошибка: ${err}`);
    }
};
// Удаление данных

export const deleteItem = async (itemId) => {
    try {
      await fetch(`${URL}/${itemId}`, {
        method: 'DELETE',
        headers: headers,
      });

    } catch (err) {
      console.log(err);
    }
  };

export const addItem = async (elements) => {
    const {
        discountCheckbox,
        discountInput,
        productCount,
        productPrice,
        submitProduct,
        addNewProductBtn,
        overlay,
        hideOverlay,
        modalForm,
        errorBox,
        errorText,
    } = elements;
    const formData = new FormData(elements.modalForm);
    const product = Object.fromEntries(formData);

    const newProduct = {
        title: product.name,
        category: product.category,
        description: product.description,
        units: product.units,
        count: Number(product.count),
        price: Number(product.price),
        discount: product.discontValue ? Number(product.discontValue) : false,
    };
 try {
     const response = await fetch(URL, {
         method: 'POST',
         body: JSON.stringify(newProduct),
         headers: {
             'Content-Type': 'application/json',
         },
     })
         if (response.ok) {
             const data = await response.json();
             elements.list.append(createRow(data))
             overlay.classList.remove('overlay_active');
             discountInput.removeAttribute('disabled')
             discountCheckbox.checked = false;
             modalForm.reset();
             fetch(URL, {
                 method: 'GET',
                 headers: headers,
             }).then(data => data.json())
               .then(data => renderTotalSum(data, elements));
         }
     if (response.status > 300) {
         errorBox.classList.add('active');
         throw new Error(response.status);
     }
 } catch (err) {
     err.message ? errorText.textContent = `Ошибка: ${err}` : errorText.textContent = `Что то пошло не так`;
 }
}



// export const getItems = async (url, {
//     method = 'get',
//     callback,
//     body,
//     headers,
// }) => {
//     try {
//         const options = {
//             method,
//         };
//
//         if (body) options.body = JSON.stringify(body);
//         if (headers) options.headers = headers;
//
//         const response = await fetch(url, options);
//
//         if (response.ok) {
//             const data = await response.json();
//             if (callback) callback(null, data);
//             return;
//         }
//
//         throw new Error(response.status);
//
//     } catch (err) {
//         callback(err);
//     }
// }