import Swal from 'sweetalert2';

export const showAlert = (text: string) => {
    Swal.fire({
        text: text,
        icon: 'success',
        confirmButtonText: 'Okay',
    });
};

