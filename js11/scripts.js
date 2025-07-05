document.addEventListener('DOMContentLoaded', () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            const statusSet = new Set();
            const genderSet = new Set();
            const speciesSet = new Set();
            const typeSet = new Set();

            characters.forEach(char => {
                if (char.status) statusSet.add(char.status);
                if (char.gender) genderSet.add(char.gender);
                if (char.species) speciesSet.add(char.species);
                if (char.type) typeSet.add(char.type);
            });

            const populateSelect = (id, values) => {
                const select = document.getElementById(id);
                select.innerHTML = '<option value="">-- Cualquiera --</option>';
                Array.from(values).sort().forEach(val => {
                    const option = document.createElement('option');
                    option.value = val.toLowerCase();
                    option.textContent = val;
                    select.appendChild(option);
                });
            };

            populateSelect('status', statusSet);
            populateSelect('gender', genderSet);
            populateSelect('species', speciesSet);
            populateSelect('type', typeSet);
        });
});

document.getElementById('getAllBtn').addEventListener('click', () => {
    fetchCharacters('https://rickandmortyapi.com/api/character');
});

document.getElementById('filterBtn').addEventListener('click', () => {
    const form = document.getElementById('filterForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
    const species = document.getElementById('species').value;
    const type = document.getElementById('type').value;
    const gender = document.getElementById('gender').value;

    const params = new URLSearchParams({ name, status, species, type, gender });
    fetchCharacters('https://rickandmortyapi.com/api/character/?' + params.toString());
});

function fetchCharacters(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(data => {
            displayCharacters(data.results);
        })
        .catch(error => {
            document.getElementById('output').innerHTML = '<p style="color:red;">Error: ' + error.message + '</p>';
        });
}

function displayCharacters(characters) {
    const output = document.getElementById('output');
    output.innerHTML = '';
    if (!characters || characters.length === 0) {
        output.innerHTML = '<p>No se encontraron coincidencias.</p>';
        return;
    }

    const table = document.createElement('table');
    const header = table.insertRow();
    ['Nombre', 'Estado', 'Especie', 'Tipo', 'Género'].forEach(text => {
        const cell = header.insertCell();
        cell.textContent = text;
    });

    characters.forEach(character => {
        const row = table.insertRow();
        row.insertCell().textContent = character.name;
        row.insertCell().textContent = character.status;
        row.insertCell().textContent = character.species;
        row.insertCell().textContent = character.type || 'N/A';
        row.insertCell().textContent = character.gender;
    });

    output.appendChild(table);
}
