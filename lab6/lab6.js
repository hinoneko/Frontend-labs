document.getElementById('loadUser').addEventListener('click', getUserData);

function getUserData() {
  const count = document.getElementById('countSelect').value;
  const url = `https://randomuser.me/api/?results=${count}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка при завантаженні даних');
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById('userContainer');
      container.innerHTML = '';

      data.results.forEach(user => {
        const picture = user.picture.large;
        const cell = user.cell;
        const city = user.location.city;
        const postcode = user.location.postcode;
        const email = user.email;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${picture}" alt="User Picture">
          <p><strong>Телефон (cell):</strong> ${cell}</p>
          <p><strong>Місто (city):</strong> ${city}</p>
          <p><strong>Поштовий індекс (postcode):</strong> ${postcode}</p>
          <p><strong>Email:</strong> ${email}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      alert('Помилка: ' + error.message);
    });
}
