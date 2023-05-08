import { createRow } from "./builder.js";
import { renderGoods } from "./renderGoods.js";
import {renderTotalSum} from "./renderTotalSum.js";
import showModal from "./showModal.js";

const URL = `https://pastoral-suave-minnow.glitch.me/api/goods`;
const headers = {
    'Content-Type': 'application/json'
}

export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('loadend', () => {
        resolve(reader.result);
    });
    reader.addEventListener('error', (err) => {
        reject(err);
    });

    reader.readAsDataURL(file);
});

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

export const deleteItem = async (itemId, elements) => {
    try {
        const response = await fetch(`${URL}/${itemId}`, {
            method: 'DELETE',
            headers: headers,
        })
            if (response.ok) {
                const data = await response.json();
                fetch(URL, {
                    method: 'GET',
                    headers: headers,
                }).then(data => data.json())
                  .then(data => renderTotalSum(data, elements));
            }
        if (response.status > 300) {
            throw new Error(response.status);
        }
    } catch (err) {
        console.log(`Ошибка: ${err}`);
    }
  };

export const getCurrentItem = async (itemId) => {
    try {
        fetch(`${URL}/${itemId}`, {
            method: 'GET',
            headers: headers,
        }).then(data => data.json())
          .then(data => showModal(null, data));
        console.log('getCurrent')

    } catch (err) {
        console.log(`При загрузке произошла ошибка: ${err}`);
    }
}

export const changeItem = async (modalElements, data) => {
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
        idNumber,
        fileInput,


    } = modalElements;
    const formData = new FormData(modalForm);
    const product = Object.fromEntries(formData);

    const newProduct = {
        id: idNumber.textContent,
        title: product.name,
        category: product.category,
        description: product.description,
        units: product.units,
        count: Number(product.count),
        price: Number(product.price),
        discount: product.discontValue ? Number(product.discontValue) : false,
        image: `${fileInput.files[0] ? await toBase64(fileInput.files[0]) : data.image}`,
    };
 try {
     const response = await fetch(`${URL}/${idNumber.textContent}`, {
         method: 'PATCH',
         body: JSON.stringify(newProduct),
         headers: {
             'Content-Type': 'application/json',
         },
     })
         if (response.ok) {
             const data = await response.json();            
             discountInput.removeAttribute('disabled')
             discountCheckbox.checked = false;
             modalForm.reset();
             overlay.remove();
             renderGoods();
         }
     if (response.status > 300) {
         errorBox.classList.add('active');
         throw new Error(response.status);
     }
 } catch (err) {
     err.message ? errorText.textContent = `Ошибка: ${err}` : errorText.textContent = `Что то пошло не так`;
 }
}
export const addItem = async (modalElements, elements) => {
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
        fileInput,
    } = modalElements;
    const formData = new FormData(modalForm);
    const product = Object.fromEntries(formData);

    const newProduct = {
        title: product.name,
        category: product.category,
        description: product.description,
        units: product.units,
        count: Number(product.count),
        price: Number(product.price),
        discount: product.discontValue ? Number(product.discontValue) : false,
        image: `${fileInput.files[0] ? await toBase64(fileInput.files[0]) : null}`,
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
            //  overlay.classList.remove('overlay_active');
             
             discountInput.removeAttribute('disabled')
             discountCheckbox.checked = false;
             modalForm.reset();
             overlay.remove();
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