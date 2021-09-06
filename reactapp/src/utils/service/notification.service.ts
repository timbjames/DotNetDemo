import { BasicToastrOptions, toastr } from 'react-redux-toastr';

const error = (title: string, message: string, options?: BasicToastrOptions) => {
    toastr.error(title, message, options);
};

const NotificationService = {
    error: error
};

export {
    NotificationService
}