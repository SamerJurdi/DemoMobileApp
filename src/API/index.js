function simulateApiCall(response) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    const delay = randomNumber * 2000; // Simulate delay between 0 and 2000 ms

    setTimeout(() => {
      if (randomNumber <= 0.85) {
        // 14 % chance of a simulated error
        resolve(response);
      } else {
        reject({error: 'Simulated error occurred'});
      }
    }, delay);
  });
}

async function fetchCategoryProducts(categoryId) {
  const products = [
    {
      id: 'product1',
      name: 'Product 1',
      price: 100,
      description: 'This is product 1',
      categoryIds: ['redhat', 'bow'],
    },
    {
      id: 'product2',
      name: 'Product 2',
      price: 45,
      description: 'This is product 2',
      categoryIds: ['redhat', 'tshirt'],
    },
    {
      id: 'product3',
      name: 'Product 3',
      price: 10,
      description: 'This is product 3',
      categoryIds: ['redhat', 'bow'],
    },
    {
      id: 'product4',
      name: 'Product 4',
      price: 159,
      description: 'This is product 4',
      categoryIds: ['redhat', 'cake'],
    },
    {
      id: 'product5',
      name: 'Product 5',
      price: 120,
      description: 'This is product 5',
      categoryIds: ['redhat', 'cake'],
    },
    {
      id: 'product6',
      name: 'Product 6',
      price: 30,
      description: 'This is product 6',
      categoryIds: ['redhat', 'cake'],
    },
  ].filter(product => product.categoryIds.includes(categoryId));

  return await simulateApiCall({products})
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
}

export {fetchCategoryProducts};
