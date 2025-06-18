document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscription-form');
    const fields = ['fullName', 'email', 'password', 'repeatPassword', 'age', 'phone', 'address', 'city', 'zip', 'dni'];

    function showError(field, message) {
        document.getElementById('error-' + field).textContent = message;
    }

    function clearError(field) {
        document.getElementById('error-' + field).textContent = '';
    }

    function validateField(field) {
        const value = document.getElementById(field).value.trim();
        switch (field) {
            case 'fullName':
                return value.length > 6 && value.includes(' ') ? '' : 'Debe tener más de 6 letras y un espacio.';
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email inválido.';
            case 'password':
                return /[A-Za-z]/.test(value) && /\d/.test(value) && value.length >= 8 ? '' : 'Debe tener al menos 8 caracteres con letras y números.';
            case 'repeatPassword':
                return value === document.getElementById('password').value ? '' : 'Las contraseñas no coinciden.';
            case 'age':
                return Number.isInteger(+value) && +value >= 18 ? '' : 'Debe ser mayor o igual a 18.';
            case 'phone':
                return /^\d{7,}$/.test(value) ? '' : 'Debe tener al menos 7 dígitos sin símbolos.';
            case 'address':
                return /[A-Za-z]/.test(value) && /\d/.test(value) && value.includes(' ') && value.length >= 5 ? '' : 'Dirección inválida.';
            case 'city':
                return value.length >= 3 ? '' : 'Ciudad inválida.';
            case 'zip':
                return value.length >= 3 ? '' : 'Código postal inválido.';
            case 'dni':
                return /^\d{7,8}$/.test(value) ? '' : 'DNI inválido.';
            default:
                return '';
        }
    }

    fields.forEach(field => {
        const input = document.getElementById(field);
        input.addEventListener('blur', () => {
            const error = validateField(field);
            if (error) showError(field, error);
        });
        input.addEventListener('focus', () => clearError(field));
    });

    document.getElementById('fullName').addEventListener('input', function () {
        document.getElementById('form-title').textContent = 'HOLA ' + this.value;
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let errors = [];
        fields.forEach(field => {
            const error = validateField(field);
            if (error) {
                showError(field, error);
                errors.push(error);
            }
        });
        if (errors.length === 0) {
            let data = fields.map(f => f + ': ' + document.getElementById(f).value).join('\n');
            alert('Formulario enviado con éxito:\n' + data);
        } else {
            alert('Errores en el formulario:\n' + errors.join('\n'));
        }
    });
});
